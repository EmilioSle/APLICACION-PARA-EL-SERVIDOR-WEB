import { Module } from '@nestjs/common';
import { LecturaService } from './lectura.service';
import { LecturaGateway } from './lectura.gateway';

@Module({
  providers: [LecturaGateway, LecturaService],
})
export class LecturaModule {}
