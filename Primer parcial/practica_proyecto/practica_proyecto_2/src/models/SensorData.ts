import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { SensorEntity } from "./SensorEntity";

@Entity()
export class SensorData {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => SensorEntity)
  sensor!: SensorEntity;

  @Column("float")
  valor!: number;

  @Column()
  unidad!: string;

  @Column()
  timestamp!: Date;
}
