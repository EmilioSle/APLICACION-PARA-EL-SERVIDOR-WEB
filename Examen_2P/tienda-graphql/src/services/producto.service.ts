import { ProductoDto } from '../../../domain/dtos/producto.dto';
import { Producto } from '../../../domain/entities/producto.entity';

export class ProductoService {
  crearProducto(dto: ProductoDto): Producto {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(__dirname, '../persistence/data.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(raw);
    // Validar que la categoría exista
    const categoria = data.categorias.find((cat: any) => cat.id === dto.categoriaId);
    if (!categoria) {
      throw new Error('Categoría no encontrada');
    }
    // Crear el producto y agregarlo al JSON
    const nuevo: Producto = {
      id: data.productos.length + 1,
      ...dto
    };
    data.productos.push(nuevo);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return nuevo;
  }

  obtenerProductos(): Producto[] {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(__dirname, '../persistence/data.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(raw);
    return data.productos;
  }
}
