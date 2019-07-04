from django.contrib import admin
from django.urls import path, include
from core.views import ClienteViewSet
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/', include('core.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
