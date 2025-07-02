import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Alert,
  Image,
} from "react-bootstrap";
import Layout from "../../Layout";
import { useAuth } from "../../auth/authProvider";
import { updateUser } from "../../services/authServices";

const Profil = () => {
  const { user: userData } = useAuth();

  const [formData, setFormData] = useState({ ...userData });
  const [imagePreview, setImagePreview] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log("formData", formData);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFormData({ ...formData, image: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    updatedData.append("name", formData.name);
    updatedData.append("email", formData.email);
    updatedData.append("phone", formData.phone);
    updatedData.append("image", formData.image);

    updateUser(userData._id, updatedData)
      .then((response) => {
        console.log("Profil mis à jour avec succès", response);
        setFormData(response);
        setIsUpdated(true);
        setTimeout(() => setIsUpdated(false), 3000);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour du profil", error);
        setErrorMessage(
          "Une erreur est survenue lors de la mise à jour du profil."
        );
      });
  };

  return (
    <Layout>
      <Container className="">
        <h2 className="text-start text-white">Mon Profil</h2>

        {isUpdated && (
          <Alert variant="success">Profil mis à jour avec succès !</Alert>
        )}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        <Row className="g-3 mt-4">
          <Col
            md={4}
            className="d-flex justify-content-center bg-dark text-white rounded "
          >
            <div className="shadow p-3  h-100 d-flex flex-column align-items-center justify-content-center">
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  roundedCircle
                  width={150}
                  height={150}
                />
              ) : (
                <Image
                  src={
                    userData?.imageUrl
                      ? userData?.imageUrl
                      : "https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
                  }
                  roundedCircle
                  width={150}
                  height={150}
                />
              )}

              <Form.Group controlId="image" className="mt-3">
                <Form.Label>Changer l'image de profil</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={handleImageChange}
                />
              </Form.Group>
            </div>
          </Col>
          <Col md={8}>
            <Form
              onSubmit={handleSubmit}
              className="text-start shadow p-4 bg-dark text-white rounded"
            >
              <h3 className="text-start text-white mb-3">Mes Information</h3>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez votre nom"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Entrez votre email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formPhone">
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez votre téléphone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formPassword">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="Password"
                    placeholder="Entrez votre Mot de password"
                    name="password"
                    disabled
                    value={formData.password || "ddddddddddd"}
                    onChange={handleChange}
                  />
                  <Button variant="link"> Changer</Button>
                </Form.Group>
              </Row>
              <Row className="mb-3 ">
                <div className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="validateBtn"
                  >
                    Sauvegarder les modifications
                  </Button>
                </div>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Profil;
