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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const bcryptjs_1 = require("bcryptjs");
const mailer_1 = require("@nestjs-modules/mailer");
const constats_1 = require("../constats");
function encriptPassword(password) {
    const salt = bcryptjs_1.genSaltSync(10);
    return bcryptjs_1.hashSync(password, salt);
}
let UsersService = class UsersService {
    constructor(userModel, mailerService) {
        this.userModel = userModel;
        this.mailerService = mailerService;
    }
    async getUsers() {
        const users = await this.userModel.find();
        return users;
    }
    async getOrganization(userID) {
        const organzation = await (await this.userModel.findById(userID)).populate("organization");
        return organzation;
    }
    async getUser(userID) {
        const user = await this.userModel.findById(userID);
        return user;
    }
    async sendEmail(email) {
        const user = await this.getUserByEmail(email);
        if (user) {
            return false;
        }
        const result = await this.mailerService
            .sendMail({
            to: email,
            from: "drive.api.co@gmail.com",
            subject: `Registrate en nuestra pagina | app`,
            text: `Visitanos en ${constats_1.default.mainUrl}`,
            html: `
              <p>
              visitanos!
              <a  href=${constats_1.default.mainUrl}> aqui  </a> 
              </p>
              `,
        }).then(res => {
            return true;
        }).catch(error => { console.log("not ffatal", { error }); return false; });
        return result;
    }
    async getUserByEmail(email) {
        const user = await this.userModel.findOne({ email: email });
        return user;
    }
    async createUser(userBody) {
        if (await this.userModel.findOne({ 'email': userBody['email'] })) {
            throw new common_1.BadRequestException(`email ${userBody['email']} exist in the db`);
        }
        userBody.password = encriptPassword(userBody.password);
        const user = new this.userModel(userBody);
        return await user.save();
    }
    async deleteUser(userID) {
        return this.userModel.findByIdAndDelete(userID);
    }
    async updateUser(userID, body) {
        const updatedUser = await this.userModel.findByIdAndUpdate(userID, body, { new: true });
        return updatedUser;
    }
    async updateUserPatch(userID, body) {
        const updatedUser = await this.userModel.findByIdAndUpdate(userID, { $set: body }, { new: true });
        return updatedUser;
    }
    async updateUserByEmail(email, body) {
        const updatedUser = await this.userModel.findOneAndUpdate({ email: email }, body, { new: true });
        return updatedUser;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel("User")),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mailer_1.MailerService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map