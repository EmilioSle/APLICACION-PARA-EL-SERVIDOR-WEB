import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { LecturaService } from './lectura.service';
import { CreateLecturaDto } from './dto/create-lectura.dto';
import { UpdateLecturaDto } from './dto/update-lectura.dto';

@WebSocketGateway({ cors: true })
export class LecturaGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly lecturaService: LecturaService) {}

  @SubscribeMessage('crearLectura')
  async create(@MessageBody() dto: CreateLecturaDto) {
    await this.lecturaService.create(dto);
    const lecturas = await this.lecturaService.findAll();
    this.server.emit('lecturasActualizadas', lecturas);
  }

  @SubscribeMessage('listarLecturas')
  async findAll() {
    return await this.lecturaService.findAll();
  }

  @SubscribeMessage('updateLectura')
  async update(
    @MessageBody() payload: { id: number; updateLecturaDto: UpdateLecturaDto },
  ) {
    const { id, updateLecturaDto } = payload;
    await this.lecturaService.update(id, updateLecturaDto);
    const lecturas = await this.lecturaService.findAll();
    this.server.emit('lecturasActualizadas', lecturas);
  }

  @SubscribeMessage('eliminarLectura')
  async remove(@MessageBody() payload: { id: number }) {
    await this.lecturaService.remove(payload.id);
    const lecturas = await this.lecturaService.findAll();
    this.server.emit('lecturasActualizadas', lecturas);
  }
}
