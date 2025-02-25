import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'http://localhost:3000',
        'http://localhost:5173',
        'http://localhost:5174',
      ], // importante poner los dos origins del front y del back porque son puertos diferentes
      credentials: true, // Si modificas los credentials en el front, se debe especificar también en el back
    },
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // app.enableCors(););
  await app.listen(3000);
}
bootstrap();
