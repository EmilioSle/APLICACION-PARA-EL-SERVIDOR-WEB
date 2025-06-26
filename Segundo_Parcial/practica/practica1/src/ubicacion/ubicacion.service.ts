import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ubicacion } from './entities/ubicacion.entity';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';

@Injectable()
export class UbicacionService {
  constructor(
    @InjectRepository(Ubicacion)
    private ubicacionRepo: Repository<Ubicacion>,
  ) {}

  create(dto: CreateUbicacionDto) {
    const nueva = this.ubicacionRepo.create(dto);
    return this.ubicacionRepo.save(nueva);
  }

  findAll() {
    return this.ubicacionRepo.find({ relations: ['sensores'] });
  }

  async findOne(id: number) {
    const ubicacion = await this.ubicacionRepo.findOne({ where: { id }, relations: ['sensores'] });
    if (!ubicacion) throw new NotFoundException('Ubicación no encontrada');
    return ubicacion;
  }

  async update(id: number, dto: UpdateUbicacionDto) {
    await this.findOne(id);
    await this.ubicacionRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const ubicacion = await this.findOne(id);
    return this.ubicacionRepo.remove(ubicacion);
  }
}
