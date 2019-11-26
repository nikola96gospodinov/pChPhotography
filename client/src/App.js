import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './App.css'

import Routes from './Routes'

library.add(fab)
library.add(fas)

function App() {
  return (
    <StyleRoot>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </StyleRoot>
  );
}

export default App;