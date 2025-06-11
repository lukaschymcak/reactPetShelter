import { IQueryHandler } from '@nestjs/cqrs';
import { GetAllPetsQuery } from '../implementation/get-all-pets.query';
import { Pet } from 'src/pets/entities/pet.entity';
import { Repository } from 'typeorm';
import { PetDto } from 'src/pets/dto/pet.dto';
export declare class GetAllPetsHandler implements IQueryHandler<GetAllPetsQuery> {
    private readonly petRepository;
    constructor(petRepository: Repository<Pet>);
    execute(): Promise<PetDto[]>;
}
