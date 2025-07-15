import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorModule } from './sensor/sensor.module';
import { LecturaModule } from './lectura/lectura.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,  // solo para desarrollo
    }),
    SensorModule,
    LecturaModule,
    UbicacionModule,
  ],
})
export class AppModule {}
