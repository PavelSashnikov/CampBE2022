import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('JS Camp 2022')
  .setDescription('API description')
  .setVersion('1.0')
  .build();
