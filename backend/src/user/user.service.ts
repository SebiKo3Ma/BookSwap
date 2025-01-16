import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt'; // Import bcrypt for password hashing

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, // Inject user repository for DB operations
  ) {}

  async findUserByUsername(username: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { username } });
  }

  // Create a new user
  async createUser(
    email: string,
    username: string,
    password: string,
    name: string,
    city: string,
  ): Promise<User> {
    const saltRounds = 10; // Number of salt rounds for bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds); // Hash the password

    const newUser = this.userRepository.create({
      email,
      username,
      password: hashedPassword, // Store the hashed password
      name,
      city,
    });

    return this.userRepository.save(newUser); // Save the user to the database
  }
}
