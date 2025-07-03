import { Field, ObjectType, ID, Float } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Sensor } from '../../sensor/entities/sensor.entity';

@ObjectType()
@Entity('lectura')
export class Lectura {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Sensor)
  @ManyToOne(() => Sensor, sensor => sensor.lecturas, { eager: true })
  @JoinColumn({ name: 'sensorId' })
  sensor: Sensor;

  @Column()
  sensorId: number;

  @Field(() => Float)
  @Column('float')
  valor: number;

  @Field()
  @Column({ type: 'timestamp' })
  fechaHora: Date;
}
