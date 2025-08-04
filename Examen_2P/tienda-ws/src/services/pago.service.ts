import { Pago, PagoDto } from '../../../domain';

export class PagoService {
  crearPago(dto: PagoDto): Pago {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(process.cwd(), 'src/persistence/data.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(raw);
    // Validar que el pedido exista
    const pedido = data.pedidos.find((ped: any) => ped.id === dto.pedidoId);
    if (!pedido) {
      throw new Error('Pedido no encontrado');
    }
    // Crear el pago y agregarlo al JSON
    const nuevo: Pago = {
      id: data.pagos.length + 1,
      ...dto
    };
    data.pagos.push(nuevo);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return nuevo;
  }

  obtenerPagos(): Pago[] {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(process.cwd(), 'src/persistence/data.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(raw);
    return data.pagos;
  }
}
