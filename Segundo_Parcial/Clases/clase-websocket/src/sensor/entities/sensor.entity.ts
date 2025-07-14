import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Lectura } from '../../lectura/entities/lectura.entity';

@Entity()
export class Sensor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string;

  @OneToMany(() => Lectura, lectura => lectura.sensor)
  lecturas: Lectura[];
}
