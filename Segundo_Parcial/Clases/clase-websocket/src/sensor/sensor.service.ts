import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sensor } from './entities/sensor.entity';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';

@Injectable()
export class SensorService {
  constructor(
    @InjectRepository(Sensor)
    private readonly sensorRepo: Repository<Sensor>,
  ) {}

  async create(dto: CreateSensorDto): Promise<Sensor> {
    const nuevo = this.sensorRepo.create(dto);
    return await this.sensorRepo.save(nuevo);
  }

  async findAll(): Promise<Sensor[]> {
    return await this.sensorRepo.find();
  }

  async findOne(id: number): Promise<Sensor> {
    const sensor = await this.sensorRepo.findOneBy({ id });
    if (!sensor) {
      throw new NotFoundException(`Sensor con id ${id} no encontrado`);
    }
    return sensor;
  }

  async update(id: number, dto: UpdateSensorDto): Promise<Sensor> {
    const sensor = await this.findOne(id); // Valida existencia
    const actualizado = Object.assign(sensor, dto);
    return await this.sensorRepo.save(actualizado);
  }

  async remove(id: number): Promise<void> {
    const sensor = await this.findOne(id); // Valida existencia
    await this.sensorRepo.remove(sensor);
  }
}
