import { MigrationInterface, QueryRunner } from "typeorm";

export class createMigration1667826203381 implements MigrationInterface {
    name = 'createMigration1667826203381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pool" RENAME COLUMN "owner" TO "ownerId"`);
        await queryRunner.query(`ALTER TABLE "matches" ADD "poolId" uuid`);
        await queryRunner.query(`ALTER TABLE "pool" DROP COLUMN "ownerId"`);
        await queryRunner.query(`ALTER TABLE "pool" ADD "ownerId" uuid`);
        await queryRunner.query(`ALTER TABLE "pool" ADD CONSTRAINT "FK_c4c1ea06c84c8f783e90e32ee1b" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "matches" ADD CONSTRAINT "FK_685895d6241f1f4d947cea60265" FOREIGN KEY ("poolId") REFERENCES "pool"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "matches" DROP CONSTRAINT "FK_685895d6241f1f4d947cea60265"`);
        await queryRunner.query(`ALTER TABLE "pool" DROP CONSTRAINT "FK_c4c1ea06c84c8f783e90e32ee1b"`);
        await queryRunner.query(`ALTER TABLE "pool" DROP COLUMN "ownerId"`);
        await queryRunner.query(`ALTER TABLE "pool" ADD "ownerId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "matches" DROP COLUMN "poolId"`);
        await queryRunner.query(`ALTER TABLE "pool" RENAME COLUMN "ownerId" TO "owner"`);
    }

}
