import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './RegisterPage.module.css';

// Importe suas imagens locais aqui
import logoLumina from '../../assets/logo_lumina.png';
import artLateral3 from '../../assets/art-lateral3.png'; // Caminho pode precisar de ajuste

function RegisterPage() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [emailCpf, setEmailCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!nomeUsuario || !emailCpf || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos antes de continuar.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem. Por favor, verifique.");
      return;
    }

    console.log('Dados de Registro:', { nomeUsuario, emailCpf, password });
    alert('Cadastro simulado realizado com sucesso!');
    navigate('/');
  };

  return (
    <div className={`container-fluid ${styles.registerContainer}`}>
      <div className={`row flex-grow-1 w-100 g-0 ${styles.rowLayout}`}>
        {/* Coluna da Esquerda (Formulário) */}
        {/* Manter col-md-6 conforme o seu JSX original. As correções de largura serão feitas no CSS. */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div id="container-left" className={`register-form text-center ${styles.containerLeft}`}>
            <img src={logoLumina} alt="LuminaTech Logo" className={`logo mb-4 ${styles.logo}`} />
            <h2 className={`create ${styles.create}`}>Crie sua conta! 👋</h2>
            <form onSubmit={handleSubmit}>
              {error && <div className={`alert alert-danger ${styles.errorMessage}`} role="alert">{error}</div>}

              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="nomeUsuario"
                  className="form-control"
                  placeholder="Nome de Usuário"
                  required
                  value={nomeUsuario}
                  onChange={(e) => setNomeUsuario(e.target.value)}
                />
                <label htmlFor="nomeUsuario">Nome de Usuário</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="emailCpf"
                  className="form-control"
                  placeholder="E-mail ou CPF"
                  required
                  value={emailCpf}
                  onChange={(e) => setEmailCpf(e.target.value)}
                />
                <label htmlFor="emailCpf">E-mail ou CPF</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Crie sua senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Crie sua senha</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirme sua senha"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label htmlFor="confirmPassword">Confirme sua senha</label>
              </div>

              <button type="submit" id="btn-cadastrar" className={`btn w-100 mb-3 ${styles.btnCadastrar}`}>
                Cadastrar
              </button>

              <div className={`divider my-3 ${styles.divider}`}>Ou</div>

              <p id="p-conta" className={`mt-4 ${styles.pConta}`}>
                Já possui uma conta?{' '}
                <Link to="/" id="btn-entrar-cadastro" className={styles.btnEntrarCadastro}>
                  Entrar
                </Link>
              </p>
              <p className={styles.copyright}>© 2025 TODOS OS DIREITOS RESERVADOS</p>
            </form>
          </div>
        </div>
        {/* Coluna da Direita (Imagem) */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div id="container-right" className={`login-image ${styles.containerRight}`}>
            <img src={artLateral3} alt="Imagem Lateral de Cadastro" className={`${styles.loginImage}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;