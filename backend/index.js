
import express from "express";
import fs from "fs";
import path from "path";
import cors from "./cors.js";

const app = express(); // Crear una instancia de Express
const PORT = 3001; // Puerto del backend
// Obtener dirname en ES Modules
import { fileURLToPath } from "url"; // Importar fileURLToPath para obtener el directorio del archivo
const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Obtener el directorio del archivo actual
const CLIENTS_PATH = path.join(__dirname, "..", "public", "api", "clients.json"); // Ruta al archivo clients.json

app.use(express.json()); // Middleware para parsear JSON
app.use(cors); // Middleware para habilitar CORS

// Obtener todos los clientes
app.get("/api/clients", (req, res) => {
  fs.readFile(CLIENTS_PATH, "utf8", (err, data) => {
    if (err) {
      console.error("Error leyendo archivo clients.json:", err); // Manejo de errores al leer el archivo
      console.error("Código de error:", err.code); // Código de error del sistema de archivos
      console.error("Mensaje de error:", err.message); // Mensaje de error del sistema de archivos
      return res.status(500).json({ error: "Error leyendo archivo", code: err.code, message: err.message }); // Respuesta de error al cliente
    }
    try {
      const clients = JSON.parse(data); // Parsear el contenido del archivo
      res.json(clients); // Enviar los clientes como respuesta
    } catch (e) {
      console.error("Error parseando clients.json en GET:", e);
      return res.status(500).json({ error: "Error parseando archivo" });
    }
  });
});

// Crear cliente
app.post("/api/clients", (req, res) => {
  console.log("POST /api/clients recibido");
  console.log("Headers:", req.headers);
  console.log("Body recibido:", JSON.stringify(req.body, null, 2));
  fs.readFile(CLIENTS_PATH, "utf8", (err, data) => {
    if (err) {
      console.error("Error leyendo archivo clients.json:", err);
      return res.status(500).json({ error: "Error leyendo archivo" });
    }
    let clients = [];
    try {
      clients = JSON.parse(data);
    } catch (e) {
      console.error("Error parseando clients.json:", e);
      return res.status(500).json({ error: "Error parseando archivo" });
    }
    const newClient = req.body;
    clients.push(newClient);
    fs.writeFile(CLIENTS_PATH, JSON.stringify(clients, null, 2), (err) => {
      if (err) {
        console.error("Error escribiendo archivo clients.json:", err);
        return res.status(500).json({ error: "Error escribiendo archivo" });
      }
      console.log("Cliente guardado correctamente en clients.json");
      res.json(newClient);
    });
  });
});

// Editar cliente
app.put("/api/clients/:id", (req, res) => {
  fs.readFile(CLIENTS_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error leyendo archivo" });
    let clients = JSON.parse(data);
    const clientId = parseInt(req.params.id);
    const idx = clients.findIndex((c) => c.id === clientId);
    if (idx === -1) return res.status(404).json({ error: "Cliente no encontrado" });
    clients[idx] = { ...clients[idx], ...req.body };
    fs.writeFile(CLIENTS_PATH, JSON.stringify(clients, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error escribiendo archivo" });
      res.json(clients[idx]);
    });
  });
});

// Eliminar cliente
app.delete("/api/clients/:id", (req, res) => {
  fs.readFile(CLIENTS_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error leyendo archivo" });
    let clients = JSON.parse(data);
    const clientId = parseInt(req.params.id);
    const newClients = clients.filter((c) => c.id !== clientId);
    if (newClients.length === clients.length)
      return res.status(404).json({ error: "Cliente no encontrado" });
    fs.writeFile(CLIENTS_PATH, JSON.stringify(newClients, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error escribiendo archivo" });
      res.json({ success: true });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Backend escuchando en http://localhost:${PORT}`);
});
