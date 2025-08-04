import { Pedido, PedidoDto } from '../../../domain';

export class PedidoService {
  crearPedido(dto: PedidoDto): Pedido {
    if (!dto.productos || !Array.isArray(dto.productos)) {
      throw new Error('El campo productos debe ser un arreglo de IDs');
    }
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(process.cwd(), 'src/persistence/data.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(raw);
    // Validar que los productos existan
    const productosValidos = dto.productos.every((id: number) =>
      data.productos.some((prod: any) => prod.id === id)
    );
    if (!productosValidos) {
      throw new Error('Uno o más productos no existen');
    }
    // Crear el pedido y agregarlo al JSON
    const nuevo: Pedido = {
      id: data.pedidos.length + 1,
      ...dto
    };
    data.pedidos.push(nuevo);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return nuevo;
  }

  obtenerPedidos(): Pedido[] {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(process.cwd(), 'src/persistence/data.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(raw);
    return data.pedidos;
  }
}
