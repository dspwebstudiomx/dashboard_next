import express from "express";
import fs from "fs";
import path from "path";
import cors from "./cors.js";

const app = express();
const PORT = 3001;
const CLIENTS_PATH = path.join(process.cwd(), "../public/api/clients.json");

app.use(express.json());
app.use(cors);

// Obtener todos los clientes
app.get("/api/clients", (req, res) => {
  fs.readFile(CLIENTS_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error leyendo archivo" });
    res.json(JSON.parse(data));
  });
});

// Crear cliente
app.post("/api/clients", (req, res) => {
  fs.readFile(CLIENTS_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error leyendo archivo" });
    const clients = JSON.parse(data);
    const newClient = req.body;
    clients.push(newClient);
    fs.writeFile(CLIENTS_PATH, JSON.stringify(clients, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error escribiendo archivo" });
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
