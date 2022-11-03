import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Pool } from "./pool";
import { RankingUsers } from "./ranking_users";

@Entity("ranking")
export class Ranking {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @OneToOne(() => Pool, { eager: true })
  @JoinColumn()
  pool: Pool;

  @OneToMany(() => RankingUsers, (rankingUser) => rankingUser.id)
  users: RankingUsers[];
}
