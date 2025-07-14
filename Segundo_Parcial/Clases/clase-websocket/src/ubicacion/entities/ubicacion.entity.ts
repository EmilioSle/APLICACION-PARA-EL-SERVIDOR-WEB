import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Lectura } from '../../lectura/entities/lectura.entity';

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  coordenadas: string;

  @OneToMany(() => Lectura, lectura => lectura.ubicacion)
  lecturas: Lectura[];
}
