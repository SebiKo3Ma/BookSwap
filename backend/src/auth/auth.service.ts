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

  // Validate user credentials (email/password)
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOneByEmail(email); // Assuming you're using email to find user
    if (user && await bcrypt.compare(password, user.password)) {
      return user; // Return user if passwords match
    }
    return null; // Return null if credentials are invalid
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
