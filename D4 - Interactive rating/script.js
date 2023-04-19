/* Função para mudar a cor de fundo do botão */
function changeColor(button) {
    resetColors(); // Redefine a cor de fundo de todos os botões
    button.style.backgroundColor = 'rgb(251, 116, 19)'; // Define a cor de fundo do botão como vermelho
  }
  
  /* Função para redefinir a cor de fundo de todos os botões */
  function resetColors() {
    const buttons = document.getElementsByClassName('btn');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = 'rgba(131, 144, 163, .3)'; // Define a cor de fundo original
    }
  }