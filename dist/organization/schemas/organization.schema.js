"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgnizationSchema = void 0;
const mongoose_1 = require("mongoose");
exports.OrgnizationSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    createAt: {
        type: Date,
        default: Date.now()
    },
    users: [{
            ref: "User",
            type: mongoose_1.Schema.Types.ObjectId,
        }]
}, {
    versionKey: false
});
//# sourceMappingURL=organization.schema.js.map