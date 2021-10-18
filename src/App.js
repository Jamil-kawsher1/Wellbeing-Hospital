import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Navigation from './Navigation/Navigation';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';
import AuthProvider from './Context/AuthProvider';

function App() {


  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Navigation></Navigation>
              <Header></Header>
              <Services></Services>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Navigation></Navigation>
              <Login></Login>
              <Footer></Footer>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
