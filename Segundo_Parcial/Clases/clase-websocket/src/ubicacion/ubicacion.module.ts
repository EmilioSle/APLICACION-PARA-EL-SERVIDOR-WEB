import { Module } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { UbicacionGateway } from './ubicacion.gateway';

@Module({
  providers: [UbicacionGateway, UbicacionService],
})
export class UbicacionModule {}
