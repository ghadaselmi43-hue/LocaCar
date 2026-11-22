
import Vehicle from "../models/Vehicle.js";

// GET /api/vehicles
export const getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();

        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /api/vehicles/:id
export const getVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id)
            .populate("agency");

        if (!vehicle) {
            return res.status(404).json({
                message: "Véhicule introuvable"
            });
        }

        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /api/vehicles?brand=Toyota
export const getVehiclesByBrand = async (req, res) => {
    try {
        const vehicles = await Vehicle.find({
            brand: new RegExp(`^${req.query.brand}$`, "i")
        });

        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};