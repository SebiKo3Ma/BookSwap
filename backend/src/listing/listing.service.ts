import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Listing } from './listing.entity';
import { CreateListingDto } from './dto/create-listing.dto';
import { User } from '../user/user.entity';

@Injectable()
export class ListingService {
  constructor(
    @InjectRepository(Listing)
    private readonly listingRepository: Repository<Listing>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Create a new listing
  async createListing(createListingDto: CreateListingDto): Promise<Listing> {
    const { userId, ...listingData } = createListingDto;

    // Find the user by userId
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID '${userId}' not found`);
    }

    // Create and save the listing, using the user object
    const listing = this.listingRepository.create({ ...listingData, user });
    return this.listingRepository.save(listing);
  }

  // Retrieve all listings
  async getAllListings(): Promise<Listing[]> {
    return this.listingRepository.find({ relations: ['user'] });
  }

  // Retrieve random listings
  async getRandomListings(limit: number): Promise<Listing[]> {
    return this.listingRepository
      .createQueryBuilder('listing')
      .orderBy('RANDOM()')
      .limit(limit)
      .getMany();
  }

  // Retrieve a single listing by ID
  async getListingById(id: number): Promise<Listing> {
    const listing = await this.listingRepository.findOne({
      where: { listing_id: id },
      relations: ['user'],
    });

    if (!listing) {
      throw new NotFoundException(`Listing with ID '${id}' not found`);
    }

    return listing;
  }
}
