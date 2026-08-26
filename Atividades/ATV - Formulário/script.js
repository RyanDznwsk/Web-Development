document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const btnLimpar = document.querySelector("button[type='reset']");

  // --- 1. Validação de campos obrigatórios ---
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const titulo = document.querySelector("input[name='titulo']").value.trim();
    const coordenador = document.querySelector("input[name='nome']").value.trim();
    const orcamento = document.querySelector("input[name='dinheiro']").value.trim();
    const dataInicio = document.querySelector("input[name='dataInicio']").value.trim();
    const dataFim = document.querySelector("input[name='dataFim']").value.trim();

    if (!titulo || !coordenador || !orcamento || !dataInicio || !dataFim) {
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

  // --- 4. Limpar formulário ---
  if (btnLimpar) {
    btnLimpar.addEventListener("click", function () {
      form.reset();
    });
  }
});