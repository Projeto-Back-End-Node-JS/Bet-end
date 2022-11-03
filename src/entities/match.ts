import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from "typeorm";
import { Pool } from "./pool";
import { Teams } from "./teams";
import { Bet } from "./user_match_bet";

@Entity("match")
export class Match {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @CreateDateColumn({ type: "date" })
  date: Date;

  @Column({ default: null })
  winner: string;

  @Column({ type: "integer" })
  goals: number;

  @OneToOne(() => Bet, { eager: true })
  bet: Bet;

  @ManyToMany(() => Pool)
  @JoinTable()
  pool: Pool[];

  @OneToOne(() => Teams, { eager: true })
  @JoinColumn()
  teams: Teams;
}
