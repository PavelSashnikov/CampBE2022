import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RoutePath } from './entities/common/enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('JS Camp 2022')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(RoutePath.swagger, app, document);

  await app.listen(process.env.PORT as string);
  console.log(`listen on http://localhost:${process.env.PORT}`);
}
bootstrap();
