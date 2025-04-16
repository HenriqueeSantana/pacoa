// popup.js

// Mostra o popup imediatamente ao carregar a página
window.onload = function () {
    document.getElementById('popup').style.display = 'flex';
  }
  
  // Função para fechar o popup
  function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
  }
  