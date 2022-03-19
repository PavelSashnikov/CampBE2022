import { MigrationInterface, QueryRunner } from 'typeorm';
import { adminSeed } from '../adminSeed';

export class AdminUserSeed1647716805609 implements MigrationInterface {
  name = 'AdminUserSeed1647716805609';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('User')
      .values(adminSeed)
      .execute();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(): Promise<void> {}
}
