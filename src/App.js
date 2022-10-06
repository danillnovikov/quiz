import './index.scss';
import React from 'react';
// import { Provider } from 'react-redux';
// import store from './redux/store';

import RoutesComponent from './components/Routes';
import Links from './components/Links';

function App() {
  return (
    <div className="wrapper">
      {/* <Provider store={store}> */}
      <Links />
      <div className="content">
        <RoutesComponent />
      </div>
      {/* </Provider> */}
    </div>
  );
}

export default App;

//npm run deploy
