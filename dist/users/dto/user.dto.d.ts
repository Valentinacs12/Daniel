export declare class CreateUserDTO {
    readonly name: string;
    readonly lastName: string;
    readonly email: string;
    readonly cellphone: string;
    readonly rol: string;
    readonly createAt: Date;
    password: string;
    organization: string;
}
export declare class CreateNotificationDTO {
    readonly _id: string;
    readonly type: string;
    readonly message: string;
    readonly createAt: Date;
}
export declare class LoginDTO {
    readonly email: string;
    readonly password: string;
}
export declare class TokenDTO {
    readonly access_token: string;
}
declare class userextends {
    "createAt": string;
    "organization": string;
    "_id": string;
}
export declare class UserIDDTO {
    "_id": string;
}
declare const UserextendsDTO_base: import("@nestjs/common").Type<CreateUserDTO & userextends>;
export declare class UserextendsDTO extends UserextendsDTO_base {
}
declare const notificationDTO_base: import("@nestjs/common").Type<userextends & CreateNotificationDTO>;
export declare class notificationDTO extends notificationDTO_base {
}
export {};
