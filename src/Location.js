import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Location = () => {
  return (
    <div>
      <header className="text-center mt-4">
        <h1>Location</h1>
      </header>
      
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={6}>
            {/* Remplacez l'iframe ci-dessous par le code de votre carte */}
            <div style={{ height: '400px', backgroundColor: '#f2f2f2' }}>
              {/* Code de votre carte ici */}
              <iframe
                title="Map"
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223408.35083559342!2d-0.24168152044717636!3d51.528771840997755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM5DCsDA4JzE5LjAiTiAwwrAyMyc1MC4xIlc!5e0!3m2!1sen!2suk!4v1633794746511!5m2!1sen!2suk"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <h2>Heures d'ouverture</h2>
            <p>
              Lundi - Vendredi : 9h00 - 18h00<br />
              Samedi : 10h00 - 15h00<br />
              Dimanche : Fermé
            </p>
          </Col>
          <Col md={6}>
            <h2>Coordonnées</h2>
            <p>
              Adresse : 123 Rue des Sports, 75001 Paris<br />
              Téléphone : +33 1 23 45 67 89<br />
              Email : contact@exemple.com
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Location;
