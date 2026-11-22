
import agencie from '../models/agencie.model.js';

export const getAllAgencies = async () => agencie.findAll();

export const getAgencyById = async (id) => {
    const agency = await agencie.findByPk(id);
    if (!agency) throw new Error('Agence introuvable');
    return agency;
};

export const createAgency = async (data) => agencie.create(data);

export const updateAgency = async (id, data) => {
    const agency = await agencie.updateById(id, data);
    if (!agency) throw new Error('Agence introuvable');
    return agency;
};

export const deleteAgency = async (id) => {
    const deleted = await agencie.deleteById(id);
    if (!deleted) throw new Error('Agence introuvable');
};
