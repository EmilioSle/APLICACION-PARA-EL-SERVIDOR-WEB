import { Pedido } from '../entities/pedido.entity';
import { PedidoDto } from '../dtos/pedido.dto';

export class PedidoService {
  crearPedido(dto: PedidoDto, pedidos: Pedido[]): Pedido {
    const nuevo: Pedido = {
      id: pedidos.length + 1,
      ...dto
    };
    pedidos.push(nuevo);
    return nuevo;
  }

  obtenerPedidos(pedidos: Pedido[]): Pedido[] {
    return pedidos;
  }
}
