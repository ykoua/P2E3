import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Tournament = () => {
    return ( 
        <div>
        <div style={{ backgroundColor: '#1861A5', color: 'white', padding: '10px' }}>
        <h4>TOURNOI DE BASKETBALL </h4>
      </div>
        <div className="container mt-4"></div>
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: '100%', marginBottom: '20px' }}>
              <Card.Img variant="top" src={require("./images/tournoi1.jpeg")} />
              <Card.Body>
                <Card.Title>TOURNOI ENFANT</Card.Title>
                <Card.Text>
                  Organisez un tournoi pour les enfants de 5 a 14 ans cette occasion unique de voir vos enfants s'amuser en toutes securitees. vous pouvez former des equipes de 5 minimum.
                </Card.Text>
                <Button variant="primary">prix</Button>
              </Card.Body>
            </Card>
          </div>
  
          <div className="col-md-4">
            <Card style={{ width: '100%', marginBottom: '20px' }}>
              <Card.Img variant="top" src={require("./images/tournoi2.jpg")} />
              <Card.Body>
                <Card.Title>TOURNOI ADO</Card.Title>
                <Card.Text>
                  venez voir les jeunes de 15 a 18 ans s'affronter lors d'un championnat de basketball ! Vivez l'excitation du jeu et découvrez qui sera couronné champion cette année.
                </Card.Text>
                <Button variant="primary">prix</Button>
              </Card.Body>
            </Card>
          </div>
  
          <div className="col-md-4">
            <Card style={{ width: '100%', marginBottom: '20px' }}>
              <Card.Img variant="top" src={require("./images/tournoi3.jpeg")} />
              <Card.Body>
                <Card.Title>TOURNOI ADULTE</Card.Title>
                <Card.Text>
                  les tournois adulte de 18 ans et plus sont l'occasion de mettre vos competences en avant et avoir la chance d'etre recruter dans un club. vous pouvez former des equipes de 5 minimum et un maximum de 10 personnes.
                </Card.Text>
                <Button variant="primary">prix</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
     );
}
 
export default Tournament;