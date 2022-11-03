import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Bet } from "./user_match_bet";
import { RankingUsers } from "./ranking_users";
import { Pool } from "./pool";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  isAdm: boolean;

  @OneToMany(() => Bet, (bet) => bet.id)
  bet: Bet;

  @OneToOne(() => RankingUsers, { eager: true })
  rankingUsers: RankingUsers;

  @OneToMany(() => Pool, (pool) => pool.name)
  pool: Pool[];
}
