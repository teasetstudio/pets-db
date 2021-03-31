import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Cats, Home, About} from '../pages';
import Header from '../header';
import './app.scss';

const App = () => {
  return (
    <Router>
      <Header />

      <Route path='/' exact component={Home} />
      <Route path='/cats' component={Cats} />
      <Route path='/about' component={About} />
    </Router>
  );
};

export default App;
