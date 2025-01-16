import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ListingModule } from './listing/listing.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'bookswap.cluster-cnaq6wg82x7x.eu-central-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'bookswap',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Auto-load entities
      synchronize: true, // Set to false in production
    }),
    UserModule,
    AuthModule,
    ListingModule,
  ],
  controllers: [AppController],  // Make sure this is included
  providers: [AppService],
})
export class AppModule {}
