import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Authentication from './pages/Authentication';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/auth' element={<Authentication />} />
      </Routes>
    </Router>
  );
}

export default App;
