 document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");
        form.addEventListener("submit", function (event) {
            const email = document.getElementById("campoLogin");
            const senha = document.getElementById("campoSenha");
            if (!email.value || !senha.value) {
                event.preventDefault(); //trava o envio do forms 
                alert("Por favor, preencha todos os campos!");
            }
        });
    });

 
 //navegação entre páginas
    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll("a");
        links.forEach((link) => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const url = this.getAttribute("href");

                fetch(url)
                    .then((response) => response.text())
                    .then((html) => {
                        document.body.innerHTML = html;
                    })
                    .catch((error) => console.error("Erro ao carregar a página:", error));
            });
        });
    });


    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");
        form.addEventListener("submit", function (event) {
            const senha = document.getElementById("campoSenha").value;
            const confirmarSenha = document.getElementById("confirmSenha").value;

            if (senha !== confirmarSenha) {
                event.preventDefault(); // Impede o envio do formulário
                alert("As senhas não coincidem!");
            }
        });
    });
