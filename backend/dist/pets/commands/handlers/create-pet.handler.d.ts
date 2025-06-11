import { ICommandHandler } from '@nestjs/cqrs';
import { CreatePetCommand } from '../implementation/create-pet.command';
import { Pet } from '../../entities/pet.entity';
import { Repository } from 'typeorm';
export declare class CreatePetHandler implements ICommandHandler<CreatePetCommand> {
    private readonly petRepository;
    constructor(petRepository: Repository<Pet>);
    execute(command: CreatePetCommand): Promise<Pet>;
}
