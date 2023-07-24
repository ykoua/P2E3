
import './App.css';
import NavComponent from './Navbar';
import { useTranslation } from 'react-i18next';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Services';
import Contact from './Contact';
import Booking from './Booking';
import Coach from './coach';
import Club from './club';
import Location from './Location';
import Tickett from './Tickett';
import Training from './Traning';
import Tournament from './Tournament';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const swapLanguage = () => {
    if (i18n.language === 'en') {
      changeLanguage('fr');
    } else {
      changeLanguage('en');
    }
  };
  return (
    
    <Router>
    <div className="App">
      <NavComponent />
      <div className='content'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>  
          <Route path='/Services'>
            <Services />
          </Route>   
          <Route path='/Contact'>
            <Contact />
          </Route>  
          <Route path='/Booking'>
            <Booking />
          </Route> 
          <Route path='/coach'>
            <Coach />
          </Route> 
          <Route path='/Club'>
            <Club />
          </Route> 
          <Route path='/Location'>
            <Location />
          </Route> 
          <Route path='/Tickett'>
            <Tickett />
          </Route> 
          <Route path='/Training'>
            <Training />
          </Route>
          <Route path='/Tournament'>
            <Tournament />
          </Route>
      </Switch>
      </div>
      <button onClick={() => swapLanguage()}>{t('lang')}</button>
      
    </div>
    </Router>

    
    
  );
}

export default App;
