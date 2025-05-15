import "reflect-metadata";
import { DataSource } from "typeorm";
import { SensorEntity } from "./models/SensorEntity";

// Configuración de la base de datos
const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",         
  password: "12345",             
  database: "agrotech_db",  
  entities: [SensorEntity],
  synchronize: true,        
  logging: false,
});

async function seed() {
  try {
    await AppDataSource.initialize();
    console.log("Conexión exitosa a la base de datos");

    const sensorRepo = AppDataSource.getRepository(SensorEntity);

    const sensores = [
      {
        name: "Sensor A",
        tipo: "Humedad",
        ubicacion: "Campo 1",
        valor: 25.5,
        unidad: "%",
      },
      {
        name: "Sensor B",
        tipo: "Temperatura",
        ubicacion: "Campo 2",
        valor: 30.1,
        unidad: "°C",
      },
      {
        name: "Sensor C",
        tipo: "PH",
        ubicacion: "Campo 3",
        valor: 6.8,
        unidad: "pH",
      },
      {
        name: "Sensor D",
        tipo: "Luz",
        ubicacion: "Invernadero 1",
        valor: 800,
        unidad: "lux",
      },
      {
        name: "Sensor E",
        tipo: "CO2",
        ubicacion: "Invernadero 2",
        valor: 400,
        unidad: "ppm",
      },
    ];

    for (const s of sensores) {
      const sensor = sensorRepo.create(s);
      await sensorRepo.save(sensor);
    }

    console.log("Se insertaron sensores de prueba correctamente");
    await AppDataSource.destroy();
  } catch (err) {
    console.error("Error durante el seed:", err);
  }
}

seed();
