from django.views import generic
from .models import Post

class PostList(generic.ListView):
    queryset = Post.objects.filter(status=1).order_by('-created')


class PostDetail(generic.DetailView):
    model = Post