from django.urls import path
from . import views
from config.settings import DEBUG, STATIC_URL, STATIC_ROOT, MEDIA_URL, MEDIA_ROOT
from django.conf.urls.static import static
urlpatterns = [
    path('', views.index,name='index'),
    path('upload/', views.upload),
    path('update/<slug:slug>', views.update_produit),
    path('delete/<slug:slug>', views.delete_produit),
    path('detail/<slug:slug>/', views.detail_view),
    
]

if DEBUG:
    urlpatterns += static(STATIC_URL, document_root = STATIC_ROOT)
    urlpatterns += static(MEDIA_URL, document_root = MEDIA_ROOT)