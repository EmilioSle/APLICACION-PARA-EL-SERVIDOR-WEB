import { Pago } from '../entities/pago.entity';
import { PagoDto } from '../dtos/pago.dto';

export class PagoService {
  crearPago(dto: PagoDto, pagos: Pago[]): Pago {
    const nuevo: Pago = {
      id: pagos.length + 1,
      ...dto
    };
    pagos.push(nuevo);
    return nuevo;
  }

  obtenerPagos(pagos: Pago[]): Pago[] {
    return pagos;
  }
}
