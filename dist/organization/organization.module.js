"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const organization_controller_1 = require("./organization.controller");
const organization_service_1 = require("./organization.service");
const user_module_1 = require("../users/user.module");
const organization_schema_1 = require("./schemas/organization.schema");
let OrganizationModule = class OrganizationModule {
};
OrganizationModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{
                    name: "Organization",
                    schema: organization_schema_1.OrgnizationSchema,
                }]), user_module_1.UsersModule],
        controllers: [organization_controller_1.OrganizationController],
        providers: [organization_service_1.OrganizationService,],
        exports: [organization_service_1.OrganizationService],
    })
], OrganizationModule);
exports.OrganizationModule = OrganizationModule;
//# sourceMappingURL=organization.module.js.map