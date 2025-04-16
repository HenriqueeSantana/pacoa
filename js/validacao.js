document.addEventListener("DOMContentLoaded", function () {
    // Máscara CEP
    const cepInput = document.getElementById("cep");
    if (cepInput) {
      cepInput.addEventListener("input", function (e) {
        let cep = e.target.value.replace(/\D/g, "");
        if (cep.length > 5) {
          cep = cep.replace(/(\d{5})(\d{1,3})/, "$1-$2");
        }
        e.target.value = cep;
      });
    }
  
    // Máscara CPF
    const cpfInput = document.getElementById("cpf");
    if (cpfInput) {
      cpfInput.addEventListener("input", function (e) {
        let cpf = e.target.value.replace(/\D/g, "");
        if (cpf.length > 3) {
          cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        }
        if (cpf.length > 6) {
          cpf = cpf.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
        }
        if (cpf.length > 9) {
          cpf = cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
        }
        e.target.value = cpf;
      });
    }
  
    // Validação
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const email = document.getElementById("email").value;
        const cep = document.getElementById("cep").value;
        const cpf = document.getElementById("cpf").value;
  
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const cepValido = /^\d{5}-\d{3}$/.test(cep);
        const cpfValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
  
        if (!emailValido) {
          alert("Por favor, insira um e-mail válido.");
          return;
        }
  
        if (!cepValido) {
          alert("Por favor, insira um CEP válido (formato: 12345-678).");
          return;
        }
  
        if (!cpfValido) {
          alert("Por favor, insira um CPF válido (formato: 000.000.000-00).");
          return;
        }
  
        // Redirecionar para link de pagamento
      });
    }
  });
  