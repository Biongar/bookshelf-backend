from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView


urlpatterns = [
    path('bookshelf/', include('src.bookshelf.urls')),
    
    path('account/', include('src.account.urls')),
    path('account/', include('djoser.urls')),
    path('account/', include('djoser.urls.jwt')),
    path('account/', include('src.account.urls')),
    # Swagger
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]