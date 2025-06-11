import { UpdatePetDto } from 'src/pets/dto/update-pet.dto';
export declare class UpdatePetCommand {
    readonly id: number;
    readonly updatePetDto: UpdatePetDto;
    constructor(id: number, updatePetDto: UpdatePetDto);
}
