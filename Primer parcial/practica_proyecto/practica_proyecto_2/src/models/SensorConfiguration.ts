import { Entity, PrimaryGeneratedColumn, Column,JoinColumn , OneToOne } from "typeorm";
import { SensorEntity } from "./SensorEntity";

@Entity()
export class SensorConfiguration {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => SensorEntity)
  @JoinColumn()
  sensor!: SensorEntity;

  @Column("float")
  umbralMinimo!: number;

  @Column("float")
  umbralMaximo!: number;

  @Column()
  frecuenciaLecturaMinutos!: number;
}
