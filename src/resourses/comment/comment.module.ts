import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { authConf } from 'src/config/config';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => authConf(configService),
      inject: [ConfigService],
    }),
  ],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
