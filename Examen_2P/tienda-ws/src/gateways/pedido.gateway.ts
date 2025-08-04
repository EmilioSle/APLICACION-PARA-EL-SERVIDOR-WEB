import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { PedidoService } from '../services/pedido.service';
import { Pedido, PedidoDto } from '../../../domain';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class PedidoGateway {
  @WebSocketServer()
  server: Server;
  private readonly pedidoService = new PedidoService();

  @SubscribeMessage('obtenerPedidos')
  handleObtenerPedidos(): Pedido[] {
    return this.pedidoService.obtenerPedidos();
  }

  @SubscribeMessage('crearPedido')
  handleCrearPedido(client: any, @MessageBody() dto: PedidoDto): Pedido {
    const pedido = this.pedidoService.crearPedido(dto);
    client.emit('pedidoCreado', pedido);
    return pedido;
  }
}
