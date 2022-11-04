import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Matches } from "./matches.entity";
import { Pool } from "./pool.entity";

@Entity("poolMatches")
export class PoolMatches {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Pool, { eager: true })
  pool: Pool;

  @ManyToOne(() => Matches, { eager: true })
  matches: Matches;
}
