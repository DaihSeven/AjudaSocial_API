import express from 'express';
import RecursoController from '../controllers/RecursoController.js';

const router = express.Router();

router.get('/', RecursoController.getAll);
router.get('/tipo/:tipo', RecursoController.getByTipo);
router.get('/localizacao/:localizacao', RecursoController.getByLocalizacao);
router.get('/cidade/:cidade', RecursoController.getByCidade);
router.get('/:cidade/:tipo', RecursoController.getByCidadeETipo);
router.get('/:cidade/localizacao/:localizacao', RecursoController.getByCidadeELocalizacao);
router.get('/:cidade/:tipo/:localizacao', RecursoController.getByCidadeETipoELocalizacao);

export default router;