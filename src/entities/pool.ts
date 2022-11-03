import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToMany,
  ManyToOne,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { IParticipants } from "../interfaces/pool.interfaces";
import { Match } from "./match";
import { User } from "./user";
import { Bet } from "./user_match_bet";

@Entity("pool")
export class Pool {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  nation: string;

  @ManyToOne(() => User)
  owner: User;

  @OneToOne(() => Bet, { eager: true })
  @JoinColumn()
  bet: Bet;

  @ManyToMany(() => Match)
  @JoinTable()
  matches: Match[];

  @ManyToMany(() => User)
  @JoinTable()
  participants: User[];
}
