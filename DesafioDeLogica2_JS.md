## DESAFIOS DE LÓGICA 2:

1º - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
```javascript
let diaDaSemana = prompt("Que dia da semana é hoje?");
let diaFormatado = diaDaSemana.toLowerCase(); // Converte a entrada para minúsculas

if (diaFormatado === "sábado" || diaFormatado === "domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}
```



2º - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
```javascript
let numero = prompt('digite um numero qualquer');
let numeroConvertido = parseFloat(numero);

if(numeroConvertido > 0){
  alert("Esse número é positivo!")
} else if(numeroConvertido < 0){
alert("Esse número é negativo")
} else if(numeroConvertido === 0){
alert("Esse número é zero, não é positivo nem negativo.")
} else {
  alert("Você não digitou um número válido!"); // Para lidar com entradas não numéricas
}
```

Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
```javascript
let pontos = prompt("Qual foi a sua pontuação? Adicione o valor aqui:");
let pontosConvertidos = parseFloat(pontos);

if (pontosConvertidos >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}
```

Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
```javascript
let saldo = 1.000,00; // Suponha que este seja o saldo da conta

let mensagemSaldo = `Seu saldo atual é de: R$${saldo.toFixed(2)}.`;

alert(mensagemSaldo);
```

Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
```javascript
let nome = prompt('Digite o seu nome');
let mensagemBoasvindas = `Seja bem vindo(a), ${nome}!`;

alert(mensagemBoasvindas);

```
