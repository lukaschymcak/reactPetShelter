import { Pet } from './entities/pet.entity';
import { PetDto } from './dto/pet.dto';
import { CreatePetDto } from './dto/create-pet.dto';

export class PetMapper {
  public static toDto(entity: Pet): PetDto {
    const dto = new PetDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.type = entity.type;
    dto.breed = entity.breed;
    dto.age = entity.age;
    dto.imageUrl = entity.imageUrl;
    dto.description = entity.description;
    return dto;
  }

  public static toEntity(dto: CreatePetDto): Pet {
    const entity = new Pet();
    entity.name = dto.name;
    entity.type = dto.type;
    entity.breed = dto.breed ?? '';
    entity.age = dto.age ?? 0;
    entity.imageUrl = dto.imageUrl ?? '';
    entity.description = dto.description ?? '';
    return entity;
  }
}
