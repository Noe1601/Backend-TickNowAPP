"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid
        };
        jsonwebtoken_1.default.sign(payload, 'NEMH101620182908927319DCKEJjeebdgedgh', {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('JWT Failed');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateJWT = generateJWT;
//# sourceMappingURL=jwt.js.map