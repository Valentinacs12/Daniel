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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const user_service_1 = require("../users/user.service");
const user_dto_1 = require("../users/dto/user.dto");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async login(body) {
        const user = await this.authService.validateUser(body.email, body.password);
        if (user) {
            return await this.authService.login(user);
        }
        throw new common_1.UnprocessableEntityException('Wrong password');
    }
    async getProfile(req, res) {
        const user = await this.userService.getUserByEmail(req.user.email);
        if (user)
            return res.status(common_1.HttpStatus.ACCEPTED).json({
                user,
            });
        throw new common_1.NotFoundException('User not found');
    }
};
__decorate([
    common_1.Post('login'),
    swagger_1.ApiBody({ description: "Logeo de usuario previamente registrado", type: user_dto_1.LoginDTO }),
    swagger_1.ApiResponse({ status: 201, description: "Creado!", type: user_dto_1.TokenDTO }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Get('profile'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiResponse({ description: "Devuleve el usuario logeado identificado con el token", status: 200, type: user_dto_1.UserextendsDTO }),
    __param(0, common_1.Request()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
AuthController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('Atentificación'),
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UsersService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map