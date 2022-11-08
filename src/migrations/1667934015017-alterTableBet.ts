import { MigrationInterface, QueryRunner } from "typeorm";

export class alterTableBet1667934015017 implements MigrationInterface {
    name = 'alterTableBet1667934015017'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bet" ADD "poolId" uuid`);
        await queryRunner.query(`ALTER TABLE "bet" ADD CONSTRAINT "FK_6e0e3e9f9a7dd63082bc803a245" FOREIGN KEY ("poolId") REFERENCES "pool"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bet" DROP CONSTRAINT "FK_6e0e3e9f9a7dd63082bc803a245"`);
        await queryRunner.query(`ALTER TABLE "bet" DROP COLUMN "poolId"`);
    }

}
