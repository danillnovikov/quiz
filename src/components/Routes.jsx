import React from 'react';

import ReactJS from '../components/pages/ReactJS';
import JavaScript from '../components/pages/JavaScript';
import Html from '../components/pages/Html';
import Css from '../components/pages/Css';
import Notfoundpage from '../components/pages/Notfoundpage';
import { Routes, Route } from 'react-router-dom';

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="react" element={<ReactJS />} />
        <Route path="javascript" element={<JavaScript />} />
        <Route path="html" element={<Html />} />
        <Route path="css" element={<Css />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
