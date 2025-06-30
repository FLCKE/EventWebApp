import { FaCalendarAlt, FaUsers, FaEuroSign } from "react-icons/fa"; // Icons
import React from 'react';
import { Card, Container, Row, Col, Button, ProgressBar, Table } from 'react-bootstrap';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart,
  BarChart,
  Bar
} from 'recharts';
import Layout from '../../Layout';

function Dashboard() {
  const salesData = [
    { day: 'Lun', tickets: 10 },
    { day: 'Mar', tickets: 25 },
    { day: 'Mer', tickets: 20 },
    { day: 'Jeu', tickets: 30 },
    { day: 'Ven', tickets: 50 },
    { day: 'Sam', tickets: 45 },
    { day: 'Dim', tickets: 60 },
  ];

  const recentSales = [
    { id: 1, participant: 'Jean Koffi', event: 'Conférence IA', quantity: 2, date: '28/06/2025' },
    { id: 2, participant: 'Aïcha Diop', event: 'Tech Summit', quantity: 1, date: '28/06/2025' },
    { id: 3, participant: 'Louis Carlos', event: 'Startup Night', quantity: 3, date: '27/06/2025' },
    { id: 4, participant: 'Nina Gbagbo', event: 'Forum Jeunesse', quantity: 1, date: '27/06/2025' },
    { id: 5, participant: 'Mohamed Traoré', event: 'Green Days', quantity: 2, date: '26/06/2025' },
  ];

  const stats = {
    totalEvents: 12,
    totalParticipants: 254,
    totalRent: 14000,
  };

  const objectif = 100;
  const ticketsDimanche = salesData[salesData.length - 1].tickets;
  const pourcentage = Math.round((ticketsDimanche / objectif) * 100);

  return (
    <Layout>
    <Container className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="mb-4 text-white text-start ">Tableau de bord EventManager</h2>
                    <Button variant="primary" href="/create-event">Créer un nouvel événement</Button>
        </div>

      {/* Cartes statistiques */}

        <Row className="mb-4">
            <Col md={4}>
                <Card className="shadow-sm bg-dark text-white">
                <Card.Body className="d-flex align-items-center">
                    <FaCalendarAlt size={40} className="me-3 text-warning" />
                    <div>
                    <Card.Title>Événements</Card.Title>
                    <h3>{stats.totalEvents}</h3>
                    <Card.Text>Total organisés</Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card className="shadow-sm  bg-dark text-white">
                <Card.Body className="d-flex align-items-center">
                    <FaUsers size={40} className="me-3 text-info" />
                    <div>
                    <Card.Title>Participants</Card.Title>
                    <h3>{stats.totalParticipants}</h3>
                    <Card.Text>Total inscrits</Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card className="shadow-sm  bg-dark text-white">
                <Card.Body className="d-flex align-items-center">
                    <FaEuroSign size={40} className="me-3 text-success" />
                    <div>
                    <Card.Title>Revenus </Card.Title>
                    <h3>{stats.totalRent} </h3>
                    <Card.Text>Générés </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
        </Row>


      {/* Courbe + Statistique */}
      <Row className="mb-4">
        <Col md={8}>
          <Card className="shadow-sm bg-dark text-white h-100">
            <Card.Body>
              <Card.Title className="text-start mb-3">Évolution des ventes de billets</Card.Title>
              <ResponsiveContainer width="100%" height={300} className="bg-dark">
                    <BarChart
                        data={salesData}
                        margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
                    >
                        <XAxis dataKey="day" stroke="white" />
                        <YAxis stroke="white" />
                        <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} labelStyle={{ color: 'white' }} />
                        <Bar dataKey="tickets" fill="rgb(106, 22, 176)" barSize={40} radius={[5, 5, 0, 0]}  />
                    </BarChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm h-100 bg-dark text-white rounded">
            <Card.Body className="d-flex flex-column justify-content-center text-center">
              <Card.Title>Progression du jour</Card.Title>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#007bff' }}>
                {pourcentage}%
              </div>
              <p>{ticketsDimanche} places vendues sur {objectif}</p>
              <div className="my-3">
                <ProgressBar
                  now={pourcentage}
                  label={`${pourcentage}%`}
                  variant={pourcentage >= 75 ? 'success' : 'info'}
                  style={{ height: '30px', fontSize: '1rem' }}
                />
              </div>
              <small className="text-muted">Objectif journalier : {objectif} billets</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tableau des ventes récentes */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-start">
                Dernières ventes de billets

              </Card.Title>
              <Table responsive bordered hover className="mt-3">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Participant</th>
                    <th>Événement</th>
                    <th>Quantité</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSales.map((sale) => (
                    <tr key={sale.id}>
                      <td>{sale.id}</td>
                      <td>{sale.participant}</td>
                      <td>{sale.event}</td>
                      <td>{sale.quantity}</td>
                      <td>{sale.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Bouton */}
      
    </Container>
    </Layout>
  );
}

export default Dashboard;
