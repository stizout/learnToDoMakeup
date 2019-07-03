import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import './App.css';
import AboutUs from './views/AboutUs';

function App() {
  return (
    <Main />
  );
}

const Main = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={AboutUs} />
      {/* <Route path="/" component={App} />
      <Route path="/" component={App} /> */}
    </Switch>
  </Router>
)

export default App;
