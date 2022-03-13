"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const code_controller_1 = require("../controllers/code.controller");
const router = (0, express_1.Router)();
router.post('/', code_controller_1.createCodeVerification);
exports.default = router;
//# sourceMappingURL=code.routes.js.map