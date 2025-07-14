import { SubscribeMessage, WebSocketGateway, MessageBody } from '@nestjs/websockets';
import { LecturaService } from './lectura.service';
import { UpdateLecturaDto } from './dto/update-lectura.dto';

@WebSocketGateway()
export class LecturaGateway {
  constructor(private readonly lecturaService: LecturaService) {}

  @SubscribeMessage('updateLectura')
  async handleUpdateLectura(@MessageBody() payload: { id: number; updateLecturaDto: UpdateLecturaDto }) {
    const { id, updateLecturaDto } = payload;
    return this.lecturaService.update(id, updateLecturaDto);
  }
}

