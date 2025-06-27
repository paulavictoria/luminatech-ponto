// src/components/ClockSection/ClockSection.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ClockSection.module.css';

interface ClockSectionProps {
  onPunch: () => void;
  jornadaIniciada: boolean;
}

function ClockSection({ onPunch, jornadaIniciada }: ClockSectionProps) {
  const [time, setTime] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hh}:${mm}`);
    };

    // Atualiza o relógio a cada segundo
    const intervalId = setInterval(updateClock, 1000);
    updateClock(); // Chama imediatamente para evitar atraso inicial

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  const handleButtonClick = () => {
    setIsAnimated(true);
    setTimeout(() => setIsAnimated(false), 400); // Remove a classe de animação após 400ms
    onPunch(); // Chama a função passada via props
  };

  return (
    <div className={styles.clockCircle}>
      <div className={styles.clockCircleSvgBorder}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="386"
          height="388"
          viewBox="0 0 386 388"
          fill="none"
        >
          <path
            d="M193 7.5C295.412 7.5 378.5 90.9623 378.5 194C378.5 297.038 295.412 380.5 193 380.5C90.5877 380.5 7.5 297.038 7.5 194C7.5 90.9623 90.5877 7.5 193 7.5Z"
            stroke="url(#paint0_linear_415_44)"
            strokeWidth="15"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_415_44"
              x1="193"
              y1="0"
              x2="193"
              y2="388"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.379808" stopColor="#6B1294" />
              <stop offset="0.610577" stopColor="#9135BB" />
              <stop offset="0.725962" stopColor="#A347CE" />
              <stop offset="0.841346" stopColor="#B659E2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.clockTime}>{time}</div>
      <div className={styles.clockLabel}>
        {jornadaIniciada ? 'Jornada Iniciada!' : 'Iniciar Jornada'}
      </div>
      <button
        className={styles.clockBtn}
        onClick={handleButtonClick}
        title={jornadaIniciada ? 'Pausar Jornada' : 'Iniciar Jornada'}
      >
        <span className={`${styles.clockBtnIcon} ${isAnimated ? styles.animated : ''}`}>
          {/* Ícone Play (Iniciar) */}
          <svg
            className={styles.iconPlay}
            viewBox="0 0 48 48"
            style={{ display: jornadaIniciada ? 'none' : 'block' }}
          >
            <circle cx="24" cy="24" r="22" fill="none" />
            <polygon points="18,14 36,24 18,34" fill="#fff" /> {/* Adicione fill="#fff" */}
          </svg>
          {/* Ícone Pause (Pausar) */}
          <svg
            className={styles.iconPause}
            viewBox="0 0 48 48"
            style={{ display: jornadaIniciada ? 'block' : 'none' }}
          >
            <circle cx="24" cy="24" r="22" fill="none" />
            <rect x="17" y="14" width="5" height="20" rx="2" fill="#fff" />
            <rect x="26" y="14" width="5" height="20" rx="2" fill="#fff" />
          </svg>
        </span>
      </button>
    </div>
  );
}

ClockSection.propTypes = {
  onPunch: PropTypes.func.isRequired,
  jornadaIniciada: PropTypes.bool.isRequired,
};

export default ClockSection;