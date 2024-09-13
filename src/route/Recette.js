import { Router } from 'express';
const router = Router();
import { getRecettes, createRecette, updateRecette, deleteRecette } from '../controllers/recette';

router.get('/recettes', getRecettes);


router.post('/recettes', createRecette);


router.put('/recettes/:id', updateRecette);


router.delete('/recettes/:id', deleteRecette);

export default router;
