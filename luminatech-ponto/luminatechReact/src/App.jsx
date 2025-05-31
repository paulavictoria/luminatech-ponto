// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Importe useLocation
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import PunchClockPage from './pages/PunchClockPage/PunchClockPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import PersonalDataPage from './pages/PersonalDataPage/PersonalDataPage';
import JustificationsPage from './pages/JustificationsPage/JustificationsPage';
import Header from './components/Header/Header';

function App() {
    const userData = {
        name: 'Gabriela Torres',
        role: 'UX Designer',
    };

    // Componente para decidir se o Header deve ser exibido
    const Layout = ({ children }) => {
        const location = useLocation();
        // Defina as rotas onde o Header NÃO deve aparecer
        const noHeaderRoutes = ['/', '/register', '/forgot-password'];
        const shouldShowHeader = !noHeaderRoutes.includes(location.pathname);

        return (
            <>
                {shouldShowHeader && <Header userData={userData} />}
                {children}
            </>
        );
    };

    return (
        <Router>
            <Layout> {/* Envolve todas as rotas com o componente Layout */}
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />

                    <Route path="/punch-clock" element={<PunchClockPage />} />
                    <Route path="/history" element={<HistoryPage historyRecords={[]} />} />
                    <Route path="/personal-data" element={<PersonalDataPage personalData={{}} />} />
                    <Route path="/justifications" element={<JustificationsPage />} />

                    {/* Você pode adicionar uma rota para 404 Not Found também */}
                    {/* <Route path="*" element={<div>Página Não Encontrada</div>} /> */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;