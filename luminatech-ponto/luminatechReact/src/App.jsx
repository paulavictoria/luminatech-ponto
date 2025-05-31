// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
// import PontoPage from './pages/PontoPage/PontoPage'; // Exemplo

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a página de Login. Será a página inicial. */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        {/* <Route path="/ponto" element={<PontoPage />} /> */}

        {/* Você pode adicionar uma rota para 404 Not Found também */}
        {/* <Route path="*" element={<div>Página Não Encontrada</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;