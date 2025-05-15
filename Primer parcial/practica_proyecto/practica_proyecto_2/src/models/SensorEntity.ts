import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { SensorData } from "./SensorData";

@Entity()
export class SensorEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => SensorData, (data) => data.sensor)
  data!: SensorData[];

  @Column()
  tipo!: string;

  @Column()
  ubicacion!: string;

  @Column("float")
  valor!: number;

  @Column()
  unidad!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechaLectura!: Date;
}

