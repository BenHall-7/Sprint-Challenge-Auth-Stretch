import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import JokesPage from "./components/JokesPage";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/" component={JokesPage}/>
      </Router>
    </div>
  );
}

export default App;
