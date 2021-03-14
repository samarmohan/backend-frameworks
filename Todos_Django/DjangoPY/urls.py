"""DjangoPY URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from api.views import ListCreateTodoAPI, RetrieveUpdateDestroyTodoAPI
from django.urls import path
from pages.views import index

urlpatterns = [
	path('', index),
	path('api/todos/', ListCreateTodoAPI.as_view()),
	path('api/todos/<pk>/', RetrieveUpdateDestroyTodoAPI.as_view()),
]
