import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SensorService } from './sensor.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';

@WebSocketGateway({ cors: true })
export class SensorGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly sensorService: SensorService) {}

  @SubscribeMessage('crearSensor')
  async create(@MessageBody() dto: CreateSensorDto) {
    await this.sensorService.create(dto);
    const sensores = await this.sensorService.findAll();
    this.server.emit('sensoresActualizados', sensores);
  }

  @SubscribeMessage('listarSensores')
  async findAll() {
    const sensores = await this.sensorService.findAll();
    this.server.emit('sensoresActualizados', sensores);
  }

  @SubscribeMessage('actualizarSensor')
  async update(
    @MessageBody()
    payload: { id: number; data: UpdateSensorDto },
  ) {
    await this.sensorService.update(payload.id, payload.data);
    const sensores = await this.sensorService.findAll();
    this.server.emit('sensoresActualizados', sensores);
  }

  @SubscribeMessage('eliminarSensor')
  async remove(@MessageBody() payload: { id: number }) {
    await this.sensorService.remove(payload.id);
    const sensores = await this.sensorService.findAll();
    this.server.emit('sensoresActualizados', sensores);
  }
}
