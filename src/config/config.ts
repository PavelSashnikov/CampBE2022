import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('JS Camp 2022')
  .setDescription('API description')
  .setVersion('1.0')
  .build();

export const authConf = (configService: ConfigService): JwtModuleOptions => ({
  secret: configService.get<string>('ACCESS_TOKEN'),
  signOptions: {
    expiresIn: '4h',
  },
});
