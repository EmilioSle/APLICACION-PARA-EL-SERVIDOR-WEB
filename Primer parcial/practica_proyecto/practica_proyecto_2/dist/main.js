"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
async function main() {
    try {
        await data_source_1.AppDataSource.initialize();
        console.log("Conexión a la base de datos MySQL establecida.");
        // Aquí puedes iniciar la lógica, CRUD o lo que necesites.
    }
    catch (error) {
        console.error("Error conectando a la base de datos:", error);
    }
}
main();
