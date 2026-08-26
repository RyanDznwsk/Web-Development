// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  // --- 1. Validação de campos obrigatórios ---
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const nome = document.querySelector("input[name='nome']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const mensagem = document.querySelector("textarea[name='mensagem']").value.trim();
    const telefone = document.querySelector("input[name='telefone'").value.trim();

    if (!nome || !email || !mensagem || !telefone) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // --- 3. Envio assíncrono (AJAX) ---
    try {
      const formData = new FormData(form);

      const response = await fetch("/enviar-formulario", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um problema na conexão.");
    }
  });

  // --- 4. Interação com a newsletter ---
  const newsletterOptions = document.querySelectorAll("input[name='newsletter']");
  newsletterOptions.forEach(option => {
    option.addEventListener("change", function () {
      if (this.value.toLowerCase() === "sim") {
        alert("Você será inscrito na nossa newsletter!");
      } else {
        alert("Você optou por não receber nossa newsletter.");
      }
    });
  });
});