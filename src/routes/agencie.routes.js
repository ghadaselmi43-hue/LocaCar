
import express from 'express';
import * as agencieController from '../controller/agencie.controller.js';

const router = express.Router();

router.get('/', agencieController.getAllAgencies);
router.get('/:id', agencieController.getAgencyById);
router.post('/', agencieController.createAgency);
router.put('/:id', agencieController.updateAgency);
router.patch('/:id', agencieController.patchAgency);
router.delete('/:id', agencieController.deleteAgency);

export default router;