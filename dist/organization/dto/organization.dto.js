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
Object.defineProperty(exports, "__esModule", { value: true });
exports.orgextendsDTO = exports.OrganzationDTO = exports.CreateOrganizationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateOrganizationDTO {
}
__decorate([
    swagger_1.ApiProperty({ required: true }),
    __metadata("design:type", String)
], CreateOrganizationDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Date)
], CreateOrganizationDTO.prototype, "createAt", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], CreateOrganizationDTO.prototype, "users", void 0);
exports.CreateOrganizationDTO = CreateOrganizationDTO;
class OrganzationDTO {
}
__decorate([
    swagger_1.ApiProperty({ required: true }),
    __metadata("design:type", String)
], OrganzationDTO.prototype, "name", void 0);
exports.OrganzationDTO = OrganzationDTO;
class orgextends {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], orgextends.prototype, "_id", void 0);
class orgextendsDTO extends swagger_1.IntersectionType(CreateOrganizationDTO, orgextends) {
}
exports.orgextendsDTO = orgextendsDTO;
//# sourceMappingURL=organization.dto.js.map