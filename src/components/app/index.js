import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Cats, Home, About, CatItem} from '../pages';
import Header from '../header';

import './app.scss';

const App = () => {
  return (
    <Router>
      <Header />

      <Route path='/' exact component={Home} />
      <Route path='/cats' exact component={Cats} />
      <Route path='/about' component={About} />

      <Route path='/cats/:id' render={
          ({match}) => {
              const {id} = match.params;
              return <CatItem catId={id} />
          }
      } />


    </Router>
  );
};

export default App;
