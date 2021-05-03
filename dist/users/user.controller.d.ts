import { CreateUserDTO } from "./dto/user.dto";
import { UsersService } from "./user.service";
export declare class UsersController {
    private userSerivce;
    constructor(userSerivce: UsersService);
    createUser(res: any, createUserBody: CreateUserDTO): Promise<any>;
    sendEmailUser(res: any, body: {
        email: string;
    }): Promise<any>;
    getUser(res: any, userID: string): Promise<any>;
    deleteUser(res: any, userID: string): Promise<any>;
}
