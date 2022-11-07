import { Entity, ManyToOne } from "typeorm";
import { Pool } from "./pool.entity";
import { User } from "./user.entity";

@Entity("poolUsers")
export class PoolUsers {
  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Pool)
  pool: Pool;
}
