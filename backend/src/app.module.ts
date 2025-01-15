import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';  // Import your User entity
import { AuthModule } from './auth/auth.module';  // Import AuthModule
import { UserModule } from './user/user.module';  // Import UserModule

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'frontend'), // Path to Angular's `dist` folder
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',  // Use 'mysql' for MySQL
      host: 'localhost',
      port: 5432,
      username: 'admin', // Replace with your DB user
      password: 'admin',  // Replace with your DB password
      database: 'bookswap',  // Replace with your DB name
      entities: [User],  // Your database models/entities
      synchronize: true,  // Auto-create database tables (use carefully in production)
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
