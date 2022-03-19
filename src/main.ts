import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { swaggerConfig } from './config/config';
import { RoutePath } from './entities/common/enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(RoutePath.swagger, app, document);

  const port = app.get(ConfigService).get('PORT') || 4000;

  await app.listen(port);
  console.log(`listen on http://localhost:${port}`);
}
bootstrap();
