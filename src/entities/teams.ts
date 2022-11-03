import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("teams")
export class Teams {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;
}
