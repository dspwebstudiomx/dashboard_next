import cors from "cors";

export default cors({
  origin: "http://localhost:3000", // Cambia el puerto si tu frontend usa otro
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
});
