import { CreatePetDto } from '../../dto/create-pet.dto';
export declare class CreatePetCommand {
    readonly createPetDto: CreatePetDto;
    constructor(createPetDto: CreatePetDto);
}
