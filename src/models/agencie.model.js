let nextId = 1;
const agencies = new Map();

export default {
    findAll: async () => Array.from(agencies.values()),
    findByPk: async (id) => agencies.get(String(id)) ?? null,
    create: async (data) => {
        const agency = { id: nextId++, ...data };
        agencies.set(String(agency.id), agency);
        return agency;
    },
    updateById: async (id, data) => {
        const agency = agencies.get(String(id));
        if (!agency) return null;
        const updated = { ...agency, ...data, id: agency.id };
        agencies.set(String(id), updated);
        return updated;
    },
    deleteById: async (id) => agencies.delete(String(id)),
};
