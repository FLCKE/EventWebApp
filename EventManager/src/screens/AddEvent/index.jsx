import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Layout from '../../Layout';

const AddEvent = () => {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    capacity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Événement à créer :', eventData);

    // À remplacer par un appel à ton API
    alert("Événement ajouté avec succès !");
    setEventData({
        title: '',
        date: '',
        time: '',
        location: '',
        description: '',
        capacity: '',
    });
  };

  return (
    <Layout>
        <Container className="mt-5">
                <h3 className="mb-4 text-start text-white">Ajouter un événement</h3>
        <Row className="">
            <Col >
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
                        className='bg-dark-subtle'
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
                             className='bg-dark-subtle'
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
                             className='bg-dark-subtle'
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
                         className='bg-dark-subtle'
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
                         className='bg-dark-subtle'
                        onChange={handleChange}
                    />
                    </Form.Group>

                    <Form.Group controlId="capacity" className="mb-4">
                    <Form.Label>Nombre de places</Form.Label>
                    <Form.Control
                        type="number"
                        name="capacity"
                        value={eventData.capacity}
                         className='bg-dark-subtle'
                        onChange={handleChange}
                        required
                    />
                    </Form.Group>
                            
                    <div className="text-center">
                    <Button variant="primary" type="submit">
                        Créer l'événement
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
