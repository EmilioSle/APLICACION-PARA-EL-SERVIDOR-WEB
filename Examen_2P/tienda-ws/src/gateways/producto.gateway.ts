import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ProductoService } from '../services/producto.service';
import { ProductoDto } from '../../../domain/dtos/producto.dto';
import { Producto } from '../../../domain/entities/producto.entity';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ProductoGateway {
  @WebSocketServer()
  server: Server;
  private readonly productoService = new ProductoService();

  @SubscribeMessage('obtenerProductos')
  handleObtenerProductos(): Producto[] {
    return this.productoService.obtenerProductos();
  }

  @SubscribeMessage('crearProducto')
  handleCrearProducto(client: any, @MessageBody() dto: ProductoDto): Producto {
    const producto = this.productoService.crearProducto(dto);
    client.emit('productoCreado', producto);
    return producto;
  }
}
