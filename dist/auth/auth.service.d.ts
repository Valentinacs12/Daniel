import { UsersService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from "../users/interfaces/user.interface";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<IUser>;
    login(user: IUser): Promise<{
        access_token: string;
    }>;
}
