import { IsString } from 'class-validator';

export class CreateUbicacionDto {
  @IsString()
  nombre: string;

  @IsString()
  coordenadas: string;
}
