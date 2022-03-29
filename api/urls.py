from django.urls import path
from . import views

urlpatterns = [
    path("home/", views.getHomePage, name="home"),
    path("news/", views.getNewsPage, name="news"),
]