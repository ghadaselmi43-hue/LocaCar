import * as agencieService from '../services/agencie.services.js';

export const getAllAgencies = async (req, res) => {
    try {
        const agencies = await agencieService.getAllAgencies();
        res.status(200).json(agencies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAgencyById = async (req, res) => {
    try {
        const agency = await agencieService.getAgencyById(req.params.id);
        res.status(200).json(agency);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createAgency = async (req, res) => {
    try {
        const agency = await agencieService.createAgency(req.body);
        res.status(201).json(agency);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateAgency = async (req, res) => {
    try {
        const agency = await agencieService.updateAgency(req.params.id, req.body);
        res.status(200).json(agency);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const patchAgency = updateAgency;

export const deleteAgency = async (req, res) => {
    try {
        await agencieService.deleteAgency(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};