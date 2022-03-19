import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
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
    const hashPass = await hash(userData.password, 10);

    try {
      await this.usersRepository.save({
        ...userData,
        password: hashPass,
      });
    } catch (error: any) {
      throw new HttpException(error.detail, HttpStatus.CONFLICT);
    }
    return await this.usersRepository.find();
  };
}
