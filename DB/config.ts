import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { Tweet } from './entities/tweet.entity';
import { User } from './entities/user.entity';

export const DbConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: 'db',
  synchronize: false,
  port: parseInt(<string>configService.get<string>('DB_PORT')),
  username: configService.get<string>('DB_LOGIN'),
  password: configService.get<string>('DB_PASS'),
  database: configService.get<string>('DB_NAME'),
  migrationsRun: true,
  entities: [User, Tweet],
  migrations: [join(__dirname, `migrations/*{.ts,.js}`)],
  cli: {
    migrationsDir: join(__dirname, `migrations`),
    entitiesDir: join(__dirname, `entities`),
  },
});
