import React from 'react';
import './App.css';

import { root } from './DataStructure/Data';
import { DirectoryBrowser } from './DirectoryBrowser/DirectoryBrowser'

function App() {
  return (
    <div>
      <DirectoryBrowser {...root}/>
    </div>
  );
}

export default App;
