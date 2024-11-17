from django.shortcuts import render
from .models import TitleCard
import random

def homepage_view(request):
    title_cards = list(TitleCard.objects.all())
    random.shuffle(title_cards) 
    title_cards = title_cards[:10]

    context = {
        'title_cards': title_cards
    }
    return render(request, 'homepage.html', context)