// src/components/ModalPonto/ModalPonto.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalPonto.module.css';

function ModalPonto({ show }) {
  if (!show) return null;

  return (
    <div className={styles.modalPontoBackdrop}>
      <div className={`${styles.modalPontoRectangle} animate__fadeInDown`}>
        <span className={styles.modalPontoText}>Seu ponto foi registrado com sucesso!</span>
      </div>
    </div>
  );
}

ModalPonto.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ModalPonto;