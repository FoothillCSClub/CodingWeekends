from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request,'home/home.html',{})

def about(request):
    return render(request,'home/about.html',{})

def contact(request):
    return render(request,'home/contact.html',{})

def Q1_2017(request):
    return render(request, 'home/Q1_2017.html',{})
def Q3_2017(request):
    return render(request, 'home/Q3_2017.html',{})

def Q1_2018(request):
    return render(request, 'home/2018.html',{})
