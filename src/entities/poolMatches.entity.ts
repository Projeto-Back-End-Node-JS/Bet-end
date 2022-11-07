import { Entity, ManyToOne } from "typeorm";
import { Matches } from "./matches.entity";
import { Pool } from "./pool.entity";

@Entity("poolMatches")
export class PoolMatches {
  @ManyToOne(() => Matches)
  matches: Matches;

  @ManyToOne(() => Pool)
  pool: Pool;
}
