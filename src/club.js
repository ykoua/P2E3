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
              <Card.Title>Les Faucons Dorés</Card.Title>
              <Card.Text>
              Le club de basket des Faucons Dorés est réputé pour son jeu offensif flamboyant et sa rapidité sur le terrain. Leurs joueurs sont agiles et vifs, 
              capables de marquer des paniers spectaculaires en un clin d'œil. Ils sont surnommés "Les Faucons Dorés" en raison de leur détermination à atteindre 
              de nouveaux sommets et à briller comme des étoiles lors de chaque match.
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
              <Card.Title>Les Tigres Éclairs</Card.Title>
              <Card.Text>
              Ce club de basket incarne la puissance et la force sur le terrain. Leurs joueurs sont réputés pour leur endurance et leur habileté à marquer des paniers difficiles. 
              Ils ont une approche tactique solide et sont considérés comme des "Tigres Éclairs" en raison de leur capacité à bondir et à marquer rapidement avant que leurs adversaires ne puissent réagir.
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
              <Card.Title>Les Étoiles Filantes</Card.Title>
              <Card.Text>
              Le club des Étoiles Filantes est connu pour son jeu aérien et sa capacité à défier la gravité.
              Leurs joueurs sont des experts en dunks et en sauts acrobatiques qui les font paraître comme des étoiles filantes traversant le ciel.
              Leur style de jeu spectaculaire attire les foules et crée une ambiance électrique dans les stades.
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
              <Card.Title>Les Dragons de Feu</Card.Title>
              <Card.Text>
              Ce club de basket est synonyme de passion et d'intensité. Leurs joueurs sont déterminés à brûler leurs adversaires sur le terrain avec leur jeu explosif. 
              Le nom "Les Dragons de Feu" est choisi pour leur esprit combatif et leur capacité à rallumer le feu de la compétition dans chaque match.
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
