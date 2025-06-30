import React, { useState } from 'react';
import { Container, Table, Button, Modal, ListGroup, Row, Col, Badge, Pagination } from 'react-bootstrap';
import Layout from '../../Layout';
import './index.css'; // Assurez-vous d'importer le fichier CSS pour les styles
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const EventList = () => {
//   const navigate = useNavigate();
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}  className="bg-dark text-light">
      {number}
    </Pagination.Item>,
  );
}
  // Données simulées
  const events = [
    {
      id: 1,
      title: "Conférence Tech Afrique",
      date: "2025-07-10",
      location: "Abidjan",
      description: "Conférence sur les nouvelles technologies en Afrique.",
      capacity: 200,
      participants: [
        { name: "Jean Koffi", status: "Payé" },
        { name: "Nina Gbagbo", status: "Présent" },
      ],
    },
    {
      id: 2,
      title: "Startup Weekend Bénin",
      date: "2025-07-15",
      location: "Cotonou",
      description: "Week-end dédié aux startups innovantes.",
      capacity: 150,
      participants: [
        { name: "Louis Carlos", status: "Payé" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
      ],
    },
    {
      id: 3,
      title: "Startup Weekend Bénin",
      date: "2025-07-15",
      location: "Cotonou",
      description: "Week-end dédié aux startups innovantes.",
      capacity: 150,
      participants: [
        { name: "Louis Carlos", status: "Payé" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
      ],
    },
    {
      id: 4,
      title: "Startup Weekend Bénin",
      date: "2025-07-15",
      location: "Cotonou",
      description: "Week-end dédié aux startups innovantes.",
      capacity: 150,
      participants: [
        { name: "Louis Carlos", status: "Payé" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
      ],
    },
    {
      id: 5,
      title: "Startup Weekend Bénin",
      date: "2025-07-15",
      location: "Cotonou",
      description: "Week-end dédié aux startups innovantes.",
      capacity: 150,
      participants: [
        { name: "Louis Carlos", status: "Payé" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
      ],
    },
    {
      id: 6,
      title: "Startup Weekend Bénin",
      date: "2025-07-15",
      location: "Cotonou",
      description: "Week-end dédié aux startups innovantes.",
      capacity: 150,
      participants: [
        { name: "Louis Carlos", status: "Payé" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
        { name: "Aïcha Diop", status: "Absent" },
      ],
    },
  ];

  const [showParticipants, setShowParticipants] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openParticipantsModal = (event) => {
    setSelectedEvent(event);
    setShowParticipants(true);
  };

  const openDetailsModal = (event) => {
    setSelectedEvent(event);
    setShowDetails(true);
  };

  const handleCloseModals = () => {
    setSelectedEvent(null);
    setShowParticipants(false);
    setShowDetails(false);
  };

//   const handleEditEvent = (id) => {
//     navigate(`/modifier-evenement/${id}`);
//   };

  return (
<Layout>
    
    <Container className="mt-5">
        <div className='d-flex justify-content-between align-items-center mb-4'>
            <h2 className="mb-4 text-white text-start" >Liste des événements</h2>
            <Button as={Link} to="/profil" > Ajouter</Button>
        </div>
      <div className="bg-dark p-3 rounded mb-4 ">
      <Table   hover className="shadow-sm text-white table-striped table-dark rounded ">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Date</th>
            <th>Lieu</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
              <tr key={event.id}>
              <td>{index + 1}</td>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>
                <Row className='justify-content-center'>

                  <Col xs="auto" className="mb-1">
                    <Button variant="info" size="sm" onClick={() => openDetailsModal(event)}>
                      Visualiser
                    </Button>
                  </Col>
                  <Col xs="auto" className="mb-1">
                    <Button variant="warning" size="sm" onClick={() => handleEditEvent(event.id)}>
                      Modifier
                    </Button>
                  </Col>
                  <Col xs="auto">
                    <Button variant="success" size="sm" onClick={() => openParticipantsModal(event)}>
                      Participants
                    </Button>
                  </Col>
                </Row>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='d-flex justify-content-center'> 
        <Pagination className='bg-dark' >{items}</Pagination>
      </div>
      </div>
      
      {/* Modal - Participants */}
      <Modal show={showParticipants} onHide={handleCloseModals} centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Participants - {selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent?.participants?.length > 0 ? (
              <ListGroup>
              {selectedEvent.participants.map((p, idx) => (
                  <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center">
                  <span>{p.name}</span>
                  <Badge bg={
                      p.status === "Payé" ? "success" :
                      p.status === "Présent" ? "info" :
                      "secondary"
                    }>
                    {p.status}
                  </Badge>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
              <p>Aucun participant enregistré pour cet événement.</p>
            )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModals}>Fermer</Button>
        </Modal.Footer>
      </Modal>

{/* Modal - Détails de l'événement */}
      <Modal show={showDetails} onHide={handleCloseModals} centered>
        <Modal.Header closeButton>
          <Modal.Title>Détails - {selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Date :</strong> {selectedEvent?.date}</p>
          <p><strong>Lieu :</strong> {selectedEvent?.location}</p>
          <p><strong>Capacité :</strong> {selectedEvent?.capacity} places</p>
          <p><strong>Description :</strong> {selectedEvent?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModals}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </Layout>
  );
};

export default EventList;
