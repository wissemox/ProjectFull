from django.db import models
from django.contrib.postgres.fields import ArrayField
from rest_framework_simplejwt.tokens import RefreshToken
from django import forms
from datetime import datetime
from django.utils.timezone import now
# Create your models here.
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin)

from django.db import models


class UserManager(BaseUserManager):

    def create_user(self, username, email, role,nomcommunaute,Sexe,DateNaissance,password=None):
        if username is None:
            raise TypeError('Users should have a username')
        if email is None:
            raise TypeError('Users should have a Email')
        
        user = self.model(username=username, email=self.normalize_email(email),role=role,nomcommunaute=nomcommunaute,Sexe=Sexe,DateNaissance=DateNaissance)
        user.set_password(password)
        user.save()
        
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


class User(AbstractBaseUser, PermissionsMixin):

    username = models.CharField(max_length=255, unique=True, db_index=True)
    email = models.EmailField(max_length=255, unique=True, db_index=True)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    role=models.CharField(max_length=20, choices=ROLE_CHOICES, default='Select a Role')
    nomcommunaute=models.CharField(max_length=68,default='nom_communauté')
    Sexe=models.CharField(max_length=20, choices=SEX_CHOICES, default='Select a Role')
    DateNaissance = models.DateTimeField(default=now, blank=True)    
    
    

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

            