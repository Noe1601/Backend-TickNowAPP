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
exports.activatedStablishment = exports.deleteStableshiment = exports.updateStablishment = exports.createStablishment = exports.getStablishment = exports.getStablisments = void 0;
const code_model_1 = __importDefault(require("../models/code-model"));
const stablishment_model_1 = __importDefault(require("../models/stablishment-model"));
const getStablisments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stablisments = yield stablishment_model_1.default.findAll({
        where: {
            state: 1
        }
    });
    res.json({
        stablisments
    });
});
exports.getStablisments = getStablisments;
const getStablishment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const stablishment = yield stablishment_model_1.default.findByPk(id);
    if (stablishment) {
        res.json({
            stablishment
        });
    }
    else {
        res.status(404).json({
            ok: false,
            message: `Not exists stablishment with ${id} number ID`
        });
    }
});
exports.getStablishment = getStablishment;
const createStablishment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const emailExists = yield stablishment_model_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (emailExists) {
            return res.status(400).json({
                message: `Already exists an stablishment with email ${body.email}, try with another one`
            });
        }
        if (body.code_confirmation == null) {
            return res.status(400).json({
                message: 'The token verification is required'
            });
        }
        const verifyToken = yield code_model_1.default.findOne({
            where: {
                code: body.code_confirmation
            }
        });
        if (!verifyToken) {
            return res.status(404).json({
                ok: false,
                message: 'This token is invalid, try again.'
            });
        }
        const stablisment = yield stablishment_model_1.default.create(body);
        res.json({
            stablisment,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }
});
exports.createStablishment = createStablishment;
const updateStablishment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const stablishment = yield stablishment_model_1.default.findByPk(id);
        if (!stablishment) {
            return res.status(404).json({
                message: `Not exists an user with this ID`
            });
        }
        yield stablishment.update(body);
        res.json(stablishment);
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.updateStablishment = updateStablishment;
const deleteStableshiment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const stablishment = yield stablishment_model_1.default.findByPk(id);
    if (!stablishment) {
        return res.status(404).json({
            message: `Not exists an stablishment with this ID`
        });
    }
    yield stablishment.update({ state: false });
    res.json({
        message: `Stablishment deleted`
    });
});
exports.deleteStableshiment = deleteStableshiment;
const activatedStablishment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const stablishment = yield stablishment_model_1.default.findByPk(id);
        if (!stablishment) {
            return res.status(404).json({
                message: `Not exists an user with this ID`
            });
        }
        yield stablishment.update(body);
        res.json({
            ok: true,
            message: 'Stablishment activated'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.activatedStablishment = activatedStablishment;
//# sourceMappingURL=stablishment.controller.js.map