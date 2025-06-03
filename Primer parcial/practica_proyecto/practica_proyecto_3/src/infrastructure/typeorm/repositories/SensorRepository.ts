// typeorm/repository/SensorRepository.ts
import { Repository } from "typeorm";
import { SensorEntity } from "../entities/SensorEntity";
import { AppDataSource } from "../../../interface/data-source";

export class SensorRepository {
  private repo: Repository<SensorEntity>;

  constructor() {
    this.repo = AppDataSource.getRepository(SensorEntity);
  }

  // Crear sensor
  async createSensor(data: Partial<SensorEntity>): Promise<SensorEntity> {
    const sensor = this.repo.create(data);
    return await this.repo.save(sensor);
  }

  // Obtener todos los sensores
  async getAllSensors(): Promise<SensorEntity[]> {
    return await this.repo.find();
  }

  // Obtener sensor por id
  async getSensorById(id: string): Promise<SensorEntity | null> {
    return await this.repo.findOneBy({ id });
  }

  // Actualizar sensor por id
  async updateSensor(id: string, data: Partial<SensorEntity>): Promise<SensorEntity | null> {
    const sensor = await this.repo.findOneBy({ id });
    if (!sensor) return null;

    Object.assign(sensor, data);
    return await this.repo.save(sensor);
  }

  // Eliminar sensor por id
  async deleteSensor(id: string): Promise<boolean> {
    const result = await this.repo.delete(id);
    return result.affected !== 0;
  }
}
