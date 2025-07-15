import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { UbicacionService } from './ubicacion.service';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';

@WebSocketGateway({ cors: true })
export class UbicacionGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly ubicacionService: UbicacionService) {}

  @SubscribeMessage('crearUbicacion')
  async create(@MessageBody() dto: CreateUbicacionDto) {
    await this.ubicacionService.create(dto);
    const ubicaciones = await this.ubicacionService.findAll();
    this.server.emit('ubicacionesActualizadas', ubicaciones);
  }

  @SubscribeMessage('listarUbicaciones')
  async findAll() {
    return await this.ubicacionService.findAll();
  }

  @SubscribeMessage('updateUbicacion')
  async update(
    @MessageBody() payload: { id: number; updateUbicacionDto: UpdateUbicacionDto },
  ) {
    const { id, updateUbicacionDto } = payload;
    await this.ubicacionService.update(id, updateUbicacionDto);
    const ubicaciones = await this.ubicacionService.findAll();
    this.server.emit('ubicacionesActualizadas', ubicaciones);
  }

  @SubscribeMessage('eliminarUbicacion')
  async remove(@MessageBody() payload: { id: number }) {
    await this.ubicacionService.remove(payload.id);
    const ubicaciones = await this.ubicacionService.findAll();
    this.server.emit('ubicacionesActualizadas', ubicaciones);
  }
}
