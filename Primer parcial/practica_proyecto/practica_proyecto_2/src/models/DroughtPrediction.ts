import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class DroughtPrediction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  region!: string;

  @Column("float")
  probabilidad!: number;

  @Column()
  fechaGenerada!: Date;
}
