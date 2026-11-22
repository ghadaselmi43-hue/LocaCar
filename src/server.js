import express from 'express';
import mongoose from "mongoose";

import agencieRoutes from './routes/agencie.routes.js';

const app = express();
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(express.json());

// Routes
app.use('/api/agencies', agencieRoutes);
app.use("/api/vehicles", vehicleRoutes);


app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur notre API' });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});