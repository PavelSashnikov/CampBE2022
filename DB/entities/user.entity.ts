import { IUser } from 'src/entities/interface/user.interface';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('User')
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  login: string;

  @Column('varchar', { select: false })
  password: string;
}
