from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        # Writing the field's parts in a setr would be better for security
        fields = '__all__'
