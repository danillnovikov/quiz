import './index.scss';
import React from 'react';

import RoutesComponent from './components/Routes';
import Links from './components/Links';

function App() {
  return (
    <div className="wrapper">
      <Links />
      <div className="content">
        <RoutesComponent />
      </div>
    </div>
  );
}

export default App;

//npm run deploy
