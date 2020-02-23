import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import About from './pages/About';
import Nav from './components/Nav';
import Foot from './components/Footer/index';

 
const App = () => {
  return (
    <div>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Contact} />
          <Route exact path="/about" component={About} />
         
        </Switch>
        <Foot />
      </div>
    </Router>
  
    </div>
  );
}

export default App;