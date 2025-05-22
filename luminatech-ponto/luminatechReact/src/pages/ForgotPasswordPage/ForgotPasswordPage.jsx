// src/pages/ForgotPasswordPage/ForgotPasswordPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ForgotPasswordPage.module.css'; // Importa os estilos como CSS Modules

// Importe suas imagens locais aqui
import logoLumina from '../../assets/logo_lumina.png';
import artLateral2 from '../../assets/art-lateral2.png'; // <-- IMAGEM ATUALIZADA

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(''); // Estado para mensagens de erro
  const [successMessage, setSuccessMessage] = useState(''); // Estado para mensagem de sucesso
  const navigate = useNavigate(); // Hook para navegação programática

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página
    setError(''); // Limpa mensagens de erro anteriores
    setSuccessMessage(''); // Limpa mensagens de sucesso anteriores

    // Validação de campo vazio
    if (!email) {
      setError("Por favor, informe seu e-mail.");
      return;
    }

    console.log('E-mail para recuperação:', email);

    // --- Lógica de envio de e-mail de recuperação simulada ---
    // Em um aplicativo real, você faria uma chamada de API aqui.
    /*
    fetch('https://api.exemplo.com/redefinir-senha', { // Use sua URL de API real aqui
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
    .then((response) => {
      if (response.ok) {
        setSuccessMessage("Link de redefinição de senha enviado para o seu e-mail!");
        // Opcional: Redirecionar após um tempo ou deixar o usuário ver a mensagem de sucesso
        // setTimeout(() => navigate('/'), 3000); // Redireciona para o login após 3 segundos
      } else {
        // Se a API retornar um erro específico (ex: e-mail não encontrado)
        return response.json().then(data => { throw new Error(data.message || 'Erro ao enviar o link. Tente novamente.'); });
      }
    })
    .catch((error) => {
      setError(error.message); // Exibe o erro da API no UI
      console.error("Erro:", error);
    });
    */

    // Simulação de sucesso após a validação
    setSuccessMessage("Link de redefinição de senha enviado para o seu e-mail!");
    setEmail(''); // Limpa o campo após o envio simulado
    // Não redirecionamos automaticamente aqui, para o usuário ver a mensagem de sucesso.
    // Ele pode clicar no botão "Voltar" ou esperar o redirecionamento se implementado acima.
  };

  return (
    // Removido vh-100 e d-flex daqui para o CSS Module controlá-los
    <div className={`container-fluid ${styles.forgotPasswordContainer}`}>
      <div className={`row flex-grow-1 w-100 g-0 ${styles.rowLayout}`}> {/* Adicionei a classe rowLayout aqui */}
        {/* Coluna da Esquerda (Formulário) */}
        {/* Removido bg-light para que o fundo seja controlado pelo CSS Module */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div id="container-left" className={`login-form text-center ${styles.containerLeft}`}>
            <img src={logoLumina} alt="LuminaTech Logo" className={`logo mb-4 ${styles.logo}`} />
            <h2 className={`forget ${styles.forget}`}>Esqueceu sua senha?</h2>
            <p className={`sendLink ${styles.sendLink}`}>Por favor, informe seu e-mail. Enviaremos um link para redefinição de senha.</p>
            <form onSubmit={handleSubmit}>
              {error && <div className={`alert alert-danger ${styles.errorMessage}`} role="alert">{error}</div>}
              {successMessage && <div className={`alert alert-success ${styles.successMessage}`} role="alert">{successMessage}</div>}

              <div className="form-floating mb-3">
                <input
                  type="email" // Use type="email" para melhor validação do navegador
                  id="emailInput" // ID único
                  className="form-control" // Mantido form-control para integração com form-floating
                  placeholder="Informe seu e-mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="emailInput">Informe seu e-mail</label>
              </div>

              {/* Botão Recuperar - usando styles.btnRecover */}
              <button type="submit" id="btn-recover" className={`btn w-100 mb-3 ${styles.btnRecover}`}>
                Recuperar
              </button>
              {/* Botão Voltar - usando styles.btnReturn */}
              <Link to="/" id="btn-return" className={`btn w-100 mb-3 ${styles.btnReturn}`}>
                Voltar
              </Link>

              {/* Os botões de Google e Microsoft estão invisíveis no HTML original, mantendo assim */}
              <button id="btn-google" type="button" className="btn btn-outline-danger w-100 mb-2 invisible">
                <img src="" alt="" className="btn-logo me-2" />Entre com o Google
              </button>
              <button id="" type="button" className="btn btn-outline-primary w-100 invisible">
                <img src="" alt="" className="btn-logo me-2" />Entre com a Microsoft
              </button>
            </form>
              {/* NOVO: Direitos autorais no rodapé, se você quiser. */}
            <p className={styles.copyright}>© 2025 TODOS OS DIREITOS RESERVADOS</p>
          </div>
        </div>
        {/* Coluna da Direita (Imagem) */}
        {/* Removido bg-light para que o fundo seja controlado pelo CSS Module */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div id="container-right" className={`login-image ${styles.containerRight}`}>
            <img src={artLateral2} alt="Imagem de Recuperação de Senha" className={`img-fluid ${styles.loginImage}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;