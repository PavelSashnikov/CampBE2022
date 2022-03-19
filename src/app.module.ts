import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { LoginModule } from './resourses/login/login.module';
import { RegisterModule } from './resourses/register/register.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoginModule,
    RegisterModule,
  ],
  providers: [AppService],
})
export class AppModule {}
