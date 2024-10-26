const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Vehicle = require('./models/Vehicle'); 
const Record = require('./models/Record');


const app = express(); 

app.use(cors({
   origin: 'http://localhost:3000'
}));

const port = 4000;

const vehicleRoutes = require('./routes/vehicleRoutes');
const reportRoutes = require('./routes/reportRoutes');

mongoose.connect('mongodb+srv://josechairezis:2hKE0YJuFqKFqYSQ@cluster0.7adm4.mongodb.net/estacionamiento', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
.then(() => console.log("Conexión a MongoDB exitosa"))
.catch((err) => console.error("Error de conexión a MongoDB:", err));

app.use(express.json());
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/reports', reportRoutes);


app.get('/api/records/latest-exit', async (req, res) => {
   try {
      
      const latestRecord = await Record.findOne().sort({ exitTime: -1 }).populate('vehicle');
      
      if (!latestRecord) {
         return res.status(404).json({ message: "No se encontró un registro de salida" });
      }

      res.json(latestRecord);
   } catch (error) {
      console.error("Error al obtener el último registro de salida:", error);
      res.status(500).json({ message: "Error al obtener el último registro de salida" });
   }
});

app.listen(port, () => {
   console.log(`Servidor corriendo en http://localhost:${port}`);
});