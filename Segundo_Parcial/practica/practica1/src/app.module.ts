import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevtoolsModule } from '@nestjs/devtools-integration'; 

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SensorModule } from './sensor/sensor.module';
import { LecturaModule } from './lectura/lectura.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production', 
    }),
    SensorModule,
    LecturaModule,
    UbicacionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
