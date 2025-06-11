import { ICommandHandler } from '@nestjs/cqrs';
import { UpdatePetCommand } from '../implementation/update-pet.command';
import { Repository } from 'typeorm';
import { Pet } from '../../entities/pet.entity';
export declare class UpdatePetHandler implements ICommandHandler<UpdatePetCommand> {
    private readonly petRepository;
    constructor(petRepository: Repository<Pet>);
    execute(command: UpdatePetCommand): Promise<void>;
}
