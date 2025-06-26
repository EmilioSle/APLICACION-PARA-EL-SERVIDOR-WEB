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
    private sensorRepo: Repository<Sensor>,
  ) {}

  create(dto: CreateSensorDto) {
    const nuevo = this.sensorRepo.create(dto);
    return this.sensorRepo.save(nuevo);
  }

  findAll() {
    return this.sensorRepo.find();
  }

  async findOne(id: number) {
    const sensor = await this.sensorRepo.findOneBy({ id });
    if (!sensor) throw new NotFoundException('Sensor no encontrado');
    return sensor;
  }

  async update(id: number, dto: UpdateSensorDto) {
    await this.findOne(id);
    await this.sensorRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const sensor = await this.findOne(id);
    return this.sensorRepo.remove(sensor);
  }
}
