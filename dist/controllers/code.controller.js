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
exports.createCodeVerification = void 0;
const send_email_1 = require("../helpers/send-email");
const send_sms_1 = require("../helpers/send-sms");
const code_model_1 = __importDefault(require("../models/code-model"));
const createCodeVerification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const token = Math.floor(100000 + Math.random() * 900000);
        const tokenObject = {
            code: token
        };
        const code = yield code_model_1.default.create(tokenObject);
        if (body.email) {
            yield (0, send_email_1.sendEmail)(body.email, token.toString());
        }
        if (body.phone_number) {
            yield (0, send_sms_1.sendMessages)(body.phone_number, token.toString());
        }
        res.json({
            code
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }
});
exports.createCodeVerification = createCodeVerification;
//# sourceMappingURL=code.controller.js.map