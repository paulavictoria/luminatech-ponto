// src/pages/RegisterPage/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './RegisterPage.module.css'; // Supondo que o CSS também será para RegisterPage

// Seus imports de imagem
import logoLumina from '../../assets/logo_lumina.png';
import logoGoogle from '../../assets/logo-google.png';
import logoMicrosoft from '../../assets/logo-microsoft.png';
import artLateral1 from '../../assets/art-lateral1.png';

function RegisterPage() { // Nome do componente consistente com o arquivo
  const [nomeUsuario, setNomeUsuario] = useState(''); // Declarado
  const [emailCpf, setEmailCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Declarado
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    // Validações para campos de registro
    if (!nomeUsuario || !emailCpf || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos antes de continuar.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    // --- LÓGICA DE REGISTRO REAL VIRIA AQUI ---
    // Você faria uma chamada de API para cadastrar o novo usuário
    // Ex: axios.post('/api/register', { nomeUsuario, emailCpf, password })
    // .then(response => {
    //   console.log('Registro bem-sucedido!', response.data);
    //   navigate('/login'); // Redireciona para a página de login após o registro
    // })
    // .catch(err => {
    //   setError(err.response?.data?.message || "Erro ao registrar usuário.");
    // });

    // Por enquanto, vamos simular um registro bem-sucedido:
    console.log('Dados de Registro:', { nomeUsuario, emailCpf, password });
    alert('Registro simulado com sucesso! Redirecionando para a página de login.'); // Apenas para feedback visual
    navigate('/'); // Redireciona para a página de login após o registro bem-sucedido
  };

  return (
    <div className={`container-fluid ${styles.loginContainer}`}>
      <div className={`row flex-grow-1 w-100 g-0 ${styles.rowLayout}`}>
        {/* Coluna da Esquerda (Formulário) */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div id="container-left" className={`login-form text-center ${styles.containerLeft}`}>
            <img src={logoLumina} alt="LuminaTech Logo" className={`logo mb-4 ${styles.logo}`} />
            <h2 className={`welcome ${styles.welcome}`}>Crie sua conta! 📝</h2> {/* Texto mais apropriado para registro */}
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
              {/* Remover link de recuperar senha em página de registro */}
              <button type="submit" id="btn-cadastrar" className={`btn btn-secondary w-100 mb-2 ${styles.btnEntrar}`}>
                Cadastrar {/* Texto do botão para registro */}
              </button>
              <div className={`divider my-3 ${styles.divider}`}>Ou</div>
              <button id="btn-google" type="button" className={`btn btn-outline-danger w-100 mb-2 ${styles.btnGoogle}`}>
                <img src={logoGoogle} alt="Google Logo" className={`btn-logo me-2 ${styles.btnLogo}`} />
                Fazer login com o Google {/* Texto mais apropriado */}
              </button>
              <button id="btn-microsoft" type="button" className={`btn btn-outline-primary w-100  ${styles.btnMicrosoft}`}>
                <img src={logoMicrosoft} alt="Microsoft Logo" className={`btn-logo me-2 ${styles.btnLogo}`} />
                Fazer login com o Microsoft {/* Texto mais apropriado */}
              </button>
            </form>
            <p id="p-conta" className={`mt-4 ${styles.pConta}`}>
              Já possui uma conta?{' '} {/* Texto para quem já tem conta */}
              <Link to="/login" id="btn-entrar-agora" className={styles.btnCadastrar}> {/* Link para a página de login */}
                Faça login
              </Link>
                 <p className={styles.copyright}>© 2025 TODOS OS DIREITOS RESERVADOS</p>
            </p>
            <p invisible className={styles.copyright}>© 2025 TODOS OS DIREITOS RESERVADOS</p>
          </div>
        </div>
        {/* Coluna da Direita (Imagem) */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div id="containerRight" className={`login-image ${styles.containerRight}`}>
            <img src={artLateral1} alt="Imagem de Registro" className={`${styles.loginImage}`} /> {/* Alt text adequado */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;