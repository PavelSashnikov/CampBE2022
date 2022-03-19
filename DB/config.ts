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
  migrationsRun: true,
  port: parseInt(<string>configService.get<string>('DB_PORT')),
  username: configService.get<string>('DB_LOGIN'),
  password: configService.get<string>('DB_PASS'),
  database: configService.get<string>('DB_NAME'),
  entities: [User, Tweet],
  migrations: [join(__dirname, `migrations/*{.ts,.js}`)],
  cli: {
    entitiesDir: join(__dirname, `entities`),
    migrationsDir: join(__dirname, `migrations`),
  },
});
