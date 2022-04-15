import { Router } from "express";
import { createWorker, getWorker, getWorkers, updateWorker, deleteWorker, recuperatePassword, activatedWorker, getWorkersByStablishment } from "../../application/controllers/workers.controller";

const router = Router();

router.get('/', getWorkers);

router.get('/:id', getWorker);

router.get('/workersByID/:id', getWorkersByStablishment);

router.post('/', createWorker);

router.put('/:id', updateWorker);

router.delete('/:id', deleteWorker);

router.put('/', recuperatePassword);

router.put('/activate/:id', activatedWorker);


export default router;