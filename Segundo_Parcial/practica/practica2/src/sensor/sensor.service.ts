import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sensor } from './entities/sensor.entity';
import { CreateSensorInput } from './dto/create-sensor.input';
import { UpdateSensorInput } from './dto/update-sensor.input';
import { Ubicacion } from '../ubicacion/entities/ubicacion.entity';

@Injectable()
export class SensorService {
  constructor(
    @InjectRepository(Sensor)
    private sensorRepository: Repository<Sensor>,

    @InjectRepository(Ubicacion)
    private ubicacionRepository: Repository<Ubicacion>,
  ) {}

  async create(createSensorInput: CreateSensorInput): Promise<Sensor> {
  const ubicacion = await this.ubicacionRepository.findOneBy({
      id: createSensorInput.ubicacionId,
    });
    if (!ubicacion) {
      throw new NotFoundException(`Ubicacion with ID ${createSensorInput.ubicacionId} not found`);
    }

    const sensor = this.sensorRepository.create(createSensorInput);
    await this.sensorRepository.save(sensor);

    const sensorConUbicacion = await this.sensorRepository.findOne({
      where: { id: sensor.id },
      relations: ['ubicacion'],
    });

    if (!sensorConUbicacion) {
      throw new NotFoundException(`Sensor with ID ${sensor.id} not found after creation`);
    }

    return sensorConUbicacion;
  }


  findAll(): Promise<Sensor[]> {
    return this.sensorRepository.find({
      relations: ['ubicacion'],
    });
  }

  async findOne(id: number): Promise<Sensor> {
    const sensor = await this.sensorRepository.findOne({
      where: { id },
      relations: ['ubicacion'],
    });
    if (!sensor) throw new NotFoundException(`Sensor with ID ${id} not found`);
    return sensor;
  }

  async update(id: number, updateSensorInput: UpdateSensorInput): Promise<Sensor> {
    await this.sensorRepository.update(id, updateSensorInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.sensorRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Sensor with ID ${id} not found`);
    return true;
  }
}
