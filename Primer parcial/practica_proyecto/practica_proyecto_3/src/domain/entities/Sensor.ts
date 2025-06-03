
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class SensorEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  type!: string;

  @Column("float")
  value!: number;

  @Column()
  timestamp!: Date;
}

