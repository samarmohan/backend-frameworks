from rest_framework import generics
from .serializers import TodoSerializer
from .models import Todo


class ListCreateTodoAPI(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class RetrieveUpdateDestroyTodoAPI(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
