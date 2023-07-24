import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Tickett = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const tickets = [
    {
      title: 'ticket standard avec photo',
      description: '90.00$ pour une photo avec un joueur à la fin du match plus une place dans les tribunes.',
      type: 'photo',
      price: '90.00$',
      Image: require("./images/equipe3.jpeg"),
    },
    {
      title: 'ticket vip',
      description: '100.00$ pour une place à l\'avant des tribunes pour un ticket vip.',
      type: 'vip',
      price: '100.00$',
      Image: require("./images/vip.png"),
    },
    {
      title: 'ticket standard',
      description: '25.00$ pour une place dans les tribunes.',
      type: 'standard',
      price: '25.00$',
      Image: require("./images/standard.jpg"),
    },
    {
      title: 'ticket avec photo vip',
      description: '200.00$ pour une photo avec un joueur à la fin du match plus une place à l\'avant des tribunes.',
      type: 'vip_photo',
      price: '200.00$',
      Image: require("./images/fami2.jpeg"),
    },
    {
      title: 'pack familial',
      description: '90.00$ pour 4 places dans les tribunes.',
      type: 'familial',
      price: '90.00$',
      Image: require("./images/fami.jpg"),
    },
    {
      title: 'pack familial plus',
      description: '190.00$ 4 places dans les tribunes avec de la nourriture comprise.',
      type: 'familial_plus',
      price: '190.00$',
      Image: require("./images/fami1.jpeg"),
    },
    {
      title: 'pack familial extra',
      description: '210.00$ pour 2 photos avec les joueurs à la fin du match plus une place dans les tribunes.',
      type: 'familial_extra',
      price: '210.00$',
      Image: require("./images/equipe1.png"),
    },
    {
      title: 'pack saison standard',
      description: '350.00$ pour assister à tous les matchs de la saison dans les tribunes.',
      type: 'saison_standard',
      price: '350.00$',
      Image: require("./images/fami3.jpeg"),
    },
    {
      title: 'pack saison vip',
      description: '650.00$ pour assister à tous les matchs de la saison à l\'avant des tribunes.',
      type: 'saison_vip',
      price: '650.00$',
      Image: require("./images/fami5.jpg"),
      
    },
  ];

  const filteredTickets = filter
    ? tickets.filter((ticket) => ticket.type === filter)
    : tickets;

  return (
    <div>
        <div style={{ backgroundColor: '#1861A5', color: 'white', padding: '10px' }}>
        <h4>TICKET</h4>
      </div>
        <div className="container mt-4"></div>
      <div className="text-center mb-4">
        <Button variant="outline-primary" onClick={() => handleFilterChange('')}>Tous les tickets</Button>{' '}
        <Button variant="outline-primary" onClick={() => handleFilterChange('photo')}>Tickets avec photo</Button>{' '}
        <Button variant="outline-primary" onClick={() => handleFilterChange('vip')}>Tickets VIP</Button>
      </div>
      <div className="row">
        {filteredTickets.map((ticket, index) => (
          <div key={index} className="col-md-4">
            <Card style={{ width: '100%', marginBottom: '20px' }}>
              <Card.Img variant="top" src={ticket.Image} 
              style={{ height: '200px', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Title>{ticket.title}</Card.Title>
                <Card.Text>{ticket.description}</Card.Text>
                <Button variant="primary">Acheter un ticket</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickett;
