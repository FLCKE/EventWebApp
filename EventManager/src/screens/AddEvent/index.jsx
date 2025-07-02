import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import Layout from "../../Layout";
import {
  createEvent,
  getEventById,
  updateEvent,
} from "../../services/eventServices";
import { useParams } from "react-router-dom";

const AddEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    capacity: "",
    price: "",
  });
  const { id } = useParams();
  useEffect(() => {
    console.log("ID de l'événement :", id);
    // Si un ID est fourni, on peut charger les données de l'événement à modifier
    if (id) {
      // Remplacer par un appel à l'API pour récupérer les données de l'événement
      getEventById(id)
        .then((response) => {
          console.log("Événement récupéré avec succès", response);
          setEventData({
            title: response.title || "",
            date: new Date(response.date).toISOString().slice(0, 10) || "",
            time: new Date(response.date).toISOString().slice(11, 16) || "",
            location: response.location || "",
            description: response.description || "",
            capacity: response.capacity || "",
            price: response.price || "",
          });
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération de l'événement", error);
          alert("Erreur lors de la récupération de l'événement");
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxSize = 2 * 1024 * 1024; // 2 Mo
      if (file.size > maxSize) {
        alert("L'image ne doit pas dépasser 2 Mo.");
        return;
      }
      setEventData({ ...eventData, image: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventData.date || !eventData.time) {
      alert("Veuillez renseigner la date et l'heure.");
      return;
    }
    const dataToSend = {
      ...eventData,
      date: new Date(`${eventData.date}T${eventData.time}`).toISOString(),
    };
    console.log("Données de l'événement à envoyer :", eventData);
    const eventDataToSend = new FormData();
    eventDataToSend.append("title", dataToSend.title);
    eventDataToSend.append("date", dataToSend.date);
    eventDataToSend.append("location", dataToSend.location);
    eventDataToSend.append("description", dataToSend.description);
    eventDataToSend.append("capacity", dataToSend.capacity);
    eventDataToSend.append("price", dataToSend.price);
    eventDataToSend.append("image", dataToSend.image);

    if (id) {
      updateEvent(id, eventDataToSend)
        .then((response) => {
          console.log("Événement créé avec succès", response);
          alert("Événement créé avec succès !");
        })
        .catch((error) => {
          console.error("Erreur lors de la création de l'événement", error);
          alert("Erreur lors de la création de l'événement");
        });
    } else {
      createEvent(eventDataToSend)
        .then((response) => {
          console.log("Événement créé avec succès", response);
          alert("Événement créé avec succès !");
        })
        .catch((error) => {
          console.error("Erreur lors de la création de l'événement", error);
          alert("Erreur lors de la création de l'événement");
        });
    }

    // À remplacer par un appel à ton API
    // alert("Événement ajouté avec succès !");
    // setEventData({
    //   title: "",
    //   date: "",
    //   time: "",
    //   location: "",
    //   description: "",
    //   capacity: "",
    // });
  };

  return (
    <Layout>
      <Container className="mt-5">
        <h3 className="mb-4 text-start text-white">Ajouter un événement</h3>
        <Row className="">
          <Col>
            <Card className="shadow-sm bg-dark text-white text-start">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="title" className="mb-3">
                    <Form.Label>Titre de l'événement</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ex: Conférence Tech"
                      name="title"
                      value={eventData.title}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="date" className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={eventData.date}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="time" className="mb-3">
                        <Form.Label>Heure</Form.Label>
                        <Form.Control
                          type="time"
                          name="time"
                          value={eventData.time}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="location" className="mb-3">
                    <Form.Label>Lieu</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ex: Hôtel Ivoire, Abidjan"
                      name="location"
                      value={eventData.location}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="description" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Décris brièvement l'événement"
                      name="description"
                      value={eventData.description}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="capacity" className="mb-4">
                        <Form.Label>Nombre de places</Form.Label>
                        <Form.Control
                          type="number"
                          name="capacity"
                          value={eventData.capacity}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="price" className="mb-4">
                        <Form.Label>Prix d'une place</Form.Label>
                        <Form.Control
                          type="number"
                          name="price"
                          value={eventData.price}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="image" className="mb-4">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      required
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit">
                      {!id ? "Créer l'événement" : "Mettre à jour l'événement"}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AddEvent;
