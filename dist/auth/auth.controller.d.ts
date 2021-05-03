import { AuthService } from './auth.service';
import { UsersService } from '../users/user.service';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UsersService);
    login(body: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any, res: any): Promise<any>;
}
