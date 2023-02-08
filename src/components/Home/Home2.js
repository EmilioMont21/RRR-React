import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Datos <span className="purple"> INTERESANTES </span> que te pueden servir
            </h1>
            <p className="home-about-body">
            El reciclaje de papel puede ahorrar hasta un 74% de la energía requerida para 
            producir papel nuevo a partir de madera.
              <br />
              <br />Una sola árbol de papel produce suficiente papel para hacer más de 
              <i>
                <b className="purple"> 700,000 hojas. </b>
              </i>
              <br />
              <br />
              Reciclar&nbsp;
              <i>
                <b className="purple">una sola botella de plástico </b> puede ahorrar suficiente energía para correr
               una computadora durante una hora.{" "}
              </i>
              <br />
              <br />
              La cantidad de papel reciclado que se produce en el mundo  
              with <b className="purple">cada año </b> 
              es suficiente para cubrir la distancia de la tierra a la luna y regresar.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
