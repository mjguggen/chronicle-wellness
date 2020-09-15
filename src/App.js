import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Routes/Home'
import PrivacyPolicy from './Routes/PrivacyPolicy'
import Terms from './Routes/Terms'

import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/terms" component={Terms} />
      </Switch>
    </Router>
  );
}

export default App;
