// src/pages/JustificationsPage/JustificationsPage.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './JustificationsPage.module.css';

// Importe as imagens locais
import justificativaIcon from '../../assets/justificativa.png'; // Caminho para a imagem de justificativa
import ajusteIcon from '../../assets/ajuste.png'; // Caminho para a imagem de ajuste
import calendarIcon from '../../assets/Group-381.png'; // Ícone de calendário para a tabela de ajustes
import detailsIcon from '../../assets/Group-426.png'; // Ícone de detalhes para a tabela de ajustes
import comprovanteImg from '../../assets/image-1.png'; // Imagem de comprovante para a seção de acompanhamento

function JustificationsPage({ initialAdjustments = [], initialJustifications = [] }) {
    // Dados fake para a tabela de ajustes
    const [adjustments] = useState(initialAdjustments.length > 0 ? initialAdjustments : [
        {
            id: 1,
            day: 'Sexta',
            date: new Date('2025-05-12'),
            originalTime: '08:30 - 17:30',
            newTime: '08:00 - 17:00',
            status: 'Aprovado',
        },
        {
            id: 2,
            day: 'Sexta',
            date: new Date('2025-05-12'),
            originalTime: '08:30 - 17:30',
            newTime: '08:00 - 17:00',
            status: 'Em análise',
        },
        {
            id: 3,
            day: 'Sexta',
            date: new Date('2025-05-12'),
            originalTime: '08:30 - 17:30',
            newTime: '08:00 - 17:00',
            status: 'Recusado',
        },
    ]);

    // Dados fake para a seção de acompanhamento de justificativas
    const [justificationRecords] = useState(initialJustifications.length > 0 ? initialJustifications : [
        {
            id: 1,
            image: comprovanteImg,
            title: 'Consulta médica',
            status: 'Em análise',
            date: '19/06',
        },
        {
            id: 2,
            image: comprovanteImg,
            title: 'Doação de sangue',
            status: 'Em análise',
            date: '12/06',
        },
        {
            id: 3,
            image: comprovanteImg,
            title: 'Acompanhamento hospitalar',
            status: 'Aprovado',
            date: '26/05',
        },
    ]);

    // Contadores para os cartões de status
    const approvedCount = justificationRecords.filter(j => j.status === 'Aprovado').length;
    const pendingCount = justificationRecords.filter(j => j.status === 'Em análise').length;
    const rejectedCount = justificationRecords.filter(j => j.status === 'Recusado').length;


    const handleRequest = (type) => {
        alert(`Funcionalidade de solicitar ${type} em desenvolvimento!`);
        // Aqui você pode adicionar lógica para abrir modais ou redirecionar
    };

    return (
        <main className={styles.mainContent}>
            <section className={styles.sectionSuperior}>
                <div className={styles.sectionSuperiorEsquerda}>
                    <h2>Solicitar ajustes e justificativas</h2>
                    <p>Solicite um reajuste de horários ou envie uma justificativa</p>

                    <div className={styles.cardsEsquerda}>
                        <div className={styles.cardJustificativa} onClick={() => handleRequest('justificativa')}>
                            <div className={styles.cardJustificativaConteudo}>
                                <div className={styles.cardJustificativaConteudoTopo}>
                                    <img className={styles.cardJustificativaImagem} src={justificativaIcon} alt="justificativa" />
                                    <h3>Justificativa</h3>
                                </div>
                                <p>Envie sua justificativa de falta ou atraso</p>
                            </div>
                        </div>

                        <div className={styles.cardAjuste} onClick={() => handleRequest('ajuste')}>
                            <div className={styles.cardAjusteConteudo}>
                                <div className={styles.cardAjusteConteudoTopo}>
                                    <img className={styles.cardAjusteImagem} src={ajusteIcon} alt="ajuste" />
                                    <h3>Ajuste</h3>
                                </div>
                                <p>Solicite um ajuste de horas</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.sectionSuperiorDireita}>
                    <h2>Status ajustes e justificativas</h2>

                    <div className={styles.cardsDireita}>
                        <div className={styles.cardStatus}>
                            <h3>Aprovadas</h3>
                            <div className={styles.statusNumero}>{approvedCount}</div>
                        </div>
                        <div className={styles.cardStatus}>
                            <h3>Pendentes</h3>
                            <div className={styles.statusNumero}>{pendingCount}</div>
                        </div>
                        <div className={styles.cardStatus}>
                            <h3>Recusadas</h3>
                            <div className={styles.statusNumero}>{rejectedCount}</div>
                        </div>
                    </div>
                </div>
            </section>

            <h2 className={styles.tituloH2}>Acompanhe seus ajustes de horário</h2>

            <section>
                <table className={styles.tabela}>
                    <thead className={styles.tabelaThead}>
                        <tr>
                            <th className={styles.primeiraTh}>Dia da semana</th>
                            <th>Original</th>
                            <th>Alterar para</th>
                            <th>Status</th>
                            <th className={styles.icone}></th>
                        </tr>
                    </thead>
                    <tbody className={styles.tabelaTbody}>
                        {adjustments.length > 0 ? (
                            adjustments.map((adjustment) => (
                                <tr key={adjustment.id}>
                                    <td>
                                        <div className={styles.diaCard}>
                                            <img src={calendarIcon} alt="ícone de calendário" />
                                            <div>{adjustment.day}, {adjustment.date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}</div>
                                        </div>
                                    </td>
                                    <td>{adjustment.originalTime}</td>
                                    <td>{adjustment.newTime}</td>
                                    <td><span className={`${styles.status} ${styles[adjustment.status.toLowerCase().replace(' ', '')]}`}>{adjustment.status}</span></td>
                                    <td className={styles.icone}>
                                        <img src={detailsIcon} alt="Ver detalhes" />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className={styles.noRecords}>Nenhum ajuste de horário encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>

            <h3 className={styles.tituloH3}>Acompanhe suas justificativas</h3>
            <section>
                <div className={styles.acompanhamento}>
                    {justificationRecords.length > 0 ? (
                        justificationRecords.map((record) => (
                            <div className={styles.cards} key={record.id}>
                                <div>
                                    <img className={styles.comprovante} src={record.image} alt="Comprovante" />
                                </div>
                                <div className={styles.cardsInfo}>
                                    <h3>{record.title}</h3>
                                    <span className={`${styles.status} ${styles[record.status.toLowerCase().replace(' ', '')]}`}>{record.status}</span>
                                    <div className={styles.data}>{record.date}</div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className={styles.noRecordsFullWidth}>Nenhuma justificativa recente encontrada.</p>
                    )}
                </div>
            </section>
        </main>
    );
}

JustificationsPage.propTypes = {
    initialAdjustments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            day: PropTypes.string.isRequired,
            date: PropTypes.instanceOf(Date).isRequired,
            originalTime: PropTypes.string.isRequired,
            newTime: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
        })
    ),
    initialJustifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
    ),
};

export default JustificationsPage;