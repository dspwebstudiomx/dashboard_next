import axios from "axios";
import { useState } from "react";

export function useClients() {
  const [clients, setClients] = useState([]);

  function getClients() {
    axios
      .get("api/clients.json")
      .then((response) => {
        console.log(response.data);
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los clientes:", error);
      });
  }

  return { clients, getClients };
}
