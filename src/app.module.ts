import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { CommentModule } from './resourses/comment/comment.module';
import { LoginModule } from './resourses/login/login.module';
import { RegisterModule } from './resourses/register/register.module';
import { TweetModule } from './resourses/tweet/tweet.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoginModule,
    RegisterModule,
    TweetModule,
    CommentModule,
  ],
  providers: [AppService],
})
export class AppModule {}
