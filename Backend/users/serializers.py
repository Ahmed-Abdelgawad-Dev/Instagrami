from rest_framework import serializers
from .models import Users


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        # fields = ('email',)
        """Security wise this is not the 
        best approach(Two Scoops of Django"""
        fields = '__all__'
