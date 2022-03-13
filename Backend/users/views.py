from rest_framework import viewsets, permissions
from .models import CustomUser
from .serializers import CustomUserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.AllowAny]
