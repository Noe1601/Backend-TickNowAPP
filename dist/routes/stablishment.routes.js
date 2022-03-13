"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stablishment_controller_1 = require("../controllers/stablishment.controller");
const router = (0, express_1.Router)();
router.get('/', stablishment_controller_1.getStablisments);
router.get('/:id', stablishment_controller_1.getStablishment);
router.post('', stablishment_controller_1.createStablishment);
router.put('/:id', stablishment_controller_1.updateStablishment);
router.put('/activate/:id', stablishment_controller_1.activatedStablishment);
router.delete('/:id', stablishment_controller_1.deleteStableshiment);
exports.default = router;
//# sourceMappingURL=stablishment.routes.js.map