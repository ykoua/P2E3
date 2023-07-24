import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
function Home() {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
     <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/arr8.jpg")} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
            <Card.Text>
            <p>{t('ex1')}</p>
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '50vh', backgroundColor: '#1861A5' }}>
          <h1>{t('a')}</h1>
        </Container>
        <Carousel.Caption>
          <h3>martin</h3>
          <p> {t('d1')}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '50vh', backgroundColor: '#1861A5' }}>
          <h1>{t('b')}</h1>
        </Container>
        <Carousel.Caption>
          <h3>karl</h3>
          <p>{t('d')}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="d-flex align-items-center justify-content-center" style={{height: '50vh', backgroundColor: '#1861A5' }}>
          <h1>{t('c')}</h1>
        </Container>
        <Carousel.Caption>
          <h3>ahmoud</h3>
          <p>{t('d2')}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    

    </>
     
  );
}

export default Home;