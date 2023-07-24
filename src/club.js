import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const club = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#1861A5', color: 'white', padding: '10px' }}>
        <h4>NOS CLUB</h4>
      </div>

      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/0afbd349-aef8-4f1b-8f1e-7cbbd6e2cafe.png")} className="img-fluid rounded-start" alt="..." style={{ width: '50%', height: 'auto' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>Book a court</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">join the team</Button>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/77b30f7c-fc29-493e-bd31-4ddd743e4e5b.jpg")} className="img-fluid rounded-start" alt="..." style={{ width: '50%', height: '300px' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>Book a training session</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">join the team</Button>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/a3c4e037-146e-4890-a9b2-888e296d7130.png")} className="img-fluid rounded-start" alt="..." style={{ width: '50%', height: '300px' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>Buy a basketball tournament ticket</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">join the team</Button>
            </Card.Body>
          </div>
        </div>
      </Card>



      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/be128336-f625-4c8c-87c3-6fc27c330a8b.png")} className="img-fluid rounded-start" alt="..." style={{ width: '50%', height: 'auto' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>Organize a basketball tournament</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">join the team</Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default club;
