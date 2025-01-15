import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'bookswap',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Auto-load entities
      synchronize: true, // Set to false in production
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
