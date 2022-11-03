import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Match } from "./match";
import { User } from "./user";

@Entity("user_match_bet")
export class Bet {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  result: string;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @OneToOne(() => Match, { eager: true })
  @JoinColumn()
  match: Match;
}
