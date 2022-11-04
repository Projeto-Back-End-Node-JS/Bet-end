import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { PoolMatches } from "./poolMatches.entity";
import { PoolUsers } from "./poolUsers.entity";

@Entity("pool")
export class Pool {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  owner: string;

  @OneToMany(() => PoolUsers, (poolUsers) => poolUsers.pool)
  poolUsers: PoolUsers[];

  @OneToMany(() => PoolMatches, (poolMatches) => poolMatches.pool)
  poolMatches: PoolMatches[];
}
