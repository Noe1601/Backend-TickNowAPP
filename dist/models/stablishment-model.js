"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Stablishment = connection_1.default.define('Stablishment', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING
    },
    direction: {
        type: sequelize_1.DataTypes.STRING
    },
    image: {
        type: sequelize_1.DataTypes.BLOB
    },
    user_role: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    code_confirmation: {
        type: sequelize_1.DataTypes.STRING
    },
    account_confirmed: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Stablishment;
//# sourceMappingURL=stablishment-model.js.map