import { Controller, Get, Post, Body } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { ProductoService } from '../services/producto.service';
import { ProductoDto } from '../../../domain/dtos/producto.dto';
import { Producto } from '../../../domain/entities/producto.entity';

@Controller('productos')
export class ProductoController {
  private readonly productoService = new ProductoService();

  @Get()
  obtenerProductos(): Producto[] {
    return this.productoService.obtenerProductos();
  }

  @Post()
  crearProducto(@Body() dto: ProductoDto): Producto {
    
    const dataPath = path.join(__dirname, '../persistence/data.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    const categoria = data.categorias.find((cat: any) => cat.id === dto.categoriaId);
    if (!categoria) {
      throw new Error('Categoría no encontrada');
    }
    
    const nuevo: Producto = {
      id: data.productos.length + 1,
      ...dto
    };
    data.productos.push(nuevo);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return nuevo;
  }
}
