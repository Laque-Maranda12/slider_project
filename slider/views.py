from django.shortcuts import render
from .models import SliderImage


def index(request):
    """Главная страница с слайдером."""
    slides = SliderImage.objects.filter(is_active=True).order_by('order')
    context = {
        'slides': slides,
    }
    return render(request, 'slider/index.html', context)
