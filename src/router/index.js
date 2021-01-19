import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Animation from '../components/animation-js';
import Three from '../components/animation-three';
import Expose from '../components/react-expose';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/react/animation" render={() => <Animation />} />
        <Route exact path="/react/three" render={() => <Three />} />
        <Route exact path="/react/expose" render={() => <Expose />} />
      </Switch>
    </BrowserRouter>
  );
}
