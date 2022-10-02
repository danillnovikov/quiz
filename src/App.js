import './index.scss';
import React from 'react';

import ReactJS from './components/pages/ReactJS.jsx';
import JavaScript from './components/pages/JavaScript';
import Html from './components/pages/Html';
import Css from './components/pages/Css';
import Home from './components/pages/Home';
import Notfoundpage from './components/pages/Notfoundpage';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="*" element={<Navigate replace to="/home" />} /> */}
          <Route index path="/" element={<Home />} />
          <Route path="javascript" element={<JavaScript />} />
          <Route path="react" element={<ReactJS />} />
          <Route path="html" element={<Html />} />
          <Route path="css" element={<Css />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

//npm run deploy
