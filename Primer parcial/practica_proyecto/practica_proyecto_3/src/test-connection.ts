import { Client } from "pg";

async function testConnection() {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "sensorcapas",
    password: "hola12345",
    port: 5433,
  });

  try {
    await client.connect();
    console.log("Conectado correctamente");
  } catch (error) {
    console.error("Error al conectar:", error);
  } finally {
    await client.end();
  }
}

testConnection();


