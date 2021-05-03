import { Document, Types } from "mongoose";
export interface IUser extends Document {
    readonly name: string;
    readonly lastName: string;
    readonly email: string;
    readonly cellphone: string;
    readonly rol: "admin" | "conductor" | "otro" | string;
    readonly createAt: Date;
    readonly password: string;
    readonly notifications: {
        type: string;
        message: string;
        createAt: Date;
        _id: string;
    }[];
    readonly organization: string;
}
export interface INotification extends Document {
    readonly _id: Types.ObjectId;
    readonly type: string;
    readonly message: string;
    readonly createAt: Date;
}
