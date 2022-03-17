import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginModule } from './resourses/login/login/login.module';

@Module({
  imports: [LoginModule],
  providers: [AppService],
})
export class AppModule {}
