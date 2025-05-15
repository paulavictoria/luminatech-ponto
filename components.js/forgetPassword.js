document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const email = document.getElementById("campoLogin").value;

            //simular envio p API 
            fetch("https://api.exemplo.com/redefinir-senha", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email }),
            })
                .then((response) => {
                    if (response.ok) {
                        alert("Link de redefinição de senha enviado para o seu e-mail!");
                    } else {
                        alert("Erro ao enviar o link. Tente novamente.");
                    }
                })
                .catch((error) => {
                    console.error("Erro:", error);
                    alert("Erro ao conectar ao servidor.");
                });
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
