import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PedidoService } from '../../../domain';
import { Pedido, PedidoDto, IPedido, Producto, ProductoDto, IProducto, Categoria, CategoriaDto, ICategoria } from '../../../domain';
import * as data from '../persistence/data.json';

@Controller('pedidos')
export class PedidoController {
  private readonly pedidoService = new PedidoService();

  @Get(':id/productos')
  obtenerProductosDePedido(@Param('id') id: number) {
    const pedido = (data as any).pedidos.find((p: any) => p.id === Number(id));
    if (!pedido) return { error: 'Pedido no encontrado' };
    const productos = pedido.productos.map((pid: number) => {
      const prod = (data as any).productos.find((p: any) => p.id === pid);
      if (!prod) return null;
      const categoria = (data as any).categorias.find((cat: any) => cat.id === prod.categoriaId);
      return { ...prod, categoria };
    });
    return productos;
  }
  @Post()
  crearPedido(@Body() dto: PedidoDto): Pedido {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(__dirname, '../persistence/data.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(raw);
   
    const productosValidos = dto.productos.every((id: number) =>
      data.productos.some((prod: any) => prod.id === id)
    );
    if (!productosValidos) {
      throw new Error('Uno o más productos no existen');
    }
    
    const nuevo: Pedido = {
      id: data.pedidos.length + 1,
      ...dto
    };
    data.pedidos.push(nuevo);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return nuevo;
  }
}
