import { ProductoDto } from '../../../domain/dtos/producto.dto';
import { Producto } from '../../../domain/entities/producto.entity';

export class ProductoService {
  private productos: Producto[] = [];

  crearProducto(dto: ProductoDto): Producto {
    const nuevo: Producto = {
      id: this.productos.length + 1,
      ...dto
    };
    this.productos.push(nuevo);
    return nuevo;
  }

  obtenerProductos(): Producto[] {
    return this.productos;
  }
}
