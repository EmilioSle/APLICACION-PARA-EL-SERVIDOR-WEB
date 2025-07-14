import { IsString } from 'class-validator';

export class CreateSensorDto {
  @IsString()
  nombre: string;

  @IsString()
  tipo: string;
}
