from django.contrib import admin
from .models import Produit, Image, Categorie, SousCategorie

# Register your models here.
class CategorieAdmin(admin.ModelAdmin):
    #model = Categorie
    list_display = ('categorie',)
    #inlines = [SousCategorieAdmin,]

class SousCategorieAdmin(admin.ModelAdmin):
    #model = SousCategorie
    list_display = ('categorie','sous_categorie',)
    #inlines = [CategorieAdmin,]



    

admin.site.register(Produit)
admin.site.register(Image)
admin.site.register(Categorie, CategorieAdmin)
admin.site.register(SousCategorie,SousCategorieAdmin)
