import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { LoginModule } from './resourses/login/login/login.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LoginModule],
  providers: [AppService],
})
export class AppModule {}
