import React from 'react';
import './App.css';
import Dashboard from './dashboard/dashboard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
    <Route exact path="/" component={Dashboard} />
  </Router>

  );
}

export default App;
