import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PagoService, Pago, PagoDto, IPago } from '../../../domain';
import * as data from '../persistence/data.json';

@Controller('pagos')
export class PagoController {
  private readonly pagoService = new PagoService();

  @Get()
  obtenerPagos(): Pago[] {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(__dirname, '../persistence/data.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(raw);
    return this.pagoService.obtenerPagos(data.pagos);
  }
  
  @Get(':id/detalle')
  obtenerDetallePago(@Param('id') id: number) {
    const pago = (data as any).pagos.find((p: any) => p.id === Number(id));
    if (!pago) return { error: 'Pago no encontrado' };
    const pedido = (data as any).pedidos.find((ped: any) => ped.id === pago.pedidoId);
    if (!pedido) return { error: 'Pedido no encontrado' };
    const productos = pedido.productos.map((pid: number) => {
      const prod = (data as any).productos.find((p: any) => p.id === pid);
      if (!prod) return null;
      const categoria = (data as any).categorias.find((cat: any) => cat.id === prod.categoriaId);
      return { ...prod, categoria };
    });
    return {
      pago,
      pedido,
      productos
    };
  }

  @Post()
  crearPago(@Body() dto: PagoDto): Pago {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(__dirname, '../persistence/data.json');
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
}
