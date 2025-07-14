import { SubscribeMessage, WebSocketGateway, MessageBody } from '@nestjs/websockets';
import { UbicacionService } from './ubicacion.service';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';

@WebSocketGateway()
export class UbicacionGateway {
  constructor(private readonly ubicacionService: UbicacionService) {}

  @SubscribeMessage('updateUbicacion')
  async handleUpdateUbicacion(@MessageBody() payload: { id: number; updateUbicacionDto: UpdateUbicacionDto }) {
    const { id, updateUbicacionDto } = payload;
    return this.ubicacionService.update(id, updateUbicacionDto);
  }
}
