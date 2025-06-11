import { CreatePetHandler } from './commands/handlers/create-pet.handler';
import { DeletePetHandler } from './commands/handlers/delete-pet.handler';
import { UpdatePetHandler } from './commands/handlers/update-pet.handler';
import { GetAllPetsHandler } from './queries/handler/get-all-pets.handler';
import { GetPetByIdHandler } from './queries/handler/get-pet-by-id.handler';
export declare const CommandHandlers: (typeof CreatePetHandler | typeof DeletePetHandler | typeof UpdatePetHandler)[];
export declare const QueryHandlers: (typeof GetAllPetsHandler | typeof GetPetByIdHandler)[];
export declare class PetsModule {
}
