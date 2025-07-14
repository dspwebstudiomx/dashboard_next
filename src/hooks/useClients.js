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

  // Crear, editar y eliminar clientes

  // Crear cliente
  function handleCreateClient(client) {
    axios
      .post("api/clients.json", client)
      .then((response) => {
        setClients((prevClients) => [...prevClients, response.data]);
      })
      .catch((error) => {
        console.error("Error al crear el cliente:", error);
      });
  }
  // Editar cliente
  function handleEditClient(clientId, updatedClient) {
    axios
      .put(`api/clients/${clientId}.json`, updatedClient)
      .then((response) => {
        setClients((prevClients) =>
          prevClients.map((client) =>
            client.id === clientId ? response.data : client
          )
        );
      })
      .catch((error) => {
        console.error("Error al editar el cliente:", error);
      });
  }
  // Eliminar cliente
  function handleDeleteClient(clientId) {
    axios
      .delete(`api/clients/${clientId}.json`)
      .then(() => {
        setClients((prevClients) =>
          prevClients.filter((client) => client.id !== clientId)
        );
      })
      .catch((error) => {
        console.error("Error al eliminar el cliente:", error);
      });
  }

  return { clients, getClients, handleCreateClient, handleEditClient, handleDeleteClient };
}
