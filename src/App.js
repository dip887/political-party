
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route component={NotFound} path="**" />
    </Routes>
  </Router>
  );
}

export default App;