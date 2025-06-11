import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePetDto } from './dto/create-pet.dto';
import { PetDto } from './dto/pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
export declare class PetsController {
    private readonly CommandBus;
    private readonly QueryBus;
    constructor(CommandBus: CommandBus, QueryBus: QueryBus);
    createPet(createPetDto: CreatePetDto): Promise<PetDto>;
    updatePet(id: number, updatePetDto: UpdatePetDto): Promise<PetDto>;
    getAllPets(): Promise<PetDto[]>;
    getPetById(id: number): Promise<PetDto>;
    deletePet(id: number): Promise<void>;
}
