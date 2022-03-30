import { ITweet } from 'src/entities/interface/tweet.interface';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('Tweet')
export class Tweet implements ITweet.Tweet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  text: string;

  @Column('varchar')
  author: string;

  @ManyToOne(() => User, (user) => user.login, { onDelete: 'NO ACTION' })
  @JoinColumn({ name: 'login' })
  user: User[];

  @Column('timestamptz')
  createdAt: Date;

  @Column('varchar', {
    array: true,
    transformer: {
      to(n) {
        return n;
      },
      from(n) {
        return n.map((e: string) => JSON.parse(e));
      },
    },
  })
  comments: Array<ITweet.Comment>;

  @Column('varchar', { default: '', select: false })
  hashtags: string;
}
