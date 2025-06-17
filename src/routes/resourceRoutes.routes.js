// /routes/resourceRoutes.js
import express from 'express';
import ResourceController from '../controllers/Resource.controller.js';

const router = express.Router();

router.get('/', ResourceController.getAll);
router.get('/type/:type', ResourceController.getByType);
router.get('/localization/:localization', ResourceController.getByLocalization);
router.get('/city/:city', ResourceController.getByCity);
router.get('/:city/type/:type', ResourceController.getByCityAndType);
router.get('/:city/localization/:localization', ResourceController.getByCityAndLocalization);
router.get('/:city/type/:type/localization/:localization', ResourceController.getByCityAndTypeAndLocalization);

export default router;
