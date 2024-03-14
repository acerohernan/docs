import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigration1710422832324 implements MigrationInterface {
  name = "SecondMigration1710422832324";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "document" ALTER COLUMN "data" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "document" ALTER COLUMN "data" SET NOT NULL`,
    );
  }
}
