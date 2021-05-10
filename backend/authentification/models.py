from django.db import models, transaction
from django.contrib.postgres.fields import ArrayField
from rest_framework_simplejwt.tokens import RefreshToken
from django import forms
from datetime import datetime
from django.utils.timezone import now
from .utils import Util
from safedelete.models import SafeDeleteModel, SOFT_DELETE_CASCADE
from django.utils.text import slugify
import string
import random


def rand_slug():
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(6))
# Create your models here.
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin)

from django.db import models


class UserManager(BaseUserManager):

    def create_user(
        self, 
        username, 
        email, 
        role,
        sexe,
        date_naissance,
        password=None,
        nom='',
        prenom='',
        tel='',
        pays='',
        ville='',
        adresse='',
        code_postal='',
        nom_communaute=''
    ):
        if username is None:
            raise TypeError('Users should have a username')
        if email is None:
            raise TypeError('Users should have a Email')
        
        user = self.model(
            username=username, 
            email=self.normalize_email(email),
            role=role,
            sexe=sexe,
            date_naissance=date_naissance,
            nom = nom,
            prenom = prenom,
            tel = tel,
            pays = pays,
            ville = ville,
            adresse = adresse,
            code_postal = code_postal,
            nom_communaute = nom_communaute
        )
        user.set_password(password)
        try:
            user.save()
        except Exception as e:
            print("An exception", e) 
        return user

    def create_superuser(self, username, email, password=None):
        if password is None:
            raise TypeError('Password should not be none')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user


ROLE_CHOICES = (
    ('leader','LEADER'),
    ('community_member','COMMUNITY_MEMBER'),

)
CATEGORY_CHOICES = (
    ('iTech','ITECH'),
    ('meubles','MEUBLES'),
    ('accessoires enfants','ACCESSOIRES ENFANTS'),
    ('dressing(H/F)','DRESSING(H/F)'),
    ('fournitures bureau','FOURNITURES BUREAU'),


)
SEX_CHOICES = (
    ('homme','HOMME'),
    ('femme','FEMME'),
    ('Autre','AUTRE'),

    


)

class Communaute(SafeDeleteModel): 
    
    secteur_activite = models.CharField(max_length=255, blank=True, null=True)
    nom = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=250,null=False, unique=True) 
    domaine = models.CharField(max_length=255, unique=True)
    logo = models.CharField(max_length=255, blank=True, null=True)
    siret = models.FloatField(blank=True, null=True)
    
    pays = models.CharField(max_length=255, blank=True, null=True)
    ville = models.CharField(max_length=255, blank=True, null=True)
    adresse = models.CharField(max_length=255, blank=True, null=True)
    code_postal = models.IntegerField(blank=True, null=True)

    date_creation = models.DateTimeField(auto_now_add=True)
    date_modification = models.DateTimeField(auto_now=True)

    
    user = models.ForeignKey('User', on_delete=models.CASCADE, null=True, blank=True, related_name='+') 
    communaute = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='+') 
   
    def save(self, *args, **kwargs):
        value = self.nom
        self.slug = slugify(rand_slug() + "-" + value)
        super().save(*args, **kwargs)

            

class User(AbstractBaseUser, PermissionsMixin, SafeDeleteModel):

    nom = models.CharField(max_length=255,null=False)
    prenom = models.CharField(max_length=255, null=True)
    username = models.CharField(max_length=255, unique=True, db_index=True)
    email = models.EmailField(max_length=255, unique=True, db_index=True)
    tel = models.CharField(max_length=255, blank=True, null=True)
    pays = models.CharField(max_length=255, blank=True, null=True)
    ville = models.CharField(max_length=255, blank=True, null=True)
    adresse = models.CharField(max_length=255, blank=True, null=True)
    code_postal = models.IntegerField(blank=True, null=True)
    photo = models.CharField(max_length=255, blank=True, null=True)
    slug = models.SlugField(max_length=250,null=True, unique=True) 
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_creation = models.DateTimeField(auto_now_add=True)
    date_modification = models.DateTimeField(auto_now=True)
    role=models.CharField(max_length=20, choices=ROLE_CHOICES, default='Select a Role')
    communaute = models.ForeignKey(Communaute, null=True, blank=True, on_delete=models.CASCADE, related_name='+') 
    sexe=models.CharField(max_length=20, choices=SEX_CHOICES, default='Select a Role')
    date_naissance = models.DateTimeField(null=True, blank=True)    
    nom_communaute = models.CharField(max_length=255, blank=True, null=True)
    profile_pourcentage = models.FloatField(blank=True, null=True)
    
    

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return self.email
        
    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }

    def calcul_profile_pourcentage(self):
        total = 10
        completed_fields= 0
        if self.nom :
            completed_fields+=1
        if self.prenom :
            completed_fields+=1
        if self.tel :
            completed_fields+=1
        if self.pays :
            completed_fields+=1
        if self.ville :
            completed_fields+=1
        if self.adresse :
            completed_fields+=1
        if self.code_postal :
            completed_fields+=1
        if self.photo :
            completed_fields+=1
        if self.sexe :
            completed_fields+=1
        if self.date_naissance :
            completed_fields+=1
        self.profile_pourcentage = completed_fields*10
        
        
    def save(self, *args, **kwargs):        
        value = self.username
        self.slug = slugify(rand_slug() + "-" + value)
        self.calcul_profile_pourcentage()
        
        super().save(*args, **kwargs)
