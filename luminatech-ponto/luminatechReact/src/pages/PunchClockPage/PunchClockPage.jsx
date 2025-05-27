// src/pages/PunchClockPage/PunchClockPage.jsx
import React, { useState, useEffect, useCallback } from 'react';
import styles from './PunchClockPage.module.css';

// Importe os componentes que criaremos
import Header from '../../components/Header/Header';
import ClockSection from '../../components/ClockSection/ClockSection';
import DayTrack from '../../components/DayTrack/DayTrack';
import WeekSummary from '../../components/WeekSummary/WeekSummary';
import ModalPonto from '../../components/ModalPonto/ModalPonto';

function PunchClockPage() {
  const [showModal, setShowModal] = useState(false);
  const [jornadaIniciada, setJornadaIniciada] = useState(true);

  const handlePunch = useCallback(() => {
    setJornadaIniciada(prev => !prev);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 4000);
  }, []);

  const userData = {
    name: 'Gabriela Torres',
    role: 'UX Designer',
    profileImg: '/images/gabi.png', // Certifique-se de que o caminho está correto
  };

  const trackItems = [
    { time: '09:30', label: 'Chegada', type: 'start' },
    { time: '12:30', label: 'Almoço', type: 'pause' },
    { time: '18:30', label: 'Saída', type: 'end' },
  ];

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

  return (
    // Remova as classes Bootstrap como 'container-fluid my-3' daqui!
    // Use APENAS a classe do CSS Module para o container principal.
    <div className={styles.mainContainer}>
      <Header userData={userData} />

      {/* Continue usando as classes 'row' e 'col' do Bootstrap para layout interno, se quiser */}
      <div className={`${styles.content} row justify-content-center`}>
        <div className={`${styles.greeting} col-12 text-center mt-4`}>
          <h2 id="saudacao">{getGreeting()}, {userData.name.split(' ')[0]}!</h2>
          <p id="saudacaoDia">Pronta para começar bem o dia? Marque seu ponto!</p>
        </div>

        <div className={`${styles.clockContainer} col-12 d-flex flex-column align-items-center`}>
          <ClockSection onPunch={handlePunch} jornadaIniciada={jornadaIniciada} />
        </div>

        <div className={`${styles.linhaSeparadora} my-4 d-flex justify-content-center`}>
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

        <div className={`${styles.bottomSection} row mt-5`}>
          <DayTrack trackItems={trackItems} />
          <WeekSummary summaryData={summaryData} />
        </div>
      </div>

      <ModalPonto show={showModal} />
    </div>
  );
}

export default PunchClockPage;