import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lectura } from './entities/lectura.entity';
import { CreateLecturaInput } from './dto/create-lectura.input';
import { UpdateLecturaInput } from './dto/update-lectura.input';
import { Sensor } from '../sensor/entities/sensor.entity'; // Ajusta ruta si es necesario

@Injectable()
export class LecturaService {
  constructor(
    @InjectRepository(Lectura)
    private readonly lecturaRepository: Repository<Lectura>,

    @InjectRepository(Sensor)
    private readonly sensorRepository: Repository<Sensor>,
  ) {}

  async create(createLecturaInput: CreateLecturaInput): Promise<Lectura> {
    const { sensorId, ...rest } = createLecturaInput;

    // Validar que sensorId venga definido
    if (!sensorId) {
      throw new NotFoundException('Sensor ID is required to create a lectura');
    }

    // Buscar el sensor existente
    const sensor = await this.sensorRepository.findOneBy({ id: sensorId });
    if (!sensor) {
      throw new NotFoundException(`Sensor with ID ${sensorId} not found`);
    }

    // Crear la lectura asignando el sensor relacionado
    const lectura = this.lecturaRepository.create({
      ...rest,
      sensor,
    });

    return this.lecturaRepository.save(lectura);
  }


  findAll(): Promise<Lectura[]> {
    return this.lecturaRepository.find({ relations: ['sensor'] });
  }

  async findOne(id: number): Promise<Lectura> {
    const lectura = await this.lecturaRepository.findOne({
      where: { id },
      relations: ['sensor'],
    });
    if (!lectura) throw new NotFoundException(`Lectura with ID ${id} not found`);
    return lectura;
  }

  async update(id: number, updateLecturaInput: UpdateLecturaInput): Promise<Lectura> {
    await this.lecturaRepository.update(id, updateLecturaInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.lecturaRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Lectura with ID ${id} not found`);
    return true;
  }
}

