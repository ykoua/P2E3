import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const coach = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#1861A5', color: 'white', padding: '10px' }}>
        <h4>NOS COACH</h4>
      </div>

      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/basketball coac 0.png")} className="img-fluid rounded-start" alt="..." style={{ width: '50%', height: 'auto' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>Martin Douglas</Card.Title>
              <Card.Text>
                Martin est un ancien joueur de l'un des club du groupe los santos. apres avoir accomplie ses objectifs il a decider d'entrainner la nouvelle generation et de leur faire part des difficultees
                et des bons cotes de devenir un joueur pro. il est specialiser dans l'entrainement individuel...
              </Card.Text>
              <Button variant="primary">more...</Button>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/basketball adul 0.png")} className="img-fluid rounded-start" alt="..." style={{ width: '50%', height: '300px' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>Lucacio Gbaka</Card.Title>
              <Card.Text>
                Lucacio a fait des etudes de 4 ans pour devenir un entraineur de basketball. il a 5 ans d'expertise dans le domaine, il est specialiser dans l'entrainement d'equipe. au court de ses annees 
                d'expertise il a voyagee dans plusieurs pays afin de perfectionner sa technique et d'offrir le meilleur 
                enseignement possible...
              </Card.Text>
              <Button variant="primary">more...</Button>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/basketball adul 0-2.png")} className="img-fluid rounded-start" alt="..." style={{ width: '50%', height: '300px' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>Arthur Vendam </Card.Title>
              <Card.Text>
                Arthur a fait des etudes de 5 ans pour devenir un entraineur de basketball. il a 3 ans dans le domaine, il est specialiser dans l'entrainement par poste plus specifiquement les pivots et ailiers. au court de ses annees 
                d'expertise il a ete sous la tutelle de coach de renom afin de polir son art et d'offrir le meilleur 
                enseignement possible...
              </Card.Text>
              <Button variant="primary">more...</Button>
            </Card.Body>
          </div>
        </div>
      </Card>



      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/basketball adul 1.png")} className="img-fluid rounded-start" alt="..." style={{ width: '50%', height: 'auto' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>john carter</Card.Title>
              <Card.Text>
                carter est un ancien joueur de l'un des club du groupe los santos. tout comme martin apres avoir accomplie ses objectifs il a decider d'entrainner la nouvelle generation et de leur faire part de ses experience dans
                le domaine tout en les confrontant a des situations reelle. il est specialiser dans l'entrainement individuel egalement...
              </Card.Text>
              <Button variant="primary">more...</Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default coach;
