import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express'; // Ensure this is imported

async function bootstrap() {
  // Explicitly create the NestExpressApplication
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve Angular static files
  app.useStaticAssets(join(__dirname, '..', 'public/frontend'));
  app.setBaseViewsDir(join(__dirname, '..', 'public/frontend'));

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
