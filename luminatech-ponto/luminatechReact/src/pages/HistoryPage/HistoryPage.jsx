// src/pages/HistoryPage/HistoryPage.jsx
import React, { useState } from 'react'; // Importe useState
import PropTypes from 'prop-types'; // Para validação de props
import styles from './HistoryPage.module.css'; // Importe os estilos CSS Module

function HistoryPage({ historyRecords: propHistoryRecords }) {
    // Dados de exemplo para o histórico
    const [historyRecords] = useState(propHistoryRecords.length > 0 ? propHistoryRecords : [
        {
            date: new Date('2025-05-26T00:00:00'), // Ontem
            entry: new Date('2025-05-26T09:00:00'),
            breakStart: new Date('2025-05-26T12:00:00'),
            breakEnd: new Date('2025-05-26T13:00:00'),
            exit: new Date('2025-05-26T18:00:00'),
            totalHours: '8h 00m',
        },
        {
            date: new Date('2025-05-25T00:00:00'), // Dois dias atrás
            entry: new Date('2025-05-25T08:30:00'),
            breakStart: new Date('2025-05-25T12:30:00'),
            breakEnd: new Date('2025-05-25T13:30:00'),
            exit: new Date('2025-05-25T17:30:00'),
            totalHours: '8h 00m',
        },
        {
            date: new Date('2025-05-24T00:00:00'), // Três dias atrás
            entry: new Date('2025-05-24T09:15:00'),
            breakStart: new Date('2025-05-24T12:15:00'),
            breakEnd: new Date('2025-05-24T13:45:00'),
            exit: new Date('2025-05-24T18:15:00'),
            totalHours: '7h 45m', // Exemplo com horas não cheias
        },
    ]);

    return (
        <main className={styles.mainContent}>
            <div className={styles.topSection}>
                <div className={styles.titleSection}>
                    <h1 className={styles.title}>Meu Histórico</h1>
                </div>
                <div className={styles.cards}>
                    <div className={styles.dailyMonthlyCard}>
                        <h3>Banco de horas diário</h3>
                        <div className={styles.hours}>8h</div> {/* Este valor será estático por enquanto, ou pode ser calculado futuramente */}
                    </div>
                    <div className={styles.dailyMonthlyCard}>
                        <h3>Banco de horas mensal</h3>
                        <div className={styles.hours}>120h</div> {/* Este valor será estático por enquanto, ou pode ser calculado futuramente */}
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.tableContainer}>
                    <table className={styles.historyTable}>
                        <thead className={styles.historyTableHead}>
                            <tr>
                                <th>Data</th>
                                <th>Entrada</th>
                                <th>Intervalo</th>
                                <th>Retorno</th>
                                <th>Saída</th>
                                <th>Total de Horas</th>
                            </tr>
                        </thead>
                        <tbody className={styles.historyTableBody}>
                            {historyRecords.map((record, index) => (
                                // É importante usar uma key única e estável. Para dados de exemplo estáticos, index pode ser ok,
                                // mas em uma aplicação real, use um ID único do registro.
                                <tr key={index}>
                                    <td>{record.date ? record.date.toLocaleDateString('pt-BR') : '-'}</td>
                                    <td>{record.entry ? record.entry.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '-'}</td>
                                    <td>{record.breakStart ? record.breakStart.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '-'}</td>
                                    <td>{record.breakEnd ? record.breakEnd.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '-'}</td>
                                    <td>{record.exit ? record.exit.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '-'}</td>
                                    <td>{record.totalHours || '-'}</td>
                                </tr>
                            ))}
                            {historyRecords.length === 0 && (
                                <tr>
                                    <td colSpan="6" className={styles.noRecords}>Nenhum histórico disponível.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

HistoryPage.propTypes = {
    // historyRecords agora é opcional, pois estamos fornecendo dados fake se nada for passado.
    // Se você *sempre* quiser que o App.jsx passe essa prop, mantenha .isRequired
    historyRecords: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.instanceOf(Date),
            entry: PropTypes.instanceOf(Date),
            breakStart: PropTypes.instanceOf(Date),
            breakEnd: PropTypes.instanceOf(Date),
            exit: PropTypes.instanceOf(Date),
            totalHours: PropTypes.string,
        })
    ), // Removido .isRequired para flexibilidade
};

export default HistoryPage;