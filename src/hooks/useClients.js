import axios from "axios";
import { useState } from "react";

export function useClients() {
  const [clients, setClients] = useState([]);

  function getClients() {
    axios
      .get("http://localhost:3001/api/clients")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los clientes:", error);
      });
  }

  // Crear, editar y eliminar clientes

  // Crear cliente
  function handleCreateClient(client) {
    return axios
      .post("http://localhost:3001/api/clients", client)
      .then((response) => {
        // Refresca la lista desde el backend
        getClients();
        return response.data;
      })
      .catch((error) => {
        console.error("Error al crear el cliente:", error);
        throw error;
      });
  }
  // Editar cliente
  function handleEditClient(clientId, updatedClient) {
    axios
      .put(`http://localhost:3001/api/clients/${clientId}`, updatedClient)
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
      .delete(`http://localhost:3001/api/clients/${clientId}`)
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
