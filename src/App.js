import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Basic from './routes/Basic';
import Grid1 from './routes/Grid1';
import Grid2 from './routes/Grid2';
import Grid3 from './routes/Grid3';
import Grid4 from './routes/Grid4';
import Grid5 from './routes/Grid5';
import Flex1 from './routes/Flex1';
import Flex2 from './routes/Flex2';
import Flex3 from './routes/Flex3';
import Flex4 from './routes/Flex4';
import Contact from './routes/Contact';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/Basic" component={Basic} />
      <Route path="/grid1" component={Grid1} />
      <Route path="/grid2" component={Grid2} />
      <Route path="/grid3" component={Grid3} />
      <Route path="/grid4" component={Grid4} />
      <Route path="/grid5" component={Grid5} />
      <Route path="/flex1" component={Flex1} />
      <Route path="/flex2" component={Flex2} />
      <Route path="/flex3" component={Flex3} />
      <Route path="/flex4" component={Flex4} />
      <Route path="/contact" component={Contact} />
    </HashRouter>
  )
}

export default App;
