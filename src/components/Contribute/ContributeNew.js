import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ContributeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <PayPalScriptProvider 
          options={{"client-id": "AUSsnN8HgAihlSd-0qMMwtpKtZkZ-pizdmc4-bkvJ85gxiFxjhEGYsyTYD0SQsgYJshVYE_Pp_dV3flI"}}>
            <PayPalButtons/>
          </PayPalScriptProvider>
        </Row>

        <Row className="resume">
          <Document file={""} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>


      </Container>
    </div>
  );
}

export default ContributeNew;
