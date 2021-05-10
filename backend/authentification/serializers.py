from rest_framework import serializers
from .models import User, Communaute
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.utils.timezone import now
from .utils import Util

SEXE_CHOICES = (
    ('homme','HOMME'),
    ('femme','FEMME'),
    ('Autre','AUTRE'),
)

ROLE_CHOICES = (
    ('leader','LEADER'),
    ('community_member','COMMUNITY_MEMBER'),

)



class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=68, min_length=6, write_only=True)
    

    date_naissance=serializers.DateField(default=now)
    sexe=serializers.ChoiceField(choices=SEXE_CHOICES,label='')
    role=serializers.ChoiceField(choices=ROLE_CHOICES)

    # nom_communaute = serializers.SerializerMethodField()
    
   
    default_error_messages = {
        'username': 'The username should only contain alphanumeric characters'}

    class Meta:
        model = User
        fields = [
            'nom',
            'prenom',
            'username',
            'email', 
            'username', 
            'password',
            'role',
            'communaute',
            'sexe','date_naissance',
            'tel',
            'pays',
            'ville',
            'adresse',
            'code_postal',
            'nom_communaute',
            'profile_pourcentage'
        ]

    def validate(self, attrs):
        email = attrs.get('email', '')
        username = attrs.get('username', '')
        domaine = Util.get_domain(email = email)
        nom_communaute = attrs.get('nom_communaute', '')
        role =  attrs.get('role', '')
        if role == 'leader':
            communaute_result=Communaute.objects.all().filter(nom=nom_communaute,domaine=domaine)
            if communaute_result:
                raise serializers.ValidationError(
                'communaute is already exists')
        if not username.isalnum():
            raise serializers.ValidationError(
                self.default_error_messages)
        return attrs

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class EmailVerificationSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=555)

    class Meta:
        model = User
        fields = ['token']


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(
        max_length=68, min_length=6, write_only=True)
    username = serializers.CharField(
        max_length=255, min_length=3, read_only=True)
    tokens = serializers.SerializerMethodField()


    def get_tokens(self, obj):

        user = User.objects.get(email=obj['email'])

        return {
            'refresh': user.tokens()['refresh'],
            'access': user.tokens()['access']
        }


    class Meta:
        model = User
        fields = ['email', 'password', 'username', 'tokens']

    def validate(self, attrs):

        email = attrs.get('email', '')
        password = attrs.get('password', '')
        
        user = auth.authenticate(email=email, password=password)

        if not user:
            raise AuthenticationFailed('Invalid credentials, try again')
        if not user.is_active:
            raise AuthenticationFailed('Account disabled, contact admin')
        if not user.is_verified:
            raise AuthenticationFailed('Email is not verified')
        return {
            'email': user.email,
            'username': user.username,
            'tokens': user.tokens,
            
        }

        return super().validate(attrs)


class ResetPasswordEmailRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=2)

    
    class Meta:
        fields = ['email']

    def validate(self, attrs):
        try:
            password = attrs.get('password')
            token = attrs.get('token')
            uidb64 = attrs.get('uidb64')

            id = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed('The reset link is invalid', 401)

            user.set_password(password)
            user.save()

            return (user)
        except Exception as e:
            raise AuthenticationFailed('The reset link is invalid', 401)
        return super().validate(attrs)

class SetNewPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        min_length=6, max_length=68, write_only=True)
    token = serializers.CharField(
        min_length=1, write_only=True)
    uidb64 = serializers.CharField(
        min_length=1, write_only=True)
    
    class Meta:
        fields = ['password', 'token', 'uidb64']

    def validate(self, attrs):
        try:
            password = attrs.get('password')
            token = attrs.get('token')
            uidb64 = attrs.get('uidb64')

            id = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed('The reset link is invalid', 401)

            user.set_password(password)
            user.save()

            return (user)
        except Exception as e:
            raise AuthenticationFailed('The reset link is invalid', 401)
        return super().validate(attrs)

class CommunauteSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Communaute
        fields = [
            'secteur_activite',
            'nom',
            'slug',
            'domaine', 
            'logo', 
            'siret',
            'pays',
            'ville',
            'adresse',
            'code_postal',
            'date_creation',
            'user',
            'communaute'
        ]




