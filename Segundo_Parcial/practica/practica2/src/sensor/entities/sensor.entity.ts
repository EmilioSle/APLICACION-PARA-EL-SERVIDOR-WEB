import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, CreateDateColumn } from 'typeorm';
import { Ubicacion } from '../../ubicacion/entities/ubicacion.entity';
import { Lectura } from '../../lectura/entities/lectura.entity';

@ObjectType()
@Entity('sensor')
export class Sensor {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 100 })
  nombre: string;

  @Field()
  @Column({ length: 50 })
  tipo: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Field(() => Ubicacion)
  @ManyToOne(() => Ubicacion, ubicacion => ubicacion.sensores, { eager: true })
  @JoinColumn({ name: 'ubicacionId' })
  ubicacion: Ubicacion;

  @Column()
  ubicacionId: number;

  @Field()
  @Column({ default: true })
  activo: boolean;

  @Field()
  @CreateDateColumn()
  fechaRegistro: Date;

  // RELACIÓN INVERSE CON LECTURAS:
  @Field(() => [Lectura], { nullable: true })
  @OneToMany(() => Lectura, lectura => lectura.sensor)
  lecturas?: Lectura[];
}
