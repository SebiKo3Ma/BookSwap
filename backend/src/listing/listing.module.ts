import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingController } from './listing.controller';
import { ListingService } from './listing.service';
import { Listing } from './listing.entity';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Listing, User])], // Import Listing and User entities
  controllers: [ListingController],
  providers: [ListingService],
})
export class ListingModule {}
