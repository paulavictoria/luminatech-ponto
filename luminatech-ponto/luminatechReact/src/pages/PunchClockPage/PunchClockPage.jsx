// src/pages/PunchClockPage/PunchClockPage.jsx
import React, { useState, useCallback } from 'react';
import styles from './PunchClockPage.module.css';


// Importe os componentes que criaremos (ou que já foram criados)
import ClockSection from '../../components/ClockSection/ClockSection';
import DayTrack from '../../components/DayTrack/DayTrack';
import WeekSummary from '../../components/WeekSummary/WeekSummary';
import ModalPonto from '../../components/ModalPonto/ModalPonto';

// Importe as imagens locais para a linha separadora (se for SVG em arquivo)
// Se for um SVG inline, não precisa importar. O SVG que você usou é inline, então não precisa aqui.

function PunchClockPage() {
    const [showModal, setShowModal] = useState(false);
    // Assumindo que a jornada pode começar ou não. Ajuste o valor inicial conforme a lógica do seu app.
    const [jornadaIniciada, setJornadaIniciada] = useState(false);

    const handlePunch = useCallback(() => {
        setJornadaIniciada(prev => !prev);
        setShowModal(true);
        // Oculta o modal após 3 segundos
        setTimeout(() => {
            setShowModal(false);
        }, 3000);
    }, []);

    // Dados fake para DayTrack
    const trackItems = [
        { time: '09:30', label: 'Chegada', type: 'start' },
        { time: '12:30', label: 'Almoço', type: 'pause' },
        { time: '18:30', label: 'Saída', type: 'end' },
    ];

    // Dados fake para WeekSummary
    const summaryData = {
        totalHours: 40,
        totalHoursExtra: 2,
        hoursToPay: 5,
        hoursToPayNegative: 3,
    };

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Bom dia';
        if (hour < 18) return 'Boa tarde';
        return 'Boa noite';
    };

    // Dados do usuário para a saudação dentro da página
    const localUserData = {
        name: 'Gabriela Torres',
        role: 'UX Designer',
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.content}> {/* Aplica o estilo .content para centralizar e adicionar padding */}
                <div className={styles.greeting}>
                    <h2 id="saudacao">{getGreeting()}, {localUserData.name.split(' ')[0]}!</h2>
                    <p id="saudacaoDia">Pronta para começar bem o dia? Marque seu ponto!</p>
                </div>

                <div className={styles.clockContainer}>
                    <ClockSection onPunch={handlePunch} jornadaIniciada={jornadaIniciada} />
                </div>

                <div className={styles.linhaSeparadora}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1175"
                        height="2"
                        viewBox="0 0 1175 2"
                        fill="none"
                    >
                        <path d="M0 1H1174.5" stroke="#BCBABA" strokeWidth="1" />
                    </svg>
                </div>

                <div className={styles.bottomSection}>
                    <DayTrack trackItems={trackItems} />
                    <WeekSummary summaryData={summaryData} />
                </div>
            </div>

            <ModalPonto show={showModal} />
        </div>

        
    );
}


export default PunchClockPage;