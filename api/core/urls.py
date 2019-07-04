from django.urls import path
from . import views

urlpatterns = [
    path('clientes/', views.ClienteViewSet.as_view(), name = 'clientes_list'),
    path('clientes/<int:id>/', views.MyClientViewSet.as_view(), name = 'my_client')
]