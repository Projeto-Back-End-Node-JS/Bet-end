import { MigrationInterface, QueryRunner } from "typeorm";

export class creatingEntities1667485117101 implements MigrationInterface {
    name = 'creatingEntities1667485117101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_match_bet" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "result" character varying NOT NULL, "userId" uuid, "matchId" uuid, CONSTRAINT "REL_a42ef6410733ec4d50f547dcb6" UNIQUE ("matchId"), CONSTRAINT "PK_44b4b48fb702a7161ec2f56bde1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ranking" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "poolId" uuid, CONSTRAINT "REL_3b8dadaa44c6a858785c5e01ef" UNIQUE ("poolId"), CONSTRAINT "PK_bf82b8f271e50232e6a3fcb09a9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ranking_users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "points" integer NOT NULL, "rankingId" uuid, CONSTRAINT "PK_1db07bea64dc2150db4aa868dad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pool" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "nation" character varying, "ownerId" uuid, "betId" uuid, CONSTRAINT "REL_a81215b36f2199af7550941c95" UNIQUE ("betId"), CONSTRAINT "PK_db1bfe411e1516c01120b85f8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teams" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "match" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL DEFAULT now(), "winner" character varying, "goals" integer NOT NULL, "teamsId" uuid, CONSTRAINT "REL_5ae9b1c768aac42d6369f6301d" UNIQUE ("teamsId"), CONSTRAINT "PK_92b6c3a6631dd5b24a67c69f69d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pool_matches_match" ("poolId" uuid NOT NULL, "matchId" uuid NOT NULL, CONSTRAINT "PK_903095f36c350305a16081efac2" PRIMARY KEY ("poolId", "matchId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0989263663315b059b9e5139b0" ON "pool_matches_match" ("poolId") `);
        await queryRunner.query(`CREATE INDEX "IDX_94d0ef46f2969dc219afe9a873" ON "pool_matches_match" ("matchId") `);
        await queryRunner.query(`CREATE TABLE "pool_participants_users" ("poolId" uuid NOT NULL, "usersId" uuid NOT NULL, CONSTRAINT "PK_e3d2f85eceeedc5882c25e55b58" PRIMARY KEY ("poolId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_655886d33e868c04130f794d6c" ON "pool_participants_users" ("poolId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c83aebdc4769b8e91ef4a0b391" ON "pool_participants_users" ("usersId") `);
        await queryRunner.query(`CREATE TABLE "match_pool_pool" ("matchId" uuid NOT NULL, "poolId" uuid NOT NULL, CONSTRAINT "PK_f347666f6a5e427d25d10706d16" PRIMARY KEY ("matchId", "poolId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ac94bd4685f4488f6c8327a968" ON "match_pool_pool" ("matchId") `);
        await queryRunner.query(`CREATE INDEX "IDX_aa26d0d95da97d783de387c818" ON "match_pool_pool" ("poolId") `);
        await queryRunner.query(`ALTER TABLE "user_match_bet" ADD CONSTRAINT "FK_138cc1fd92854f10d2ce34b2f38" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_match_bet" ADD CONSTRAINT "FK_a42ef6410733ec4d50f547dcb62" FOREIGN KEY ("matchId") REFERENCES "match"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ranking" ADD CONSTRAINT "FK_3b8dadaa44c6a858785c5e01ef2" FOREIGN KEY ("poolId") REFERENCES "pool"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ranking_users" ADD CONSTRAINT "FK_ce6508cffd8fafffa9bed5a9858" FOREIGN KEY ("rankingId") REFERENCES "ranking"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pool" ADD CONSTRAINT "FK_c4c1ea06c84c8f783e90e32ee1b" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pool" ADD CONSTRAINT "FK_a81215b36f2199af7550941c952" FOREIGN KEY ("betId") REFERENCES "user_match_bet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "match" ADD CONSTRAINT "FK_5ae9b1c768aac42d6369f6301da" FOREIGN KEY ("teamsId") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pool_matches_match" ADD CONSTRAINT "FK_0989263663315b059b9e5139b04" FOREIGN KEY ("poolId") REFERENCES "pool"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pool_matches_match" ADD CONSTRAINT "FK_94d0ef46f2969dc219afe9a8735" FOREIGN KEY ("matchId") REFERENCES "match"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pool_participants_users" ADD CONSTRAINT "FK_655886d33e868c04130f794d6ce" FOREIGN KEY ("poolId") REFERENCES "pool"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pool_participants_users" ADD CONSTRAINT "FK_c83aebdc4769b8e91ef4a0b3911" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "match_pool_pool" ADD CONSTRAINT "FK_ac94bd4685f4488f6c8327a9680" FOREIGN KEY ("matchId") REFERENCES "match"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "match_pool_pool" ADD CONSTRAINT "FK_aa26d0d95da97d783de387c818e" FOREIGN KEY ("poolId") REFERENCES "pool"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "match_pool_pool" DROP CONSTRAINT "FK_aa26d0d95da97d783de387c818e"`);
        await queryRunner.query(`ALTER TABLE "match_pool_pool" DROP CONSTRAINT "FK_ac94bd4685f4488f6c8327a9680"`);
        await queryRunner.query(`ALTER TABLE "pool_participants_users" DROP CONSTRAINT "FK_c83aebdc4769b8e91ef4a0b3911"`);
        await queryRunner.query(`ALTER TABLE "pool_participants_users" DROP CONSTRAINT "FK_655886d33e868c04130f794d6ce"`);
        await queryRunner.query(`ALTER TABLE "pool_matches_match" DROP CONSTRAINT "FK_94d0ef46f2969dc219afe9a8735"`);
        await queryRunner.query(`ALTER TABLE "pool_matches_match" DROP CONSTRAINT "FK_0989263663315b059b9e5139b04"`);
        await queryRunner.query(`ALTER TABLE "match" DROP CONSTRAINT "FK_5ae9b1c768aac42d6369f6301da"`);
        await queryRunner.query(`ALTER TABLE "pool" DROP CONSTRAINT "FK_a81215b36f2199af7550941c952"`);
        await queryRunner.query(`ALTER TABLE "pool" DROP CONSTRAINT "FK_c4c1ea06c84c8f783e90e32ee1b"`);
        await queryRunner.query(`ALTER TABLE "ranking_users" DROP CONSTRAINT "FK_ce6508cffd8fafffa9bed5a9858"`);
        await queryRunner.query(`ALTER TABLE "ranking" DROP CONSTRAINT "FK_3b8dadaa44c6a858785c5e01ef2"`);
        await queryRunner.query(`ALTER TABLE "user_match_bet" DROP CONSTRAINT "FK_a42ef6410733ec4d50f547dcb62"`);
        await queryRunner.query(`ALTER TABLE "user_match_bet" DROP CONSTRAINT "FK_138cc1fd92854f10d2ce34b2f38"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_aa26d0d95da97d783de387c818"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ac94bd4685f4488f6c8327a968"`);
        await queryRunner.query(`DROP TABLE "match_pool_pool"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c83aebdc4769b8e91ef4a0b391"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_655886d33e868c04130f794d6c"`);
        await queryRunner.query(`DROP TABLE "pool_participants_users"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_94d0ef46f2969dc219afe9a873"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0989263663315b059b9e5139b0"`);
        await queryRunner.query(`DROP TABLE "pool_matches_match"`);
        await queryRunner.query(`DROP TABLE "match"`);
        await queryRunner.query(`DROP TABLE "teams"`);
        await queryRunner.query(`DROP TABLE "pool"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "ranking_users"`);
        await queryRunner.query(`DROP TABLE "ranking"`);
        await queryRunner.query(`DROP TABLE "user_match_bet"`);
    }

}
