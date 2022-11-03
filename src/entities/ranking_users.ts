import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Ranking } from "./ranking";

@Entity("ranking_users")
export class RankingUsers {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "integer" })
  points: number;

  @ManyToOne(() => Ranking, { eager: true })
  ranking: Ranking;
}
