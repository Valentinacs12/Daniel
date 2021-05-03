import { Document } from "mongoose";
export interface IOrganization extends Document {
    readonly name: string;
    readonly createAt: Date;
    readonly users: string[];
}
