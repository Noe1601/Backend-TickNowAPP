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
exports.activatedWorker = exports.recuperatePassword = exports.deleteWorker = exports.updateWorker = exports.createWorker = exports.getWorkersByStablishment = exports.getWorker = exports.getWorkers = void 0;
const code_model_1 = __importDefault(require("../models/code-model"));
const workers_model_1 = __importDefault(require("../models/workers-model"));
const getWorkers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const workers = yield workers_model_1.default.findAll({
        where: {
            state: 1
        }
    });
    res.json({
        workers
    });
});
exports.getWorkers = getWorkers;
const getWorker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const worker = yield workers_model_1.default.findByPk(id);
    if (worker) {
        res.json({
            worker
        });
    }
    else {
        res.status(404).json({
            ok: false,
            message: `Not exists worker with ${id} number ID`
        });
    }
});
exports.getWorker = getWorker;
const getWorkersByStablishment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const workers = yield workers_model_1.default.findAll({
            where: {
                stablisment_id: id,
                state: 1
            }
        });
        res.json({
            workers
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        });
    }
});
exports.getWorkersByStablishment = getWorkersByStablishment;
const createWorker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const emailExists = yield workers_model_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (emailExists) {
            return res.status(400).json({
                message: `Already exists an worker with email ${body.email}, try with another one`
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
        const worker = yield workers_model_1.default.create(body);
        res.json({
            worker
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }
});
exports.createWorker = createWorker;
const updateWorker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const worker = yield workers_model_1.default.findByPk(id);
        if (!worker) {
            return res.status(404).json({
                message: `Not exists an worker with this ID`
            });
        }
        yield worker.update(body);
        res.json(worker);
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.updateWorker = updateWorker;
const deleteWorker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const worker = yield workers_model_1.default.findByPk(id);
    if (!worker) {
        return res.status(404).json({
            message: `Not exists an user with this ID`
        });
    }
    yield worker.update({ state: false });
    res.json({
        message: `Worker deleted`
    });
});
exports.deleteWorker = deleteWorker;
const recuperatePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const worker = yield workers_model_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (!worker) {
            return res.status(404).json({
                message: `This email is invalid`
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
        yield worker.update(body);
        res.json({
            ok: true,
            message: 'Password updated'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.recuperatePassword = recuperatePassword;
const activatedWorker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const worker = yield workers_model_1.default.findByPk(id);
        if (!worker) {
            return res.status(404).json({
                message: `Not exists an worker with this ID`
            });
        }
        yield worker.update(body);
        res.json({
            ok: true,
            message: 'Worker activated'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.activatedWorker = activatedWorker;
//# sourceMappingURL=workers.controller.js.map