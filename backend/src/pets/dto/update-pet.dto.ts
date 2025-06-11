import { IsString, IsInt, IsUrl } from 'class-validator';

export class UpdatePetDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  breed?: string;

  @IsInt()
  age?: number;

  @IsUrl()
  imageUrl?: string;

  @IsString()
  description?: string;
}
