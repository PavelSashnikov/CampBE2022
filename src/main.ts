import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RoutePath } from './entities/common/enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('JS Camp')
    .setDescription('Camp API description')
    .setVersion('1.0')
    .addTag('tweeter')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(RoutePath.swagger, app, document);

  await app.listen(3000);
  console.log('listen on localhost://3000');
}
bootstrap();
