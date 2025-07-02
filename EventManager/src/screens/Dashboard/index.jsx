import { FaCalendarAlt, FaUsers, FaEuroSign } from "react-icons/fa"; // Icons
import React, { use, useEffect } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  ProgressBar,
  Table,
} from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  BarChart,
  Bar,
} from "recharts";
import Layout from "../../Layout";
import { getAllStat } from "../../services/statServices";
import { useAuth } from "../../auth/authProvider";
import { BiVerticalCenter } from "react-icons/bi";
import { Link } from "react-router-dom";

function Dashboard() {
  const [statistic, setStatistic] = React.useState({});
  const { user } = useAuth();

  const pourcentage = Math.round((statistic?.lastEventRegistrations / statistic?.lastEvent?.capacity) * 100);
  useEffect(() => {
    // Simuler une récupération de données depuis une API
    // Ici, vous pouvez appeler votre service pour récupérer les statistiques
    getAllStat(user._id)
      .then((response) => {
        console.log("Statistiques récupérées :", response);
        // Mettre à jour l'état avec les données récupérées
        setStatistic(response); // Assurez-vous que response.data contient les statistiques
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des statistiques", error);
        // Gérer l'erreur, par exemple en affichant un message à l'utilisateur

        // setError('Impossible de récupérer les statistiques. Veuillez réessayer plus tard.');
      });
  }, [user]);
  return (
    <Layout>
      <Container className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-4 text-white text-start ">
            Tableau de bord EventManager
          </h2>
          <Button variant="primary" as={Link} to="/create-event">
            Créer un nouvel événement
          </Button>
        </div>

        {/* Cartes statistiques */}

        <Row className="mb-4">
          <Col md={4}>
            <Card className="shadow-sm bg-dark text-white">
              <Card.Body className="d-flex align-items-center">
                <FaCalendarAlt size={40} className="me-3 text-warning" />
                <div>
                  <Card.Title>Événements</Card.Title>
                  <h3>{statistic.totalEvents}</h3>
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
                  <h3>{statistic.totalParticipants}</h3>
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
                  <h3>{statistic.totalSales} </h3>
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
                <Card.Title className="text-start mb-3">
                  Évolution des ventes de billets
                </Card.Title>
                <ResponsiveContainer
                  width="100%"
                  height={300}
                  className="bg-dark"
                >
                  <BarChart
                    data={statistic.registrationsByDay}
                    margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
                  >
                    <XAxis dataKey="_id" stroke="white" />
                    <YAxis stroke="white" />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#333", border: "none" }}
                      labelStyle={{ color: "white" }}
                    />
                    <Bar
                      dataKey="count"
                      fill="rgb(106, 22, 176)"
                      barSize={40}
                      radius={[5, 5, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm h-100 bg-dark text-white rounded">
              <Card.Body className="d-flex flex-column justify-content-center text-center">
                <Card.Title>Progression du jour</Card.Title>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#007bff",
                  }}
                >
                  {pourcentage}%
                </div>
                <p>
                  {statistic?.lastEventRegistrations} places vendues sur {statistic?.lastEvent?.capacity} disponibles
                </p>
                <div className="my-3">
                  <ProgressBar
                    now={pourcentage}
                    label={`${pourcentage}%`}
                    variant={pourcentage >= 75 ? "success" : "info"}
                    style={{ height: "30px", fontSize: "1rem" }}
                  />
                </div>
                <small className="text-muted">
                  Objectif journalier : {statistic?.lastEvent?.capacity} billets
                </small>
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
                      <th>Participant</th>
                      <th>Email</th>
                      <th>Événement</th>
                      <th>Prix(€)</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statistic?.recentRegistrations?.map((sale) => (
                      <tr key={sale._id}>
                        <td>{sale.userId?.name}</td>
                        <td>{sale.userId?.email}</td>
                        <td>{sale.eventId?.title}</td>
                        <td>{sale.eventId?.price}</td>
                        <td>{new Date(sale.createdAt).toISOString().slice(0, 10)} </td>
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
