
/*
  * Rutas para manejar clientes
  * Utiliza un archivo JSON para almacenar los datos de los clientes
  * Implementa operaciones CRUD: obtener, crear, editar y eliminar clientes
  * @file clients.js
  * @author Daniel Pérez
  * @description Este archivo define las rutas para manejar clientes en el backend de la aplicación.
  * Utiliza un archivo JSON para almacenar los datos de los clientes y permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre ellos.
*/

import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router(); // Crear un router de Express
const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Obtener el directorio del archivo actual
const CLIENTS_PATH = path.join(__dirname, "..", "..", "public", "api", "clients.json"); // Ruta al archivo de clientes

// Obtener todos los clientes
router.get("/", (req, res) => {
  // Leer el archivo de clientes
  fs.readFile(CLIENTS_PATH, "utf8", (err, data) => {
    // Manejo de errores al leer el archivo
    if (err) {
      return res.status(500).json({ error: "Error leyendo archivo" }); // Manejo de errores
    }
    // Intentar parsear el JSON
    try {
      const clients = JSON.parse(data); // Parsear JSON
      res.json(clients); // Respuesta con los clientes
    }
    // Si hay un error al parsear, retornar error
    catch {
      return res.status(500).json({ error: "Error parseando archivo" }); // Manejo de errores
    }
  });
});

// Crear cliente
router.post("/", (req, res) => {
  // Leer el archivo de clientes
  fs.readFile(CLIENTS_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error leyendo archivo" }); // Manejo de errores
    let clients = []; // Inicializar array de clientes
    // Si el archivo no está vacío, parsear JSON
    try {
      clients = JSON.parse(data); // Parsear JSON
    }
    // Si hay un error al parsear, retornar error
    catch {
      return res.status(500).json({ error: "Error parseando archivo" }); // Manejo de errores
    }
    const newClient = req.body; // Obtener el nuevo cliente del cuerpo de la solicitud
    clients.push(newClient); // Agregar el nuevo cliente al array
    // Asignar un ID al nuevo cliente
    fs.writeFile(CLIENTS_PATH, JSON.stringify(clients, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error escribiendo archivo" }); // Manejo de errores
      res.json(newClient); // Respuesta con el nuevo cliente
    });
  });
});

// Editar cliente
router.put("/:id", (req, res) => {
  // Leer el archivo de clientes
  fs.readFile(CLIENTS_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error leyendo archivo" }); // Manejo de errores
    let clients = JSON.parse(data); // Parsear JSON
    const clientId = parseInt(req.params.id); // Obtener ID del cliente
    const idx = clients.findIndex((c) => c.id === clientId); // Buscar índice del cliente
    if (idx === -1) return res.status(404).json({ error: "Cliente no encontrado" }); // Si no se encontró el cliente
    clients[idx] = { ...clients[idx], ...req.body }; // Actualizar cliente
    // Escribir el cliente actualizado en el archivo
    fs.writeFile(CLIENTS_PATH, JSON.stringify(clients, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error escribiendo archivo" }); // Manejo de errores
      res.json(clients[idx]); // Respuesta con el cliente actualizado
    });
  });
});

// Eliminar cliente
router.delete("/:id", (req, res) => {
  fs.readFile(CLIENTS_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error leyendo archivo" }); // Manejo de errores
    let clients = JSON.parse(data); // Parsear JSON
    const clientId = parseInt(req.params.id); // Obtener ID del cliente
    const newClients = clients.filter((c) => c.id !== clientId); // Filtrar clientes
    if (newClients.length === clients.length) // Verificar si el cliente existe
      return res.status(404).json({ error: "Cliente no encontrado" }); // Si no se encontró el cliente
    // Escribir el nuevo array de clientes en el archivo
    fs.writeFile(CLIENTS_PATH, JSON.stringify(newClients, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error escribiendo archivo" }); // Manejo de errores
      res.json({ success: true }); // Respuesta de éxito
    });
  });
});

export default router;
