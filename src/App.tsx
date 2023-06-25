import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './view/login';
import { NewUser } from './view/newUser';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/novo_usuario" element={<NewUser />} />
      </Routes>
    </Router>
  );
}

