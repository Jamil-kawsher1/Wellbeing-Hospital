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
import Details from './Component/Details/Details';
import NotFound from './Component/NotFound/NotFound';

function App() {


  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route path="/home">

              <Header></Header>
              <Services></Services>


            </Route>

            <Route exact path="/">

              <Header></Header>
              <Services></Services>

            </Route>

            <Route path="/login">

              <Login></Login>

            </Route>

            <PrivateRoute path="/details/:serviceId" >
              <Details></Details>

            </PrivateRoute>
            <PrivateRoute path="/doctors">

              <Doctors></Doctors>

            </PrivateRoute>
            <PrivateRoute path="/contact">

              <ContactUs></ContactUs>

            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
