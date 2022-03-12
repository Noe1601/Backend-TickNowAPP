"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../models/user-model"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.findAll();
    res.json({
        users
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_model_1.default.findByPk(id);
    if (user) {
        res.json({
            user
        });
    }
    else {
        res.status(404).json({
            ok: false,
            message: `Not exists user with ${id} number ID`
        });
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const emailExists = yield user_model_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (emailExists) {
            return res.status(400).json({
                message: `Already exists an user with email ${body.email}, try with another one`
            });
        }
        const user = yield user_model_1.default.create(body);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const user = yield user_model_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                message: `Not exists an user with this ID`
            });
        }
        yield user.update(body);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_model_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            message: `Not exists an user with this ID`
        });
    }
    yield user.update({ state: false });
    res.json({
        message: `User deleted`
    });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map