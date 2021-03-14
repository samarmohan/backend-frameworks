from rest_framework import generics

from .models import Todo
from .serializers import TodoSerializer


class ListCreateTodoAPI(generics.ListCreateAPIView):
	queryset = Todo.objects.all()
	serializer_class = TodoSerializer


class RetrieveUpdateDestroyTodoAPI(generics.RetrieveUpdateDestroyAPIView):
	queryset = Todo.objects.all()
	serializer_class = TodoSerializer
