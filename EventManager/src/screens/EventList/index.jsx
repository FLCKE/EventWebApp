import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  Button,
  Modal,
  ListGroup,
  Row,
  Col,
  Badge,
  Pagination,
} from "react-bootstrap";
import Layout from "../../Layout";
import "./index.css"; // Assurez-vous d'importer le fichier CSS pour les styles
import { Link } from "react-router-dom";
import { getAllEventByOrganizer } from "../../services/eventServices";
import { useAuth } from "../../auth/authProvider";
import { useNavigate } from "react-router-dom";

const EventList = () => {
  const [showParticipants, setShowParticipants] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState(); // État pour stocker les événements
  const [page, setPage] = useState(1); // Current page number
  const [limit, setLimit] = useState(8); // Number of items per page
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    getAllEventByOrganizer(user._id, page, limit)
      .then((response) => {
        console.log("Liste des événements récupérée avec succès", response);
        setEvents(response); // Mettre à jour l'état avec la liste des événements
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération de la liste des événements",
          error
        );
      });
  }, [user._id, page, limit]);

  let active = events?.currentPage || 1; // Page active, par défaut 1 si non défini
  let items = [];
  for (let number = 1; number <= events?.totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setPage(number)}
        className="bg-dark text-light"
      >
        {number}
      </Pagination.Item>
    );
  }

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

  const handleEditEvent = (id) => {
    navigate(`/edit-event/${id}`);
  };

  return (
    <Layout>
      <Container className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-4 text-white text-start">Liste des événements</h2>
          <Button as={Link} to="/create-event">
            {" "}
            Ajouter
          </Button>
        </div>
        <div className="bg-dark p-3 rounded mb-4 ">
          <Table
            hover
            className="shadow-sm text-white table-striped table-dark rounded "
          >
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
              {events?.events?.map((event, index) => (
                <tr key={event.id}>
                  <td>{index + 1}</td>
                  <td>{event.title}</td>
                  <td>
                    {" "}
                    {new Date(event.date).toLocaleString("fr-FR", {
                      timeZone: "UTC",
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td>{event.location}</td>
                  <td>
                    <Row className="align-items-center g-1  flex-nowrap">
                      <Col xs="auto" className="mb-1">
                        <Button
                          variant="info"
                          size="sm"
                          onClick={() => openDetailsModal(event)}
                        >
                          Visualiser
                        </Button>
                      </Col>
                      <Col xs="auto" className="mb-1">
                        <Button
                          variant="warning"
                          size="sm"
                          onClick={() => handleEditEvent(event._id)}
                        >
                          Modifier
                        </Button>
                      </Col>
                      <Col xs="auto" className="mb-1">
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() => openParticipantsModal(event)}
                        >
                          Participants
                        </Button>
                      </Col>
                    </Row>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center">
            <Pagination className="bg-dark">{items}</Pagination>
          </div>
        </div>

        {/* Modal - Participants */}
        <Modal
          show={showParticipants}
          onHide={handleCloseModals}
          centered
          scrollable
        >
          <Modal.Header closeButton>
            <Modal.Title>Participants - {selectedEvent?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedEvent?.participants?.length > 0 ? (
              <ListGroup>
                {selectedEvent.participants.map((p, idx) => (
                  <ListGroup.Item
                    key={idx}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>{p.name}</span>
                    <Badge
                      bg={
                        p.status === "Payé"
                          ? "success"
                          : p.status === "Présent"
                          ? "info"
                          : "secondary"
                      }
                    >
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
            <Button variant="secondary" onClick={handleCloseModals}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal - Détails de l'événement */}
        <Modal show={showDetails} onHide={handleCloseModals} centered>
          <Modal.Header closeButton>
            <Modal.Title>Détails - {selectedEvent?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Date :</strong>{" "}
              {new Date(selectedEvent?.date).toLocaleString("fr-FR", {
                timeZone: "UTC",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>
              <strong>Lieu :</strong> {selectedEvent?.location}
            </p>
            <p>
              <strong>Capacité :</strong> {selectedEvent?.capacity} places
            </p>
            <p>
              <strong>Description :</strong> {selectedEvent?.description}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModals}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Layout>
  );
};

export default EventList;
