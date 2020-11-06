import React from 'react';
import PDFHighlights from './components/PDF-highlighter/pdf-highlighter';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login'
import Nav from './components/Navbar/Nav';
import Home from'./components/Home/Home';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/PDFHighlights" exact component={PDFHighlights} />
              <Route path="/Login" exact component={Login} />
            <Route path="/Signup" exact component={Signup} />
            <Route path="/Dashboard" exact component={Dashboard} />
          </Switch>
        </div>
      </Router>

  );
}

export default App;
