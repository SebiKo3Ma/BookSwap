import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ListingService } from './listing.service';
import { CreateListingDto } from './dto/create-listing.dto';

@Controller('listings')
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  // Endpoint to create a new listing
  @Post()
  async createListing(@Body() createListingDto: CreateListingDto) {
    return this.listingService.createListing(createListingDto);
  }

  // Endpoint to get all listings
  @Get()
  async getAllListings() {
    return this.listingService.getAllListings();
  }

  // Endpoint to get random listings
  @Get('random')
  async getRandomListings(@Query('limit') limit: number = 10) {
    return this.listingService.getRandomListings(limit);
  }

  // Endpoint to get a single listing by ID
  @Get(':id')
  async getListingById(@Param('id') id: number) {
    return this.listingService.getListingById(id);
  }
}
