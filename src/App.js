import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Navigation from './Navigation/Navigation';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Navigation></Navigation>
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
