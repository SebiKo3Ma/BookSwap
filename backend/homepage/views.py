from django.shortcuts import render
from .models import Listing

def homepage_view(request):
    # Fetch random listings directly from the database
    listings = Listing.objects.select_related('user', 'book') \
        .only('description', 'book__title', 'user__username', 'image') \
        .order_by('?')[:10]
    
    # Context for the template
    context = {
        'listings': listings
    }
    return render(request, 'index.html', context)
