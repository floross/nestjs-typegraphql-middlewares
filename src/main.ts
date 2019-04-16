import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api');
  await app.listen(3000);
}
bootstrap();
