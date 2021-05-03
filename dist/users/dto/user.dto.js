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
exports.notificationDTO = exports.UserextendsDTO = exports.UserIDDTO = exports.TokenDTO = exports.LoginDTO = exports.CreateNotificationDTO = exports.CreateUserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateUserDTO {
}
__decorate([
    swagger_1.ApiProperty({ required: true }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "cellphone", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "rol", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "password", void 0);
exports.CreateUserDTO = CreateUserDTO;
class CreateNotificationDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateNotificationDTO.prototype, "_id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateNotificationDTO.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateNotificationDTO.prototype, "message", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Date)
], CreateNotificationDTO.prototype, "createAt", void 0);
exports.CreateNotificationDTO = CreateNotificationDTO;
class LoginDTO {
}
__decorate([
    swagger_1.ApiProperty({ required: true }),
    __metadata("design:type", String)
], LoginDTO.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ required: true }),
    __metadata("design:type", String)
], LoginDTO.prototype, "password", void 0);
exports.LoginDTO = LoginDTO;
class TokenDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], TokenDTO.prototype, "access_token", void 0);
exports.TokenDTO = TokenDTO;
class userextends {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], userextends.prototype, "createAt", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], userextends.prototype, "organization", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], userextends.prototype, "_id", void 0);
class UserIDDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserIDDTO.prototype, "_id", void 0);
exports.UserIDDTO = UserIDDTO;
class UserextendsDTO extends swagger_1.IntersectionType(CreateUserDTO, userextends) {
}
exports.UserextendsDTO = UserextendsDTO;
class notificationDTO extends swagger_1.IntersectionType(userextends, CreateNotificationDTO) {
}
exports.notificationDTO = notificationDTO;
//# sourceMappingURL=user.dto.js.map