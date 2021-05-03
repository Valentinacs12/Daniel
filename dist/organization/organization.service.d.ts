import { IOrganization } from "./interfaces/organization.interface";
import { Model } from "mongoose";
import { CreateOrganizationDTO } from "./dto/organization.dto";
export declare class OrganizationService {
    private readonly organizationModel;
    constructor(organizationModel: Model<IOrganization>);
    createOrganization(body: CreateOrganizationDTO): Promise<IOrganization>;
    getOrganizations(): Promise<IOrganization[]>;
    getOrganization(OrgID: string): Promise<IOrganization>;
    updateOrganization(OrgID: string, body: CreateOrganizationDTO): Promise<IOrganization>;
    deleteOrganization(OrgID: string): Promise<IOrganization>;
    linkUser(OrgID: string, userID: string): Promise<IOrganization>;
    getOrgUsers(OrgID: string): Promise<any>;
}
