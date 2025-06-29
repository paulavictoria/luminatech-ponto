// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import PunchClockPage from './pages/PunchClockPage/PunchClockPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import PersonalDataPage from './pages/PersonalDataPage/PersonalDataPage';
import JustificationsPage from './pages/JustificationsPage/JustificationsPage';
import Header from './components/Header/Header';
import type { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
    userData: {
        name: string;
        role: string;
    };
};

function Layout({ children, userData }: LayoutProps) {
    const location = useLocation();
    // Rotas onde o Header NÃO deve aparecer
    const noHeaderRoutes = ['/login', '/register', '/forgot-password'];
    const shouldShowHeader = !noHeaderRoutes.includes(location.pathname);

    return (
        <>
            {shouldShowHeader && <Header userData={userData} />}
            {children}
        </>
    );
}

function App() {
    const userData = {
        name: 'Gabriela Torres',
        role: 'UX Designer',
    };

    return (
        <Router>
            <Layout userData={userData}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/punch-clock" element={<PunchClockPage />} />
                    <Route path="/history" element={<HistoryPage historyRecords={[]} />} />
                    <Route
                        path="/personal-data"
                        element={
                            <PersonalDataPage
                                personalData={{
                                    fullName: 'Gabriela Torres',
                                    corporateEmail: 'gabriela.torres@email.com',
                                    cpf: '123.456.789-00',
                                    role: 'UX Designer',
                                    admissionDate: '2022-01-01',
                                }}
                            />
                        }
                    />
                    <Route path="/justifications" element={<JustificationsPage />} />
                    {/* <Route path="*" element={<div>Página Não Encontrada</div>} /> */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;