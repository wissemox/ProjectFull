from .models import Produit, Image, Categorie, SousCategorie 
from django.http import HttpResponse, Http404, JsonResponse
from django.contrib.auth.decorators import login_required 
from django.views.decorators.cache import cache_control 
from rest_framework.decorators import api_view 
from rest_framework.parsers import JSONParser 
from .serializers import ProduitSerializer, ImageSerializer
import json

@cache_control(no_cache=True, must_revalidate=True, no_store=True)   
@login_required
@api_view(['GET'])
def index(request): 

    #Lister products created by current user
    produits = Produit.objects.filter(owner=request.user)
    #The many=True argument specified serializes multiple Produit instances.
    serializer = ProduitSerializer(produits, many=True)
    serializer_data=[]
    for data in serializer.data:
        categorie = Categorie.objects.get(id = data['categorie'])
        sous_categorie = SousCategorie.objects.get(id = data['sous_categorie'])
        data['categorie'] = categorie.categorie
        data['sous_categorie'] = sous_categorie.sous_categorie
        serializer_data.append(data)
    return JsonResponse(serializer_data, safe=False) 
    
@cache_control(no_cache=True, must_revalidate=True, no_store=True)     
@login_required  
@api_view(['GET'])
def detail_view(request, slug):
    
    # fetch the object related to passed slug and created by current user
    try :
        produit = Produit.objects.get(slug=slug,owner= request.user)
    except Produit.DoesNotExist:
        return HttpResponse(status=404)    
    serializer = ProduitSerializer(produit)
    serializer_data = serializer.data
    categorie = Categorie.objects.get(id = serializer_data['categorie'])
    sous_categorie = SousCategorie.objects.get(id = serializer_data['sous_categorie'])
    serializer_data['categorie'] = categorie.categorie
    serializer_data['sous_categorie'] = sous_categorie.sous_categorie
    return JsonResponse(serializer_data, safe=False)
    
@cache_control(no_cache=True, must_revalidate=True, no_store=True)  
@login_required  
@api_view(['POST'])
def upload(request):
    
    #Upload both image and JSON in a single call
    images = request.FILES.getlist("images")
    data = json.loads(request.POST['data'])
    if len(images)>=1 and len(images)<=5:
        serializer = ProduitSerializer(data=data)
        if serializer.is_valid():
            prix_en_bins = convert_euros_bins(data['prix_en_euros'])
            created = serializer.save(owner=request.user, prix_en_bins=prix_en_bins)
            for image in images:
                photo = Image.objects.create(produit=created,image = image,)
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    else:
        raise Http404("You are enable to upload 1 to 5 images")

@cache_control(no_cache=True, must_revalidate=True, no_store=True)    
@login_required   
@api_view(['PUT']) 
def update_produit(request, slug):
      
    try :
        produit = Produit.objects.get(slug=slug,owner= request.user)
    except Produit.DoesNotExist:
        return HttpResponse(status=404)        
    data = JSONParser().parse(request)
    serializer = ProduitSerializer(produit, data=data)   
    if serializer.is_valid():
        prix_en_bins = convert_euros_bins(data['prix_en_euros'])
        created = serializer.save(owner=request.user, prix_en_bins = prix_en_bins)
        return JsonResponse(serializer.data)
    return JsonResponse(serializer.errors, status=400)


@cache_control(no_cache=True, must_revalidate=True, no_store=True)    
@login_required
@api_view(['DELETE'])
def delete_produit(request, slug):

    ## check if this produit is created by current user. 
    # if it is than allow to delete else raise error
    try :
        produit = Produit.objects.get(slug=slug,owner= request.user)
    except Produit.DoesNotExist:
        return HttpResponse(status=404) 
    produit.delete()
    return HttpResponse(status=204)

def convert_euros_bins(euros):
    x = 10
    bins = str(x*int(euros))
    return bins
    
