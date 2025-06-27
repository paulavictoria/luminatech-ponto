import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PersonalDataPage.module.css';
import profilePic from '../../assets/dados-pessoais.png';

type PersonalData = {
    fullName: string;
    corporateEmail: string;
    cpf: string;
    role: string;
    admissionDate: string;
};

interface PersonalDataPageProps {
    personalData?: PersonalData;
}

function PersonalDataPage({ personalData: propPersonalData }: PersonalDataPageProps) {
    // Estado principal dos dados
    const [personalData, setPersonalData] = useState(propPersonalData || {
        fullName: 'Gabriela Ribeiro Torres',
        corporateEmail: 'gabriela.torres@luminatech.br',
        cpf: '230.***.***-10',
        role: 'UX Designer - Pleno',
        admissionDate: '18 de novembro de 2023',
    });

    // Estado para modo de edição e formulário
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(personalData);

    // Ao clicar em editar, copia os dados atuais para o formulário
    const handleEditClick = () => {
        setFormData(personalData);
        setIsEditing(true);
    };

    // Atualiza apenas o campo alterado
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Salva as alterações, mantendo os campos não alterados
    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPersonalData({ ...personalData, ...formData });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <main className={styles.mainContent}>
            <h1 className={styles.title}>Dados Pessoais</h1>
            <div className={styles.perfil}>
                <img
                    className={styles.imagemPerfil}
                    src={profilePic}
                    alt={personalData.fullName}
                />
                <div className={styles.descricao}>
                    {isEditing ? (
                        <form onSubmit={handleSave}>
                            <div className={styles.borda}>
                                <div className={styles.h2}>Nome Completo</div>
                                <input
                                    className={styles.inputEdit}
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.borda}>
                                <div className={styles.h2}>E-mail corporativo</div>
                                <input
                                    className={styles.inputEdit}
                                    type="email"
                                    name="corporateEmail"
                                    value={formData.corporateEmail}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.borda}>
                                <div className={styles.h2}>CPF</div>
                                <input
                                    className={styles.inputEdit}
                                    type="text"
                                    name="cpf"
                                    value={formData.cpf}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.borda}>
                                <div className={styles.h2}>Cargo</div>
                                <input
                                    className={styles.inputEdit}
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.borda}>
                                <div className={styles.h2}>Data de Admissão</div>
                                <input
                                    className={styles.inputEdit}
                                    type="text"
                                    name="admissionDate"
                                    value={formData.admissionDate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div style={{display: 'flex', gap: '16px', marginTop: '20px'}}>
                                <button type="submit" className={styles.botaoEditar}>Salvar</button>
                                <button type="button" className={styles.botaoCancelar} onClick={handleCancel}>Cancelar</button>
                            </div>
                        </form>
                    ) : (
                        <>
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
                            <button className={styles.botaoEditar} onClick={handleEditClick}>Editar</button>
                        </>
                    )}
                </div>
            </div>
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