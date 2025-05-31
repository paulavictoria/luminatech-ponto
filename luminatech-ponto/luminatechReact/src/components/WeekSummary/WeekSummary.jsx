// src/components/WeekSummary/WeekSummary.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeekSummary.module.css';

function WeekSummary({ summaryData }) {
  return (
    <div className={`${styles.weekSummary} col-md-7`}>
      <h3>Resumo da semana</h3>
      <div className={`${styles.summaryCards} d-flex`}>
        <div className={`${styles.summaryCard} me-3`}>
          <div className={styles.summaryTitle}>Total de horas</div>
          <div className={styles.summaryValue}>{summaryData.totalHours}</div>
          <div className={styles.summaryExtra}>+{summaryData.totalHoursExtra} Horas</div>
        </div>
        <div className={styles.summaryCard}>
          <div className={styles.summaryTitle}>Horas a pagar</div>
          <div className={styles.summaryValue}>{summaryData.hoursToPay}</div>
          <div className={`${styles.summaryExtra} ${styles.negative}`}>-{summaryData.hoursToPayNegative} Horas</div>
        </div>
      </div>
    </div>
  );
}

WeekSummary.propTypes = {
  summaryData: PropTypes.shape({
    totalHours: PropTypes.number.isRequired,
    totalHoursExtra: PropTypes.number.isRequired,
    hoursToPay: PropTypes.number.isRequired,
    hoursToPayNegative: PropTypes.number.isRequired,
  }).isRequired,
};

export default WeekSummary;