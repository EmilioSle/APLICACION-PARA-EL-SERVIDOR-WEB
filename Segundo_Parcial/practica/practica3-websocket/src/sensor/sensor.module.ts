import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';          // Importa TypeOrmModule
import { SensorService } from './sensor.service';
import { SensorGateway } from './sensor.gateway';
import { Sensor } from './entities/sensor.entity';         // Importa la entidad Sensor

@Module({
  imports: [
    TypeOrmModule.forFeature([Sensor]),                   // Registra el repositorio Sensor aquí
  ],
  providers: [SensorGateway, SensorService],
  exports: [SensorService],
})
export class SensorModule {}
