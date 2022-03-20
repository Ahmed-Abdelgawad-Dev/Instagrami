from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'slug', 'author', 'author_name', 'created', 'updated',
                  'content', 'status', 'img')
