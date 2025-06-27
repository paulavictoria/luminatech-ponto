// src/components/ModalPonto/ModalPonto.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalPonto.module.css';

interface ModalPontoProps {
  show: boolean;
  onClose: () => void;
}

function ModalPonto({ show, onClose }: ModalPontoProps) {
  if (!show) return null;

  return (
    <div className={styles.modalPontoBackdrop}>
      <div className={`${styles.modalPontoRectangle} animate__fadeInDown`}>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar modal">
          ×
        </button>
        <span className={styles.modalPontoText}>Seu ponto foi registrado com sucesso!</span>
          </div>
      </div>
  );
}

ModalPonto.propTypes = {
  show: PropTypes.bool.isRequired,
   onClose: PropTypes.func.isRequired,
};

export default ModalPonto;