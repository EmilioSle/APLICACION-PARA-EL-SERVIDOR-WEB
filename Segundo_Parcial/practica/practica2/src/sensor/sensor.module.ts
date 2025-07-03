import { Module } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { SensorResolver } from './sensor.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sensor } from './entities/sensor.entity';
import { Ubicacion } from '../ubicacion/entities/ubicacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sensor, Ubicacion])],
  providers: [SensorResolver, SensorService],
})
export class SensorModule {}
