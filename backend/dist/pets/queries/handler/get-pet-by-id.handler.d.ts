import { IQueryHandler } from '@nestjs/cqrs';
import { GetPetByIdQuery } from '../implementation/get-pet-by-id.query';
import { PetDto } from 'src/pets/dto/pet.dto';
import { Pet } from 'src/pets/entities/pet.entity';
import { Repository } from 'typeorm';
export declare class GetPetByIdHandler implements IQueryHandler<GetPetByIdQuery> {
    private readonly petRepository;
    constructor(petRepository: Repository<Pet>);
    execute(query: GetPetByIdQuery): Promise<PetDto>;
}
