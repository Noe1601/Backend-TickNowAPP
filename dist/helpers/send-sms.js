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
exports.sendMessages = void 0;
const twilio_1 = __importDefault(require("twilio"));
const sendMessages = (phoneNumber, code) => __awaiter(void 0, void 0, void 0, function* () {
    const client = (0, twilio_1.default)(process.env.SSI_AUTH, process.env.AUTH_SMS);
    yield client.messages.create({
        to: phoneNumber,
        from: process.env.TWILIO_PHONE_NUMBER,
        body: `
            Your verification code is: ${code}
        `
    });
});
exports.sendMessages = sendMessages;
//# sourceMappingURL=send-sms.js.map