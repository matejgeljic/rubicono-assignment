import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import DetailsPage from './pages/detailspage/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details/:id" component={DetailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
