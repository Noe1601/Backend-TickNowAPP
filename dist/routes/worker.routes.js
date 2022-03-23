"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workers_controller_1 = require("../controllers/workers.controller");
const router = (0, express_1.Router)();
router.get('/', workers_controller_1.getWorkers);
router.get('/:id', workers_controller_1.getWorker);
router.get('/workersByID/:id', workers_controller_1.getWorkersByStablishment);
router.post('/', workers_controller_1.createWorker);
router.put('/:id', workers_controller_1.updateWorker);
router.delete('/:id', workers_controller_1.deleteWorker);
router.put('/', workers_controller_1.recuperatePassword);
router.put('/activate/:id', workers_controller_1.activatedWorker);
exports.default = router;
//# sourceMappingURL=worker.routes.js.map