import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Lectura } from '../../lectura/entities/lectura.entity';
import { Ubicacion } from '../../ubicacion/entities/ubicacion.entity';

@Entity()
export class Sensor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string;

  @Column({ default: true })
  activo: boolean;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.sensores, { onDelete: 'SET NULL' })
  ubicacion: Ubicacion;

  @OneToMany(() => Lectura, (lectura) => lectura.sensor)
  lecturas: Lectura[];
}
