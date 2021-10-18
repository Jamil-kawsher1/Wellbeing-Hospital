import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Component/Header/Header';

function App() {


  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
      <Route path="/">
<Navigation></Navigation>
<Header></Header>
      </Route>

     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
