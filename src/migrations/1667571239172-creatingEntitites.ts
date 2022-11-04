import { MigrationInterface, QueryRunner } from "typeorm";

export class creatingEntitites1667571239172 implements MigrationInterface {
    name = 'creatingEntitites1667571239172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "poolUsers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "poolId" uuid, CONSTRAINT "PK_5f145e51bbaa3db4d752afeb883" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pool" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "owner" character varying NOT NULL, CONSTRAINT "PK_db1bfe411e1516c01120b85f8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "poolMatches" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "poolId" uuid, "matchesId" uuid, CONSTRAINT "PK_ac2ffb649fcdfa2881fb5528b6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "matches" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "day" date NOT NULL, "hour" TIME NOT NULL, "result" character varying, "score" integer NOT NULL DEFAULT '0', "team1" character varying NOT NULL, "team2" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8a22c7b2e0828988d51256117f4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_match_bet" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "result" character varying, "score" integer NOT NULL DEFAULT '0', "points" integer NOT NULL DEFAULT '0', "userId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "matchesId" uuid, CONSTRAINT "PK_44b4b48fb702a7161ec2f56bde1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "poolUsers" ADD CONSTRAINT "FK_33e3ab0f5a3cefe1c0607941778" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "poolUsers" ADD CONSTRAINT "FK_81af4fc509b87e37cf8f6f3572d" FOREIGN KEY ("poolId") REFERENCES "pool"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "poolMatches" ADD CONSTRAINT "FK_ff1436d4b42a23c255f264ef8f2" FOREIGN KEY ("poolId") REFERENCES "pool"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "poolMatches" ADD CONSTRAINT "FK_9724feb2667188460f78aed3d7d" FOREIGN KEY ("matchesId") REFERENCES "matches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_match_bet" ADD CONSTRAINT "FK_c38e313f10892958ca12f31c2fe" FOREIGN KEY ("matchesId") REFERENCES "matches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_match_bet" DROP CONSTRAINT "FK_c38e313f10892958ca12f31c2fe"`);
        await queryRunner.query(`ALTER TABLE "poolMatches" DROP CONSTRAINT "FK_9724feb2667188460f78aed3d7d"`);
        await queryRunner.query(`ALTER TABLE "poolMatches" DROP CONSTRAINT "FK_ff1436d4b42a23c255f264ef8f2"`);
        await queryRunner.query(`ALTER TABLE "poolUsers" DROP CONSTRAINT "FK_81af4fc509b87e37cf8f6f3572d"`);
        await queryRunner.query(`ALTER TABLE "poolUsers" DROP CONSTRAINT "FK_33e3ab0f5a3cefe1c0607941778"`);
        await queryRunner.query(`DROP TABLE "user_match_bet"`);
        await queryRunner.query(`DROP TABLE "matches"`);
        await queryRunner.query(`DROP TABLE "poolMatches"`);
        await queryRunner.query(`DROP TABLE "pool"`);
        await queryRunner.query(`DROP TABLE "poolUsers"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}