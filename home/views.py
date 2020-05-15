from django.shortcuts import render
from django.http import HttpResponse
from bakery.views import BuildableTemplateView

# Create your views here.
def home(request):
    return render(request,'home/home.html',{})

def about(request):
    return render(request,'about/about.html',{})

def contact(request):
    return render(request,'contact/contact.html',{})

def Q1_2017(request):
    return render(request, 'home/Q1_2017.html',{})
def Q3_2017(request):
    return render(request, 'home/Q3_2017.html',{})

def Q2_2018(request):
    return render(request, 'quarters/Q2_2018.html',{})
def Q2_2018_register(request):
    return render(request, 'quarters/Q2_2018_register.html',{})

class HomeView(BuildableTemplateView):
    build_path = 'index.html'
    template_name = 'home/home.html'

class AboutView(BuildableTemplateView):
    build_path = 'about.html'
    template_name = 'about/about.html'

class ContactView(BuildableTemplateView):
    build_path = 'contact.html'
    template_name = 'contact/contact.html'

class Q1_2017_View(BuildableTemplateView):
    build_path = 'Q1_2017.html'
    template_name = 'home/Q1_2017.html'

class Q3_2017_View(BuildableTemplateView):
    build_path = 'Q3_2017.html'
    template_name = 'home/Q3_2017.html'

class Q2_2018_View(BuildableTemplateView):
    build_path = 'Q2_2018.html'
    template_name = 'quarters/Q2_2018.html'

class Q2_2018_Register_View(BuildableTemplateView):
    build_path = 'Q2_2018_register.html'
    template_name = 'quarters/Q2_2018_register.html'
