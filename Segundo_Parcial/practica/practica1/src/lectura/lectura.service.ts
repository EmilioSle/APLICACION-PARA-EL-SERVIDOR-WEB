import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lectura } from './entities/lectura.entity';
import { CreateLecturaDto } from './dto/create-lectura.dto';
import { UpdateLecturaDto } from './dto/update-lectura.dto';
import { Sensor } from '../sensor/entities/sensor.entity';

@Injectable()
export class LecturaService {
  constructor(
    @InjectRepository(Lectura)
    private lecturaRepo: Repository<Lectura>,

    @InjectRepository(Sensor)
    private sensorRepo: Repository<Sensor>,
  ) {}

  async create(dto: CreateLecturaDto) {
    const sensor = await this.sensorRepo.findOneBy({ id: dto.sensorId });
    if (!sensor) throw new NotFoundException('Sensor no encontrado');

    const lectura = this.lecturaRepo.create({
      valor: dto.valor,
      timestamp: dto.timestamp,
      sensor,
    });

    return this.lecturaRepo.save(lectura);
  }

  findAll() {
    return this.lecturaRepo.find({ relations: ['sensor'] });
  }

  async findOne(id: number) {
    const lectura = await this.lecturaRepo.findOne({ where: { id }, relations: ['sensor'] });
    if (!lectura) throw new NotFoundException('Lectura no encontrada');
    return lectura;
  }

  async update(id: number, dto: UpdateLecturaDto) {
    const lectura = await this.findOne(id);
    if (dto.sensorId) {
      const sensor = await this.sensorRepo.findOneBy({ id: dto.sensorId });
      if (!sensor) throw new NotFoundException('Sensor no encontrado');
      lectura.sensor = sensor;
    }
    Object.assign(lectura, dto);
    return this.lecturaRepo.save(lectura);
  }

  async remove(id: number) {
    const lectura = await this.findOne(id);
    return this.lecturaRepo.remove(lectura);
  }
}
