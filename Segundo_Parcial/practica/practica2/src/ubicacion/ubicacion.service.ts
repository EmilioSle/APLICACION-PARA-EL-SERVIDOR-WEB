import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ubicacion } from './entities/ubicacion.entity';
import { CreateUbicacionInput } from './dto/create-ubicacion.input';
import { UpdateUbicacionInput } from './dto/update-ubicacion.input';

@Injectable()
export class UbicacionService {
  constructor(
    @InjectRepository(Ubicacion)
    private readonly ubicacionRepository: Repository<Ubicacion>,
  ) {}

  async create(createUbicacionInput: CreateUbicacionInput): Promise<Ubicacion> {
    const ubicacion = this.ubicacionRepository.create(createUbicacionInput);
    return this.ubicacionRepository.save(ubicacion);
  }

  findAll(): Promise<Ubicacion[]> {
    return this.ubicacionRepository.find();
  }

  async findOne(id: number): Promise<Ubicacion> {
    const ubicacion = await this.ubicacionRepository.findOneBy({ id });
    if (!ubicacion) throw new NotFoundException(`Ubicación with ID ${id} not found`);
    return ubicacion;
  }

  async update(id: number, updateUbicacionInput: UpdateUbicacionInput): Promise<Ubicacion> {
    await this.ubicacionRepository.update(id, updateUbicacionInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.ubicacionRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Ubicación with ID ${id} not found`);
    return true;
  }
}
