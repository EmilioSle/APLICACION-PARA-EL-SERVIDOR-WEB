import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Sensor } from '../../sensor/entities/sensor.entity';
import { Ubicacion } from '../../ubicacion/entities/ubicacion.entity';

@Entity()
export class Lectura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  valor: number;

  @Column()
  fecha: string;

  @ManyToOne(() => Sensor, sensor => sensor.lecturas)
  sensor: Sensor;

  @ManyToOne(() => Ubicacion, ubicacion => ubicacion.lecturas)
  ubicacion: Ubicacion;
}
