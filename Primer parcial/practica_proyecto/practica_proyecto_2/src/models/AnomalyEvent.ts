import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { SensorEntity } from "./SensorEntity";

@Entity()
export class AnomalyEvent {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => SensorEntity)
  sensor!: SensorEntity;

  @Column()
  tipo!: string; // "alta temperatura", "humedad baja", etc.

  @Column("text")
  descripcion!: string;

  @Column()
  fecha!: Date;
}
