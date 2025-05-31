// src/components/DayTrack/DayTrack.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './DayTrack.module.css';

// SVG para Chegada/Saída
const ClockInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="#e1baff" />
    <path
      d="M12 7v5l4 2"
      stroke="#6B1294"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

// SVG para Almoço/Pausa
const PauseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="#e1baff" />
    <path
      d="M8 12h8"
      stroke="#6B1294"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

function DayTrack({ trackItems }) {
  return (
    <div className={`${styles.dayTrack} col-md-5 mb-4 mb-md-0`}>
      <h3 id="day-know">Acompanhe seu dia</h3>
      <ul className={styles.trackList} id="track-list">
        {trackItems.map((item, index) => (
          <li key={index} className={styles.trackItem}>
            <span className={styles.trackIcon}>
              {item.type === 'start' || item.type === 'end' ? <ClockInIcon /> : <PauseIcon />}
            </span>
            <div className={styles.trackInfo}>
              <span className={styles.trackTime}>{item.time}</span>
              <span className={styles.trackLabel}>{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

DayTrack.propTypes = {
  trackItems: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['start', 'pause', 'end']).isRequired,
    })
  ).isRequired,
};

export default DayTrack;