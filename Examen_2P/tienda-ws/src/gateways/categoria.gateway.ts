import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { CategoriaService } from '../services/categoria.service';
import { Categoria, CategoriaDto } from '../../../domain';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class CategoriaGateway {
  @WebSocketServer()
  server: Server;
  private readonly categoriaService = new CategoriaService();

  @SubscribeMessage('obtenerCategorias')
  handleObtenerCategorias(): Categoria[] {
    return this.categoriaService.obtenerCategorias();
  }

  @SubscribeMessage('crearCategoria')
  handleCrearCategoria(@MessageBody() dto: CategoriaDto): Categoria {
    const categoria = this.categoriaService.crearCategoria(dto);
    this.server.emit('categoriaCreada', categoria);
    return categoria;
  }
}
