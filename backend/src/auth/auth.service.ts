import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword); // Compare the plain password with the hashed one
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userService.findUserByUsername(username); // Find by username
    if (user && await this.comparePasswords(password, user.password)) { // Compare hashed password
      return user;
    }
    return null;
  }
  
  // Issue JWT token
  async login(user: User) {
    const payload = { email: user.email, sub: user.id };  // Use email and user ID for the JWT payload
    return {
      access_token: this.jwtService.sign(payload),  // Generate JWT token
    };
  }

  // Hash password before storing
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);  // Generate salt for bcrypt
    return bcrypt.hash(password, salt);  // Hash password with the generated salt
  }
}
