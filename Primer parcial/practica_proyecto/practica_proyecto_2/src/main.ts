import { AppDataSource } from "./data-source";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Conexión a la base de datos MySQL establecida.");
    
    // Aquí puedes iniciar la lógica, CRUD o lo que necesites.

  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
  }
}

main();
