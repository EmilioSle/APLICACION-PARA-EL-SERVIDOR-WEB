import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { LecturaService } from './lectura.service';
import { LecturaResolver } from './lectura.resolver';
import { Lectura } from './entities/lectura.entity'; 
import { Sensor } from 'src/sensor/entities/sensor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lectura, Sensor]), 
  ],
  providers: [LecturaService, LecturaResolver],
  exports: [LecturaService], 
})
export class LecturaModule {}
