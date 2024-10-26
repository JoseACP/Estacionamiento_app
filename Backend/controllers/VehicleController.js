const Vehicle = require('../models/Vehicle');
const Record = require('../models/Record');

// Registrar entrada de un vehículo
const registerEntry = async (req, res) => {
   const { plate, type } = req.body;
   const entryTime = new Date();

   try {
      let vehicle = await Vehicle.findOne({ plate });
      if (!vehicle) {
         vehicle = new Vehicle({ plate, type });
         await vehicle.save();
      }

      const record = new Record({ vehicle: vehicle._id, entryTime });
      await record.save();

      res.status(201).json({ message: "Entrada registrada", record });
   } catch (error) {
      res.status(500).json({ error: "Error registrando la entrada" });
   }
};

// Registrar salida de un vehículo y calcular el cobro
const registerExit = async (req, res) => {
   const { plate } = req.body;
   const exitTime = new Date();

   try {
      const vehicle = await Vehicle.findOne({ plate });
      if (!vehicle) {
         return res.status(404).json({ message: "Vehículo no encontrado" });
      }

      const record = await Record.findOne({ vehicle: vehicle._id, exitTime: null });
      if (record) {
         record.exitTime = exitTime;
         record.totalTime = (exitTime - record.entryTime) / (1000 * 60); // Tiempo en minutos

         // Calcular monto según el tipo de vehículo
         switch (vehicle.type) {
            case 'Residente':
               record.amount = record.totalTime * 1;
               break;
            case 'No Residente':
               record.amount = record.totalTime * 3;
               break;
            default:
               record.amount = 0;
         }

         await record.save();
         res.status(200).json({ message: "Salida registrada", record });
      } else {
         res.status(404).json({ message: "Registro de entrada no encontrado" });
      }
   } catch (error) {
      res.status(500).json({ error: "Error registrando la salida" });
   }
};

module.exports = { registerEntry, registerExit };
