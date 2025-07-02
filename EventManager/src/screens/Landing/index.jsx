import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import Logo from "../../assets/logo-2.png"; // Assuming you have a logo image
const Landing = () => (
  <div
    style={{
      minHeight: "100vh",
      color: "#fff",
      display: "flex",
      alignItems: "center",
    }}
  >
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={7} className="text-center">
          <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>
            Bienvenue sur <span style={{ color: "#ffd700" }}>EventManager</span>
          </h1>
          <p style={{ fontSize: "1.3rem", margin: "2rem 0" }}>
            Gérez, organisez et vendez vos événements en toute simplicité.<br />
            Suivi des ventes, gestion des participants, statistiques en temps réel et bien plus encore !
          </p>
          <Button
            as={Link}
            to="/register"
            size="lg"
            variant="warning"
            style={{ fontWeight: "bold", marginRight: "1rem" }}
          >
            Commencer gratuitement
          </Button>
          <Button
            as={Link}
            to="/login"
            size="lg"
            variant="outline-light"
            style={{ fontWeight: "bold" }}
          >
            Se connecter
          </Button>
        </Col>
        <Col md={5} className="d-none d-md-block">
          <Card
            className="shadow-lg"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "2rem",
              padding: "2rem",
            }}
          >
            <Card.Body>
              <img
                src={Logo}
                alt="Event"
                style={{
                  width: "90%",
                  borderRadius: "1.5rem",
                  marginBottom: "1rem",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                }}
              />
              <Card.Text style={{ fontSize: "1.1rem", color: "#fff" }}>
                <strong>+50</strong> événements déjà organisés.<br />
                <strong>+500</strong> participants satisfaits.<br />
                Rejoignez la communauté EventManager !
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Landing;