alert("Boas vindas ao jogo do número secreto!");

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
//console.log(numeroSecreto)
//console.log("Resultado da comparação", chute == numeroSecreto);
let chute;
let tentativas = 1;
//console.log("Valor do chute", chute);

//enquanto o chute não for igual ao numero secreto
while (parseInt(chute) != numeroSecreto) { // Converte chute para número aqui
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);

  //se chute for igual ao numero secreto
  if (parseInt(chute) === numeroSecreto) { // Converte chute para número aqui (use === para comparação estrita)
    break;
  } else {
    if (parseInt(chute) > numeroSecreto) { // Converte chute para número aqui
      alert(`Que pena, você errou :( O número secreto é menor que ${chute}. Tente novamente! :)`);
    } else {
      alert(`O número secreto é maior que ${chute}. Tente novamente! :)`);
    }
    tentativas++; // Incrementa a tentativa APÓS a verificação do chute errado
  }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);