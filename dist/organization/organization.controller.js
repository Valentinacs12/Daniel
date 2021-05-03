"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationController = void 0;
const organization_service_1 = require("./organization.service");
const user_service_1 = require("../users/user.service");
const common_1 = require("@nestjs/common");
const organization_dto_1 = require("./dto/organization.dto");
const swagger_1 = require("@nestjs/swagger");
let OrganizationController = class OrganizationController {
    constructor(organizatinoService, userService) {
        this.organizatinoService = organizatinoService;
        this.userService = userService;
    }
    async createOrg(req, res, body) {
        const organization = await this.organizatinoService.createOrganization(body);
        return res.status(common_1.HttpStatus.OK).json({
            organization
        });
    }
    async getOrganizations(req, res) {
        const organizations = await this.organizatinoService.getOrganizations();
        return res.status(common_1.HttpStatus.OK).json({
            organizations
        });
    }
};
__decorate([
    common_1.Post("/create"),
    swagger_1.ApiBody({ type: organization_dto_1.OrganzationDTO, description: "Ingrese el nombre de la organización que desea crear" }),
    swagger_1.ApiResponse({ status: 200, description: 'La orgtanización se creado correctamente.',
        type: organization_dto_1.orgextendsDTO
    }),
    __param(0, common_1.Req()), __param(1, common_1.Res()), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, organization_dto_1.CreateOrganizationDTO]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "createOrg", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiResponse({ description: "Devuelve un arreglo de organizaciones", status: 200, type: [organization_dto_1.CreateOrganizationDTO] }),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "getOrganizations", null);
OrganizationController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('organization'),
    common_1.Controller('organization'),
    __metadata("design:paramtypes", [organization_service_1.OrganizationService, user_service_1.UsersService])
], OrganizationController);
exports.OrganizationController = OrganizationController;
//# sourceMappingURL=organization.controller.js.map