from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView, TokenVerifyView
)


urlpatterns = [
    path('admin/', admin.site.urls),

    # path('api/v1/users/', include('users.urls')),
    # JWT Authentication
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    # Default Authentication
    # path('api-auth/', include('rest_framework.urls')),
    path('', include('api.urls')),
    path('', include('users.urls')),

]
