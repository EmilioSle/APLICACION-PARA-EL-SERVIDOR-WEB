import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria, CategoriaDto } from '../../../domain';

@Controller('categorias')
export class CategoriaController {
  private readonly categoriaService = new CategoriaService();

  @Get()
  obtenerCategorias(): Categoria[] {
    return this.categoriaService.obtenerCategorias();
  }

  @Get(':id/productos')
  obtenerProductosDeCategoria(@Param('id') id: number) {
    const data = require('../persistence/data.json');
    const productos = data.productos.filter((prod: any) => prod.categoriaId === Number(id));
    return productos;
  }

  @Post()
  crearCategoria(@Body() dto: CategoriaDto): Categoria {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(__dirname, '../persistence/data.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(raw);
 
    const nueva: Categoria = {
      id: data.categorias.length + 1,
      ...dto
    };
    data.categorias.push(nueva);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return nueva;
  }
}
