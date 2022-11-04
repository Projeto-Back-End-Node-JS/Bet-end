import { MigrationInterface, QueryRunner } from "typeorm";

export class fixnameBetTable1667583434062 implements MigrationInterface {
    name = 'fixnameBetTable1667583434062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bet" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "result" character varying, "score" integer NOT NULL DEFAULT '0', "points" integer NOT NULL DEFAULT '0', "userId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "matchesId" uuid, CONSTRAINT "PK_4ceea2cdef435807614b8e17aed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bet" ADD CONSTRAINT "FK_833ff0c6b47717ef16440792f90" FOREIGN KEY ("matchesId") REFERENCES "matches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bet" DROP CONSTRAINT "FK_833ff0c6b47717ef16440792f90"`);
        await queryRunner.query(`DROP TABLE "bet"`);
    }

}
