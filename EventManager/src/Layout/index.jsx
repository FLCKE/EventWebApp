import React from "react";
import NavBarApp from "../components/NavBarApp";
import { Col, Row } from "react-bootstrap";

function Layout({ children }) {
  return (
    <div>
      <Row className="g-0" style={{ height: "100vh" }}>
        <Col
          md={2}
          className="d-flex justify-content-center align-items-center"
        >
          <NavBarApp />
        </Col>
        <Col md={10} className="">
          {children}
        </Col>
      </Row>
    </div>
  );
}

export default Layout;
