import './assets/styles/App.scss';

import React from 'react';

import LayoutComponent from './components/LayoutComponent.jsx';
import Routers from './router/routers.jsx';

function App() {
  return (
    <LayoutComponent>
      <Routers/>
    </LayoutComponent>
  );
}

export default App;
