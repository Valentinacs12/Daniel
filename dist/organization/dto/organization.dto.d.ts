export declare class CreateOrganizationDTO {
    readonly name: string;
    readonly createAt: Date;
    readonly users: string[];
}
export declare class OrganzationDTO {
    readonly name: string;
}
declare class orgextends {
    "_id": string;
}
declare const orgextendsDTO_base: import("@nestjs/common").Type<CreateOrganizationDTO & orgextends>;
export declare class orgextendsDTO extends orgextendsDTO_base {
}
export {};
