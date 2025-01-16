import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateListingDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  publisher: string;

  @IsInt()
  userId: number;  // Foreign key referencing the user's ID
}
