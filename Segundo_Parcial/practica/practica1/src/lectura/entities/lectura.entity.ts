import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Sensor } from '../../sensor/entities/sensor.entity';

@Entity()
export class Lectura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  valor: number;

  @Column()
  timestamp: Date;

  @ManyToOne(() => Sensor, (sensor) => sensor.lecturas, { onDelete: 'CASCADE' })
  sensor: Sensor;
}
