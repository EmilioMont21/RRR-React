import React from "react";
import { Col, Row } from "react-bootstrap";
import {GiMetalPlate, GiCrackedGlass, GiMetalBar} from "react-icons/gi";
import {RiFilePaperLine} from "react-icons/ri";
import {TbBottle} from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <RiFilePaperLine /> <p style={{fontSize: 20}}>Papel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiMetalPlate /> <p style={{fontSize: 20}}>Aluminio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiCrackedGlass /> <p style={{fontSize: 20}}>Vidrio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBottle /> <p style={{fontSize: 20}}>Plástico</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiMetalBar /> <p style={{fontSize: 20}}>Metal</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
