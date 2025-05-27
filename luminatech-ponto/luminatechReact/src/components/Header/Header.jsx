// src/components/Header/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

import gabiProfileImg from '../../assets/gabi.png';
import notificationIcon from '../../assets/notifications.svg';

function Header({ userData }) {
    const location = useLocation();

    return (
        <div className={`${styles.header} row align-items-center px-4 py-3`}>
            <div className={`${styles.profile} col-auto d-flex align-items-center`}>
                <img
                    src={gabiProfileImg}
                    alt="Foto de perfil"
                    className={`${styles.profileImg} me-3`}
                />
                <div className={styles.profileInfo}>
                    <span className={styles.nameUsuario}>{userData.name}</span>
                    <span className={styles.roleUsuario}>{userData.role}</span>
                </div>
            </div>
            <div id="nav-bar" className={`${styles.nav} col d-flex justify-content-center align-items-center`}>
                <Link
                    to="/punch-clock"
                    className={`${styles.navBtn} ${location.pathname === '/punch-clock' || location.pathname === '/' ? styles.active : ''} me-2`}
                >
                    Página Inicial
                </Link>
                <Link
                    to="/history"
                    className={`${styles.navBtn} ${location.pathname === '/history' ? styles.active : ''} me-2`}
                >
                    Meu Histórico
                </Link>
                {/* ESTE LINK É O IMPORTANTE PARA DADOS PESSOAIS */}
                <Link
                    to="/personal-data" // <-- Certifique-se que o 'to' está correto
                    className={`${styles.navBtn} ${location.pathname === '/personal-data' ? styles.active : ''} me-2`}
                >
                    Dados Pessoais
                </Link>
                <Link
                    to="/justifications"
                    className={`${styles.navBtn} ${location.pathname === '/justifications' ? styles.active : ''} me-2`}
                >
                    Justificativas
                </Link>

                <span className={`${styles.notif} ms-2 position-relative`}>
                    <img src={notificationIcon} alt="Notificações" className={styles.notificationSvg} />
                    <span className={styles.notifDotCustom}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="10"
                            viewBox="0 0 9 10"
                            fill="none"
                        >
                            <path
                                d="M8.75 5.125C8.75 7.40317 7.0151 9.25 4.875 9.25C2.7349 9.25 1 7.40317 1 5.125C1 2.84683 2.7349 1 4.875 1C7.0151 1 8.75 2.84683 8.75 5.125Z"
                                fill="#FF7029"
                                stroke="white"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                </span>
            </div>
        </div>
    );
}

Header.propTypes = {
    userData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    }).isRequired,
};

export default Header;