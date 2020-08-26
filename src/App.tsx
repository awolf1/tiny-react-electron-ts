import React from 'react';

import Routes from './routes';

import './assets/styles/global.css';
import WindowTitle from './components/WindowTitle';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab);

function App() {
  return (
    <>
      <WindowTitle title="My-app"/>
      <Routes />
    </>
  );
}

export default App;
