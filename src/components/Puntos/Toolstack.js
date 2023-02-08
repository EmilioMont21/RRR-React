import React from "react";
import { Col, Row } from "react-bootstrap";
import {GiBattery50, GiSmartphone, GiPlasticDuck} from "react-icons/gi";
import {SlCup} from "react-icons/sl";
import {FaPumpSoap} from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <GiBattery50 /> <p style={{fontSize: 20}}>Pilas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SlCup /> <p style={{fontSize: 20}}>Porcelana</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiSmartphone /> <p style={{fontSize: 20}}>Electronicos</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiPlasticDuck /> <p style={{fontSize: 20}}>Plástico duro</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPumpSoap /> <p style={{fontSize: 20}}>Productos de limpieza</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
