import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Page1 from './pages/Page1';
import Home from './pages/Home';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Page1" component={Page1} />
    </BrowserRouter>
  );
}

export default Routes;
