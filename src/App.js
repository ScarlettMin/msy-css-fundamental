import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Grid1 from './routes/Grid1';
import Grid2 from './routes/Grid2';
import Grid3 from './routes/Grid3';
import Grid4 from './routes/Grid4';
import Flex from './routes/Flex';
import Navigation from './components/Navigation';


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/grid1" component={Grid1} />
      <Route path="/grid2" component={Grid2} />
      <Route path="/grid3" component={Grid3} />
      <Route path="/grid4" component={Grid4} />
      <Route path="/flex" component={Flex} />
    </HashRouter>
  );
}

export default App;
