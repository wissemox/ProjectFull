from django.contrib import admin
from .models import Produit, Image, Categorie, SousCategorie
# Register your models here.

admin.site.register(Produit)
admin.site.register(Image)
admin.site.register(Categorie)
admin.site.register(SousCategorie)