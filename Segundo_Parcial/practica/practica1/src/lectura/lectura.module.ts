import { Module } from '@nestjs/common';
import { LecturaService } from './lectura.service';
import { LecturaController } from './lectura.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lectura } from './entities/lectura.entity';
import { Sensor } from '../sensor/entities/sensor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lectura, Sensor])],
  controllers: [LecturaController],
  providers: [LecturaService],
})
export class LecturaModule {}
