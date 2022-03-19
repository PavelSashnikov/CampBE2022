import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'DB/entities/user.entity';
import { LoginDto } from 'src/entities/dto/login.dto';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  reg = async (userData: LoginDto) => {
    await this.usersRepository.save(userData);
    return await this.usersRepository.find();
  };
}
