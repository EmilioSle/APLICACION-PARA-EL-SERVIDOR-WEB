// 🌱 Ejemplo de Proyecto: Servicio de Sensores – Agrotech

// 📌 Variables
const sistema: string = "Sensor Service - Agrotech";
let totalSensores: number = 3;

console.log("📢 Sistema iniciado:", sistema);
console.log("🔢 Sensores iniciales:", totalSensores);

// 📌 Interfaces
interface Sensor {
  id: number;
  tipo: string;
  ubicacion: string;
  valor: number;
  unidad: string;
  activo: boolean;
}

// 📌 Objetos
const sensor1: Sensor = {
  id: 1,
  tipo: "Humedad",
  ubicacion: "Lote A",
  valor: 35.7,
  unidad: "%",
  activo: true
};

const sensor2: Sensor = {
  id: 2,
  tipo: "Temperatura",
  ubicacion: "Lote B",
  valor: 22.4,
  unidad: "°C",
  activo: true
};

console.log("\n📦 Sensores definidos:");
console.log(sensor1);
console.log(sensor2);

// 📌 Arreglo de Objetos
const sensores: Sensor[] = [sensor1, sensor2];
console.log("\n📋 Arreglo de sensores actual:", sensores);

// 📌 Funciones
function agregarSensor(id: number, tipo: string, ubicacion: string, valor: number, unidad: string): Sensor {
  const nuevoSensor: Sensor = { id, tipo, ubicacion, valor, unidad, activo: true };
  console.log(`✅ Sensor agregado: ${tipo} en ${ubicacion}`);
  return nuevoSensor;
}

function imprimirSensor(sensor: Sensor): void {
  const estado = sensor.activo ? "Activo" : "Inactivo";
  console.log(`📍 Sensor ${sensor.tipo} en ${sensor.ubicacion}: ${sensor.valor}${sensor.unidad} [${estado}]`);
}

// 📌 Spread y Rest
const nuevosSensores: Sensor[] = [
  agregarSensor(3, "Humedad", "Lote C", 40.2, "%"),
  agregarSensor(4, "Temperatura", "Lote D", 18.9, "°C")
];

const todosSensores: Sensor[] = [...sensores, ...nuevosSensores];
console.log("\n🧩 Sensores combinados (spread):", todosSensores);

// Función que usa Rest
function registrarSensores(...sensores: Sensor[]) {
  console.log("\n📥 Registro de sensores:");
  sensores.forEach(s => console.log(`✔️ Registrado: ${s.tipo} en ${s.ubicacion}`));
}

registrarSensores(...todosSensores);

// 📌 Callbacks
function procesarSensor(sensor: Sensor, callback: (s: Sensor) => void): void {
  console.log("\n⚙️ Procesando sensor con callback...");
  callback(sensor);
}

procesarSensor(sensor1, imprimirSensor);

// 📌 Promises
function guardarSensor(sensor: Sensor): Promise<string> {
  console.log(`💾 Guardando sensor ${sensor.id}...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`📂 Sensor ${sensor.id} guardado correctamente.`);
    }, 1000);
  });
}

// 📌 Async/Await
async function iniciar() {
  console.log("\n🚀 Iniciando proceso de guardado...");
  for (const sensor of todosSensores) {
    const mensaje = await guardarSensor(sensor);
    console.log(mensaje);
  }
  console.log("\n✅ Todos los sensores han sido guardados.");
}

// 🟢 Ejecutar
iniciar();
