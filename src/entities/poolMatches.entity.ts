import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Matches } from "./matches.entity";
import { Pool } from "./pool.entity";

@Entity("poolMatches")
export class PoolMatches {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Matches)
  matches: Matches;

  @ManyToOne(() => Pool)
  pool: Pool;
}
