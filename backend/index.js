import express from "express";
// import fs from "fs";
// import path from "path";

import cors from "./cors.js";
import clientsRouter from "./routes/clients.js";
import clientTasksRouter from "./routes/clientTasks.js";
import projectsRouter from "./routes/projects.js";
import projectTasksRouter from "./routes/projectTasks.js";
import uploadRouter from "./upload.js";

const app = express(); // Crear una instancia de Express
const PORT = 3001; // Puerto del backend

// Obtener dirname en ES Modules (si lo necesitas para otras rutas, descomenta)
// import { fileURLToPath } from "url";
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json()); // Middleware para parsear JSON
app.use(cors); // Middleware para habilitar CORS
app.use("/", uploadRouter);
app.use("/uploads", express.static(path.join(__dirname, "..", "public", "uploads")));


// Modularización de rutas
app.use("/api/clients", clientsRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/project-tasks", projectTasksRouter);
app.use("/api/client-tasks", clientTasksRouter);

app.listen(PORT, () => {
  console.log(`Backend escuchando en http://localhost:${PORT}`);
});
