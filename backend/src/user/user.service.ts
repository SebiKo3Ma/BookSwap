import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, // Inject user repository for DB operations
  ) {}

  // Find user by email
  async findOneByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } }); // Look for user by email
  }

  // Create a new user
  async createUser(
    email: string,
    username: string,
    password: string,
    name: string,
    city: string
  ): Promise<User> {
    const newUser = this.userRepository.create({
      email,
      username,
      password,  // Store hashed password
      name,
      city,
    });
    return this.userRepository.save(newUser);  // Save user to the database
  }
}
