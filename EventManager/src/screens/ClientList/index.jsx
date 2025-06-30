import React, { use, useEffect, useState } from 'react';
import { Container, Table, Button, Modal, Badge, Pagination } from 'react-bootstrap';
import Layout from '../../Layout';
import { getAllRegisterByOrganizer } from '../../services/registrationServices';
import { useAuth } from '../../auth/authProvider';

const ClientList = () => {
  const {user}=useAuth();
  const [page, setPage] = useState(1); // Current page number
  const [limit, setLimit] = useState(10); // Number of items per page
  const [clients, setClients] = useState([]); // State to hold clients data

  const [selectedClient, setSelectedClient] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (client) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedClient(null);
    setShowModal(false);
  };
  useEffect(() => {
    getAllRegisterByOrganizer(user._id ,page, limit)
      .then((response) => {
        console.log('Liste des clients récupérée avec succès', response);
        setClients(response); // Mettre à jour l'état avec la liste des clients
        // Vous pouvez mettre à jour l'état des clients ici si nécessaire
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération de la liste des clients', error);
      }); 
  }, [user,page,limit]);

  let active =  clients.currentPage || 1; // Page active, par défaut 1 si non défini
  let items = [];
  for (let number = 1; number <=  clients.totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={()=>setPage(number)} className="bg-dark text-light">
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Layout>
        <Container className="mt-5">
            <h2 className="mb-4 text-white text-start">Liste des clients</h2>
            <div className="bg-dark p-3 rounded mb-4">
                {clients && <Table   hover className="shadow-sm text-white table-striped table-dark rounded ">
                    <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Événements</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients?.register?.map((client, index) => (
                        <tr key={client?.user._id}>
                        <td>{index + 1 }</td>
                        <td>{client?.user?.name}</td>
                        <td>{client?.user?.email}</td>
                        <td>{client?.user?.phone}</td>
                        {/* <td>
                            <Badge bg={
                            client.status === "Payé" ? "success" :
                            client.status === "Présent" ? "info" :
                            "warning"
                            }>
                            {client.status}
                            </Badge>
                        </td> */}
                        <td >{client?.events.map(event => event.title).join(', ')}</td>
                        <td>
                            <Button
                            size="sm"
                            variant="info"
                            onClick={() => openModal(client)}
                            >
                            Voir
                            </Button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>}
                <div className='d-flex justify-content-center'> 
                    <Pagination className='bg-dark' >{items}</Pagination>
                </div>
            </div>
        {/* Modal - Détails client */}
        <Modal show={showModal} onHide={closeModal} centered>
            <Modal.Header closeButton>
            <Modal.Title>Détails - {selectedClient?.user.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p><strong>Email :</strong> {selectedClient?.user.email}</p>
            <p><strong>Téléphone :</strong> {selectedClient?.user.phone}</p>
            {/* <p><strong>Statut :</strong> <Badge bg="secondary">{selectedClient?.status}</Badge></p> */}
            <p><strong>Événements :</strong></p>
            <ul>
                {selectedClient?.events.map((event, idx) => (
                <li key={idx}>{event.title}</li>
                ))}
            </ul>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Fermer</Button>
            </Modal.Footer>
        </Modal>
        </Container>
    </Layout>
  );
};

export default ClientList;
