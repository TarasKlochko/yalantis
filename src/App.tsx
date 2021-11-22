import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Employees from './pages/Employees';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/employees" />} />
        <Route path="employees" element={<Employees />} />
      </Routes>
    </Router>
  );
}

export default App;
