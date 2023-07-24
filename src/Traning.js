import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Training = () => {
    return ( 
        <div>
        <div style={{ backgroundColor: '#1861A5', color: 'white', padding: '10px' }}>
        <h4>ENTRAINEMENT </h4>
      </div>
        <div className="container mt-4"></div>
        
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: '100%', marginBottom: '20px' }}>
              <Card.Img variant="top" src={require("./images/training4.jpeg")} style={{ width: '463px', height: '460px' }}/>
              <Card.Body>
                <Card.Title>Entrainement d'equipe</Card.Title>
                <Card.Text>
                  Profitez d'un entrainement de qualite avec des exercices precis pour votre equipe pour perfectionner votre jeu d'equipe avec l'un de nos coach. 
                </Card.Text>
                <Button variant="primary">prix</Button>
              </Card.Body>
            </Card>
          </div>
  
          <div className="col-md-4">
            <Card style={{ width: '100%', marginBottom: '20px' }}>
              <Card.Img variant="top" src={require("./images/training2.jpeg")}  />
              <Card.Body>
                <Card.Title>Entrainement seul</Card.Title>
                <Card.Text>
                  Soyez témoin des progres que vous ferez avec les exercice de qualite proposer par nos coach exceptionnel. vous serez sous la tutel des meilleures
                </Card.Text>
                <Button variant="primary">prix</Button>
              </Card.Body>
            </Card>
          </div>
  
          <div className="col-md-4">
            <Card style={{ width: '100%', marginBottom: '20px' }}>
              <Card.Img variant="top" src={require("./images/training3.jpeg")} />
              <Card.Body>
                <Card.Title>entrainement par poste</Card.Title>
                <Card.Text>
                  Obtenez un niveau de joueur pro en perfectionnant votre jeu au poste que vous jouer. Nos coach sont pret a vous aider a realiser votre reve.
                </Card.Text>
                <Button variant="primary">prix</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
     );
}
 
export default Training;