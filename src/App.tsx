import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './view/login';
import { NewUser } from './view/newUser';
import { Home } from './view/home';
import 'bootstrap/dist/js/bootstrap.min.js';
import { store } from './store';
import { Provider } from 'react-redux';
import { NewPassword } from './view/newPassword';
import { Event } from './view/event';

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo_usuario" element={<NewUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar_senha" element={<NewPassword />} />
          <Route path="/criar_evento" element={<Event />} />
        </Routes>
      </Router>
    </Provider>
  );
}

