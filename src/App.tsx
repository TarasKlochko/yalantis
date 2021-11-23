import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Employees from './pages/Employees/Employees';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/employees" />} />
        <Route path="employees" element={<Employees />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
