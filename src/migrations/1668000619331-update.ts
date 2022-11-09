import { MigrationInterface, QueryRunner } from "typeorm";

export class update1668000619331 implements MigrationInterface {
    name = 'update1668000619331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pool" RENAME COLUMN "owner" TO "ownerId"`);
        await queryRunner.query(`ALTER TABLE "bet" ADD "poolId" uuid`);
        await queryRunner.query(`ALTER TABLE "pool" DROP COLUMN "ownerId"`);
        await queryRunner.query(`ALTER TABLE "pool" ADD "ownerId" uuid`);
        await queryRunner.query(`ALTER TABLE "bet" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "bet" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "pool" ADD CONSTRAINT "FK_c4c1ea06c84c8f783e90e32ee1b" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bet" ADD CONSTRAINT "FK_23a1f21c2ca2a0b6797564d2b41" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bet" ADD CONSTRAINT "FK_6e0e3e9f9a7dd63082bc803a245" FOREIGN KEY ("poolId") REFERENCES "pool"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bet" DROP CONSTRAINT "FK_6e0e3e9f9a7dd63082bc803a245"`);
        await queryRunner.query(`ALTER TABLE "bet" DROP CONSTRAINT "FK_23a1f21c2ca2a0b6797564d2b41"`);
        await queryRunner.query(`ALTER TABLE "pool" DROP CONSTRAINT "FK_c4c1ea06c84c8f783e90e32ee1b"`);
        await queryRunner.query(`ALTER TABLE "bet" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "bet" ADD "userId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pool" DROP COLUMN "ownerId"`);
        await queryRunner.query(`ALTER TABLE "pool" ADD "ownerId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bet" DROP COLUMN "poolId"`);
        await queryRunner.query(`ALTER TABLE "pool" RENAME COLUMN "ownerId" TO "owner"`);
    }

}
