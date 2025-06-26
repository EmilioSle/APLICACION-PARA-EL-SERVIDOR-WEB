import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    abortOnError: false,
  });

  // Configuración Swagger para sandbox API
  const config = new DocumentBuilder()
    .setTitle('API de Sensores')
    .setDescription('Documentación y sandbox para probar los endpoints')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application running on: http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`Swagger UI disponible en: http://localhost:${process.env.PORT ?? 3000}/api`);
}

bootstrap();

