"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Worker = connection_1.default.define('Worker', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    lastname: {
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
    face_id: {
        type: sequelize_1.DataTypes.BOOLEAN
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
    },
    stablisment_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Worker;
//# sourceMappingURL=workers-model.js.map