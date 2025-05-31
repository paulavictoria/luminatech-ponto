// src/pages/PersonalDataPage/PersonalDataPage.jsx
import React, { useState } from 'react'; // Importe useState
import PropTypes from 'prop-types';
import styles from './PersonalDataPage.module.css'; // Importe os estilos CSS Module

// Importe as imagens locais
import profilePic from '../../assets/dados-pessoais.png'; // Caminho para a imagem de perfil
// Se precisar de outra imagem, como a de "gabi.png" para o topo da página, importe aqui também:
// import gabiProfileImg from '../../assets/gabi.png';


function PersonalDataPage({ personalData: propPersonalData }) {
    // Dados fake para os dados pessoais
    const [personalData] = useState(propPersonalData || {
        fullName: 'Gabriela Ribeiro Torres',
        corporateEmail: 'gabriela.torres@luminatech.br',
        cpf: '230.***.***-10',
        role: 'UX designer - pleno',
        admissionDate: '18 de novembro de 2023',
    });

    return (
        <main className={styles.mainContent}>
            <h1 className={styles.title}>Dados Pessoais</h1>

            <div className={styles.perfil}>
                <img
                    className={styles.imagemPerfil}
                    src={profilePic} // Usando a imagem importada
                    alt={personalData.fullName}
                />

                <div className={styles.descricao}>
                    <div className={styles.borda}>
                        <div className={styles.h2}>Nome Completo</div>
                        <div className={styles.h1}>{personalData.fullName}</div>
                    </div>

                    <div className={styles.borda}>
                        <div className={styles.h2}>E-mail corporativo</div>
                        <div className={styles.h1}>{personalData.corporateEmail}</div>
                    </div>

                    <div className={styles.borda}>
                        <div className={styles.h2}>CPF</div>
                        <div className={styles.h1}>{personalData.cpf}</div>
                    </div>

                    <div className={styles.borda}>
                        <div className={styles.h2}>Cargo</div>
                        <div className={styles.h1}>{personalData.role}</div>
                    </div>

                    <div className={styles.borda}>
                        <div className={styles.h2}>Data de Admissão</div>
                        <div className={styles.h1}>{personalData.admissionDate}</div>
                    </div>
                </div>
            </div>
            <button className={styles.botaoEditar}>Editar dados pessoais</button>
        </main>
    );
}

PersonalDataPage.propTypes = {
    personalData: PropTypes.shape({
        fullName: PropTypes.string,
        corporateEmail: PropTypes.string,
        cpf: PropTypes.string,
        role: PropTypes.string,
        admissionDate: PropTypes.string,
    }),
};

export default PersonalDataPage;