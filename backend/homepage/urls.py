from django.urls import path
from .views import homepage_view

urlpatterns = [
    path('static', homepage_view, name='homepage'),
]
