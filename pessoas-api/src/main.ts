import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import * as yamljs from 'yamljs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  SwaggerModule.setup('/api/docs', app, yamljs.load('./swagger.yml'));
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
