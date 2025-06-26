import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Sensor } from '../../sensor/entities/sensor.entity';

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @OneToMany(() => Sensor, (sensor) => sensor.ubicacion)
  sensores: Sensor[];
}
