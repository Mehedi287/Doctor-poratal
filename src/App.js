import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appontment from './Pages/Appontment/Appontment/Appontment';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appontment></Appontment>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="">
          </Route>
          <Route path="">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
