"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    cellphone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    rol: { type: String, required: true },
    password: String,
    createAt: {
        type: Date,
        default: Date.now()
    },
    organization: {
        ref: "Organization",
        type: mongoose_1.Schema.Types.ObjectId,
        default: null,
    },
    notifications: [{
            typeMsg: String,
            message: String,
            createAt: { type: Date, default: Date.now() }
        }],
}, {
    versionKey: false
});
//# sourceMappingURL=user.schema.js.map