import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Navigation from './Navigation/Navigation';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Doctors from './Component/Doctors/Doctors';
import ContactUs from './Component/ContactUS/ContactUs';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

function App() {


  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Navigation></Navigation>
              <Header></Header>
              <Services></Services>
              <Footer></Footer>

            </Route>

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
            <PrivateRoute path="/details/:serviceId" >


            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Navigation></Navigation>
              <Doctors></Doctors>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Navigation></Navigation>
              <ContactUs></ContactUs>
              <Footer></Footer>
            </PrivateRoute>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
