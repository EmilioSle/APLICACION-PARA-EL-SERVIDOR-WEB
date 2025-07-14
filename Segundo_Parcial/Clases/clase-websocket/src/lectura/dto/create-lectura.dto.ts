import { IsNumber, IsString } from 'class-validator';

export class CreateLecturaDto {
  @IsNumber()
  valor: number;

  @IsString()
  fecha: string;

  @IsNumber()
  sensorId: number;

  @IsNumber()
  ubicacionId: number;
}
