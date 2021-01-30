from rest_framework import generics
from .serializers import TodoSerializer
from .models import Todo


class AddTodoAPI(generics.CreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class ListTodoAPI(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class RetrieveTodoAPI(generics.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class UpdateTodoAPI(generics.RetrieveUpdateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class DeleteTodoAPI(generics.RetrieveDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
