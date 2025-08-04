import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { PagoService } from '../services/pago.service';
import { Pago, PagoDto } from '../../../domain';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class PagoGateway {
  @WebSocketServer()
  server: Server;
  private readonly pagoService = new PagoService();

  @SubscribeMessage('obtenerPagos')
  handleObtenerPagos(): Pago[] {
    return this.pagoService.obtenerPagos();
  }

  @SubscribeMessage('crearPago')
  handleCrearPago(@MessageBody() dto: PagoDto): Pago {
    const pago = this.pagoService.crearPago(dto);
    this.server.emit('pagoCreado', pago);
    return pago;
  }
}
