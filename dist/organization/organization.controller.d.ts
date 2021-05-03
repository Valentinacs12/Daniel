import { OrganizationService } from "./organization.service";
import { UsersService } from "../users/user.service";
import { CreateOrganizationDTO } from "./dto/organization.dto";
export declare class OrganizationController {
    private organizatinoService;
    private userService;
    constructor(organizatinoService: OrganizationService, userService: UsersService);
    createOrg(req: any, res: any, body: CreateOrganizationDTO): Promise<any>;
    getOrganizations(req: any, res: any): Promise<any>;
}
