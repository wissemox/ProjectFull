from django.db import models
from django.contrib.auth.models import User
from safedelete.models import SafeDeleteModel, SOFT_DELETE_CASCADE
from django.utils.text import slugify
import string
import random

def rand_slug():
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(6))
# Create your models here.
class Categorie(models.Model):

    categorie =  models.CharField(max_length=50)
class SousCategorie(models.Model):

    sous_categorie =  models.CharField(max_length=50)
    categorie = models.ForeignKey(Categorie, on_delete=models.CASCADE) 

class Produit(SafeDeleteModel):
    _safedelete_policy = SOFT_DELETE_CASCADE
    produit_id = models.BigAutoField(primary_key=True)
    ETAT = (
        ('A+', 'A+'),
        ('A', 'A'),
        ('B+', 'B+'),
        ('B', 'B'),
    )
    
    YES_NO = (
        ('No', 'No'),
        ('Yes', 'Yes'),
        )
    nom = models.CharField(max_length=50)
    prix_en_euros = models.IntegerField()
    prix_en_bins = models.IntegerField()
    #Set category field  to null if the referenced category is deleted
    categorie = models.ForeignKey(Categorie,on_delete=models.SET_NULL,blank=True,null=True,)
    sous_categorie = models.ForeignKey(SousCategorie,on_delete=models.SET_NULL,blank=True,null=True,)
    marque  = models.CharField(max_length=50)
    modele = models.CharField(max_length=50)
    version = models.CharField(max_length=50)
    critere =  models.CharField(max_length=2, choices=ETAT)
    fonctionnel = models.CharField(max_length=3, choices=YES_NO)
    description = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE) 
    slug = models.SlugField(max_length=250,null=False, unique=True) 
                       
    class Meta:
        app_label = 'gestionDeProduits'
        managed = True
    def get_absolute_url(self):
        kwargs = {
            'slug': self.slug
        }
        return reverse('produit_detail', kwargs=kwargs)    
    def save(self, *args, **kwargs):
        value = self.nom
        self.slug = slugify(rand_slug() + "-" + value)
        super().save(*args, **kwargs)


class Image(SafeDeleteModel):
    _safedelete_policy = SOFT_DELETE_CASCADE
    produit = models.ForeignKey(Produit,related_name='images', on_delete=models.CASCADE) 
    image = models.ImageField()   
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        app_label = 'gestionDeProduits'
        managed = True 


    


    