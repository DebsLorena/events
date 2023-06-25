import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './view/login';
import { NewUser } from './view/newUser';
import { Home } from './view/home';
import 'bootstrap/dist/js/bootstrap.min.js';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/novo_usuario" element={<NewUser />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

