import React from "react";
import Card from "react-bootstrap/Card";
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"


function Map(){
  return <GoogleMap zoom={10} center={{lat: -0.22985, lng: -78.52495}}
          mapContainerClassName="map-container">
            <Marker position={{lat: -0.22985, lng: -78.5249}}/>
          </GoogleMap>
}

function AboutCard() {

  const {isLoaded} = useLoadScript({ 
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });


  if(!isLoaded) return <div>Cargando...</div>;
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <Map/>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
