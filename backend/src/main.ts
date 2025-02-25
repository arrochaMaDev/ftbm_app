import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('FTBM_app')
    .setDescription(
      'App para gestión de músicos y directivos federados de la FTBM',
    )
    .setVersion('1.0')
    // .addTag('FTBM_app')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(3000);
}
bootstrap();
