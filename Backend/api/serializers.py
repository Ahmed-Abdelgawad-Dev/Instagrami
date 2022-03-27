from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):

    # url = serializers.HyperlinkedIdentityField(view_name="api-post-detail")

    class Meta:
        model = Post
        fields = ('id', 'title', 'slug', 'author', 'author_name', 'created', 'updated',
                  'content', 'status', 'img')
