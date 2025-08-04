import { Producto } from '../entities/producto.entity';
import { ProductoDto } from '../dtos/producto.dto';

export class ProductoService {
  crearProducto(dto: ProductoDto, productos: Producto[]): Producto {
    const nuevo: Producto = {
      id: productos.length + 1,
      ...dto
    };
    productos.push(nuevo);
    return nuevo;
  }

  obtenerProductos(productos: Producto[]): Producto[] {
    return productos;
  }
}
