"""OwlHacks URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
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
from django.urls import path
from . import views

app_name = 'home'
urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about , name = 'about'),
    path('contact', views.contact, name = 'contact'),
    path('Q1_2017',views.Q1_2017, name = 'Q1_2017'),
    path('Q3_2017',views.Q3_2017, name = 'Q3_2017'),
    path('Q2_2018', views.Q2_2018, name = 'Q2_2018'),
    path('Q2_2018_register', views.Q2_2018_register, name = 'Q2_2018_register'),
]
