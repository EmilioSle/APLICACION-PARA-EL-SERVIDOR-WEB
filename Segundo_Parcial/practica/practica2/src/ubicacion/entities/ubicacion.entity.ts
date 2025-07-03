import { Field, ObjectType, ID, Float } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Sensor } from '../../sensor/entities/sensor.entity';

@ObjectType()
@Entity('ubicacion')
export class Ubicacion {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 100 })
  nombre: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Field(() => Float)
  @Column('float')
  latitud: number;

  @Field(() => Float)
  @Column('float')
  longitud: number;

  @OneToMany(() => Sensor, sensor => sensor.ubicacion)
  sensores: Sensor[];
}
