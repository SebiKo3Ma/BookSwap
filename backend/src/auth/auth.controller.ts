import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  // Login route
  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(body.username, body.password); // Use username instead of email
    if (!user) {
      return { message: 'Invalid credentials' }; // Handle invalid login
    }
    return this.authService.login(user); // Return JWT token upon successful login
  }


  // Register route
  @Post('register')
  async register(@Body() body: { email: string; username: string; password: string; name: string; city: string }) {
    const user = await this.userService.createUser(
      body.email,
      body.username,
      body.password,
      body.name,
      body.city,
    );
    return { message: 'User created successfully', user };
  }
}
