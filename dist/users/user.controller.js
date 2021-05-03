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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./dto/user.dto");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
let UsersController = class UsersController {
    constructor(userSerivce) {
        this.userSerivce = userSerivce;
    }
    async createUser(res, createUserBody) {
        const user = await this.userSerivce.createUser(createUserBody);
        return res.status(common_1.HttpStatus.OK).json({
            user
        });
    }
    async sendEmailUser(res, body) {
        const sended = await this.userSerivce.sendEmail(body.email);
        return res.status(common_1.HttpStatus.OK).json({
            sended
        });
    }
    async getUser(res, userID) {
        const user = await this.userSerivce.getUser(userID);
        return res.status(common_1.HttpStatus.OK).json({
            user
        });
    }
    async deleteUser(res, userID) {
        const userDeleted = await this.userSerivce.deleteUser(userID);
        if (!userDeleted)
            throw new common_1.NotFoundException("User does not exists");
        return res.status(common_1.HttpStatus.OK).json({
            message: "user deleted",
            userDeleted
        });
    }
};
__decorate([
    common_1.Post("/create"),
    swagger_1.ApiResponse({ status: 200, description: 'El usuario se creado correctamente.',
        type: user_dto_1.CreateUserDTO
    }),
    swagger_1.ApiResponse({ status: 400,
        description: "email mail@mail.com existe en la Base de datos",
    }),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    common_1.Post("mailTo"),
    swagger_1.ApiBody({ description: "Enviar email", type: "email" }),
    swagger_1.ApiResponse({ status: 200, description: "sended: true" }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "sendEmailUser", null);
__decorate([
    common_1.Get("/:userID"),
    swagger_1.ApiResponse({ status: 200, description: 'El usuario se ha encontrado correctamente', type: user_dto_1.UserextendsDTO
    }),
    __param(0, common_1.Res()), __param(1, common_1.Param("userID")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    common_1.Delete("/delete"),
    swagger_1.ApiQuery({ name: "userID", type: "string" }),
    swagger_1.ApiResponse({ status: 200, description: "Usuario ha sido eliminado" }),
    swagger_1.ApiResponse({ status: 404, description: "No existe el usuario" }),
    __param(0, common_1.Res()), __param(1, common_1.Query("userID")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('users'),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [user_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=user.controller.js.map