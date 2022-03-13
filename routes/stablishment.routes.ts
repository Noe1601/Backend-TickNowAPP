import { Router } from 'express';
import { activatedStablishment, createStablishment, deleteStableshiment, getStablishment, getStablisments, updateStablishment } from '../controllers/stablishment.controller';

const router = Router();

router.get('/', getStablisments);
router.get('/:id', getStablishment);
router.post('',createStablishment);
router.put('/:id', updateStablishment);
router.put('/activate/:id', activatedStablishment);
router.delete('/:id', deleteStableshiment);

export default router;