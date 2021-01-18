import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Animation from '../components/animation-js';
import Three from '../components/animation-three';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/react/animation" render={() => <Animation />} />
        <Route exact path="/react/three" render={() => <Three />} />
      </Switch>
    </BrowserRouter>
  );
}
