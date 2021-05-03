import { Model } from "mongoose";
import { IUser } from "./interfaces/user.interface";
import { CreateUserDTO } from "./dto/user.dto";
import { MailerService } from '@nestjs-modules/mailer';
export declare class UsersService {
    private readonly userModel;
    private readonly mailerService;
    constructor(userModel: Model<IUser>, mailerService: MailerService);
    getUsers(): Promise<IUser[]>;
    getOrganization(userID: string): Promise<any>;
    getUser(userID: string): Promise<IUser>;
    sendEmail(email: string): Promise<boolean>;
    getUserByEmail(email: string): Promise<IUser>;
    createUser(userBody: CreateUserDTO): Promise<IUser>;
    deleteUser(userID: string): Promise<IUser>;
    updateUser(userID: string, body: CreateUserDTO): Promise<IUser>;
    updateUserPatch(userID: string, body: Partial<CreateUserDTO>): Promise<IUser>;
    updateUserByEmail(email: string, body: CreateUserDTO): Promise<IUser>;
}
