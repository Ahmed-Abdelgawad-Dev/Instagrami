from django.db import models
from django.conf import settings
from django.conf import settings


STATUS = ((0, 'Draft'), (1, 'Published'))


class Post(models.Model):
    title = models.CharField(max_length=150, unique=True)
    slug = models.SlugField(max_length=150, unique=True)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='blog_posts')
    author_name = models.CharField(
        default='No name', max_length=255)
    updated = models.DateTimeField(auto_now=True)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    img = models.ImageField(upload_to='images/',
                            blank=True, default='static/images/No-Image.jpg')

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.title
