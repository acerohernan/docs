import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1710352820633 implements MigrationInterface {
    name = 'FirstMigration1710352820633'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "document" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "data" bytea NOT NULL, CONSTRAINT "PK_e57d3357f83f3cdc0acffc3d777" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "document-name-idx" ON "document" ("name") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."document-name-idx"`);
        await queryRunner.query(`DROP TABLE "document"`);
    }

}
