import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Services = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#1861A5', color: 'white', padding: '10px' }}>
        <h4>NOS SERVICES</h4>
      </div>

      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/b1.png")} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>louer un terrain</Card.Title>
              <Card.Text>
                venez voir et louer par la meme occasion nos superbe terrains interieur comme exterieur
              </Card.Text>
              <Button variant="primary">voir prix</Button>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/c2.jpeg")} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: '300px' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>reserver une session d'entrainement</Card.Title>
              <Card.Text>
                nos entraineurs sont pret a vous aider a atteindre vos objectif dans votre carriere de basketeur
              </Card.Text>
              <Button variant="primary">voir prix</Button>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/T1.jpeg")} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: '300px' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>acheter un ticket de tournoi de basketball</Card.Title>
              <Card.Text>
                Assistez a nos tournois de basketball en direct. ressentez les emotions d'un vrai match en vie reel.
              </Card.Text>
              <Button variant="primary">voir prix</Button>
            </Card.Body>
          </div>
        </div>
      </Card>



      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/T2.jpg")} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>organiser un tournoi de basketballt</Card.Title>
              <Card.Text>
                organisez un tournoi de basket et venez montrer vos talents sur le terrain et que peut etre vous aurez la chances d'etre recruter dans un de nos prestigieux club.
              </Card.Text>
              <Button variant="primary">voir prix</Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Services;
