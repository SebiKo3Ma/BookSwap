from django.shortcuts import render
from .models import Listing
import random

def homepage_view(request):
    # Fetch all listings and prefetch related data to optimize queries
    listings = list(
        Listing.objects.select_related('user', 'book')
        .only('description', 'book__title', 'user__username', 'image')  # Include only necessary fields
    )
    
    # Shuffle the listings and select the first 10
    random.shuffle(listings)
    listings = listings[:10]

    context = {
        'listings': listings
    }
    return render(request, 'index.html', context)
