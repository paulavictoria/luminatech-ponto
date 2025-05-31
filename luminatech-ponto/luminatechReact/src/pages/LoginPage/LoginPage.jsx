// src/pages/LoginPage/LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

// Seus imports de imagem
import logoLumina from '../../assets/logo_lumina.png';
import logoGoogle from '../../assets/logo-google.png';
import logoMicrosoft from '../../assets/logo-microsoft.png'; // Caminho pode precisar de ajuste
import artLateral1 from '../../assets/art-lateral1.png'; // <--- ESTE É IMPORTANTE NOVAMENTE

function LoginPage() {
  const [emailCpf, setEmailCpf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!emailCpf || !password) {
      setError("Por favor, preencha o e-mail ou CPF e a senha antes de continuar.");
      return;
    }

    console.log('Dados de Login:', { emailCpf, password });
  };

  return (
    <div className={`container-fluid ${styles.loginContainer}`}>
   <div className={`row flex-grow-1 w-100 g-0 ${styles.rowLayout}`}>
        {/* Coluna da Esquerda (Formulário) */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div id="container-left" className={`login-form text-center ${styles.containerLeft}`}>
            <img src={logoLumina} alt="LuminaTech Logo" className={`logo mb-4 ${styles.logo}`} />
            <h2 className={`welcome ${styles.welcome}`}>Seja Bem-Vindo(a)! 👋</h2>
            <form onSubmit={handleSubmit}>
              {error && <div className={`alert alert-danger ${styles.errorMessage}`} role="alert">{error}</div>}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="campoLogin"
                  className="form-control"
                  placeholder="E-mail ou CPF"
                  required
                  value={emailCpf}
                  onChange={(e) => setEmailCpf(e.target.value)}
                />
                <label htmlFor="campoLogin">E-mail ou CPF</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  id="campoSenha"
                  className="form-control"
                  placeholder="Digite sua senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="campoSenha">Digite sua senha</label>
              </div>
              <Link to="/forgot-password" id="forgetPassword" className={`d-block mb-3 ${styles.forgetPassword}`}>
                Recuperar senha
              </Link>
              <button type="submit" id="btn-entrar" className={`btn btn-secondary w-100 mb-3 ${styles.btnEntrar}`}>
                Entrar
              </button>
              <div className={`divider my-3 ${styles.divider}`}>Ou</div>
              <button id="btn-google" type="button" className={`btn btn-outline-danger w-100 mb-2 ${styles.btnGoogle}`}>
                <img src={logoGoogle} alt="Google Logo" className={`btn-logo me-2 ${styles.btnLogo}`} />
                Entre com o Google
              </button>
              <button id="btn-microsoft" type="button" className={`btn btn-outline-primary w-100 ${styles.btnMicrosoft}`}>
                <img src={logoMicrosoft} alt="Microsoft Logo" className={`btn-logo me-2 ${styles.btnLogo}`} />
                Entre com a Microsoft
              </button>
            </form>
            <p id="p-conta" className={`mt-4 ${styles.pConta}`}>
              Não possui uma conta?{' '}
              <Link to="/register" id="btn-cadastrar" className={styles.btnCadastrar}>
                Cadastre-se
              </Link>
            </p>
            {/* NOVO: Direitos autorais no rodapé, se você quiser. */}
            <p className={styles.copyright}>© 2025 TODOS OS DIREITOS RESERVADOS</p>
          </div>
        </div>
        {/* Coluna da Direita (Imagem) */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div id="container-right" className={`login-image ${styles.containerRight}`}>
            <img src={artLateral1} alt="Imagem de Login" className={`${styles.loginImage}`} />

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
