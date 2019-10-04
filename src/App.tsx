import React from 'react';
import './App.css';
import Dashboard from './dashboard/dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import VehicalDetails from './vehicalDetails/vehicalDetails';

const App: React.FC = () => {
  return (
    <Router>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/vehicalDetails" component={VehicalDetails} />
  </Router>

  );
}

export default App;
