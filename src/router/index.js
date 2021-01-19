import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Animation from '../components/animation-js';
import Three from '../components/animation-three';
import Expose from '../components/react-expose';
import Modal from '../components/react-modal';
import Toast from '../components/react-toast';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/react/animation" render={() => <Animation />} />
        <Route exact path="/react/three" render={() => <Three />} />
        <Route exact path="/react/expose" render={() => <Expose />} />
        <Route exact path="/react/modal" render={() => <Modal />} />
        <Route exact path="/react/toast" render={() => <Toast />} />
      </Switch>
    </BrowserRouter>
  );
}
