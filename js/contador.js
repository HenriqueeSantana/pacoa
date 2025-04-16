// Função para iniciar a contagem regressiva
function iniciarContagemRegressiva() {
    const contadorTimer = document.getElementById('contador-timer');
  
    // Data final da promoção (defina o tempo de término, por exemplo, 10 minutos após o carregamento da página)
    const dataFinal = new Date().getTime() + 10 * 60 * 1000; // 10 minutos a partir do carregamento da página
    
    // Intervalo de contagem regressiva
    const intervalo = setInterval(function() {
      const agora = new Date().getTime(); // Pega o tempo atual
      const tempoRestante = dataFinal - agora; // Calcula a diferença entre o tempo final e o tempo atual
  
      // Se o tempo restante for menor ou igual a zero, o contador para
      if (tempoRestante <= 0) {
        clearInterval(intervalo);
        contadorTimer.innerHTML = "00:00:00";
      } else {
        // Calcula horas, minutos e segundos restantes
        const horas = Math.floor(tempoRestante / (1000 * 60 * 60));
        const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
  
        // Exibe o tempo formatado com 2 dígitos para horas, minutos e segundos
        contadorTimer.innerHTML = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
      }
    }, 1000); // Atualiza a cada 1 segundo
  }
  
  // Chama a função de contagem regressiva ao carregar a página
  window.onload = function() {
    iniciarContagemRegressiva(); // Inicia o contador
  };
  