import { Pet } from './entities/pet.entity';
import { PetDto } from './dto/pet.dto';
import { CreatePetDto } from './dto/create-pet.dto';
export declare class PetMapper {
    static toDto(entity: Pet): PetDto;
    static toEntity(dto: CreatePetDto): Pet;
}
