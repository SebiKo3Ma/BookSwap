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
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(user);
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
