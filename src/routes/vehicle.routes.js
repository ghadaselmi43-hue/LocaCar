import express from "express";

import {
    getVehicles,
    getVehicleById,
    getVehiclesByBrand
} from "../controllers/vehicleController.js";

const router = express.Router();

router.get("/", (req, res, next) => {
    if (req.query.brand) {
        return getVehiclesByBrand(req, res, next);
    }

    return getVehicles(req, res, next);
});

router.get("/:id", getVehicleById);

export default router;