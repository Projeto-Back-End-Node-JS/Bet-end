import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Pool } from "./pool.entity";

@Entity("matches")
export class Matches {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "date" })
  day: string;

  @Column({ type: "time" })
  hour: string;

  @Column({ default: null })
  result: string;

  @Column({ type: "integer", default: 0 })
  score: number;

  @Column()
  team1: string;

  @Column()
  team2: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Pool, { eager: true })
  pool: Pool;
}
