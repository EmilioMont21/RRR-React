import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import chatify2 from "../../Assets/Projects/chatify2.png";
import chatify3 from "../../Assets/Projects/chatify3.png";
import chatify4 from "../../Assets/Projects/chatify4.png";
import chatify5 from "../../Assets/Projects/chatify5.png";
import chatify6 from "../../Assets/Projects/chatify6.png";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Projects() {



  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Como esto <strong className="purple">Ayuda </strong> al medio ambiente
        </h1>
        <p style={{ color: "white" }}>
          Algunos ejemplos
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Reducción de la cantidad de residuos: "
              description="El reciclaje ayuda a reducir la cantidad de residuos que van a los vertederos, lo que disminuye el impacto ambiental."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify2}
              title="Ahorro de recursos naturales: "
              description="Al reciclar materiales, se reduce la necesidad de extraer nuevos materiales de la naturaleza."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify3}
              title="Reducción de emisiones de gases de efecto invernadero: "
              description="La producción de materiales reciclados suele requerir menos energía y emitir menos gases de efecto invernadero que la producción de materiales nuevos."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify4}
              title="Creación de empleos: "
              description="El reciclaje puede generar empleos en la industria de reciclaje y en otras industrias relacionadas."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify5}
              title="Ahorro de dinero: "
              description="Al reciclar materiales, se reduce la necesidad de producir nuevos materiales, lo que puede ahorrar dinero a largo plazo."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify6}
              title="Mejora de la calidad ambiental: "
              description="El reciclaje ayuda a mejorar la calidad ambiental al reducir la cantidad de residuos tóxicos y perjudiciales para el medio ambiente."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
