import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import { Matches } from "./matches.entity";

@Entity("bet")
export class Bet {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: null })
  result: string;

  @Column({ type: "integer", default: 0 })
  score: number;

  @Column({ type: "integer", default: 0 })
  points: number;

  @Column()
  userId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Matches, { eager: true })
  matches: Matches;
}
