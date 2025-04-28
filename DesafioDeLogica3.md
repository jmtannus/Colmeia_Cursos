Desafios
Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
```javascript
let numero = 1

while(numero <=10){
  alert(numero);
  numero++;
}
```

Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
```javascript
let numero = 10

while(numero <=0){
  alert(numero);
  numero--;
}
```

Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
```javascript
let numeroStr = prompt("Digite um número para a Contagem Regressiva. Só valem números acima de 1,ok? :)")
let numero = parseInt(numeroStr);

while(isNAN(numero) || numero <=1){
  console.log('Número inválido. Por favor, digite um número acima de 1.');
  numeroStr = prompt('Tente outra vez'); // Pede novamente a entrada
  numero = parseInt(numeroStr); // Converte a nova entrada
} else {
  while(numero >= 0) {
  console.log(numero);
  numero--;
}
```

Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
```javascript
let numeroStr = prompt('Digite um número positivo');
let numero = parseInt(numeroStr);

while (numero < 0 || isNaN(numero)) {
  console.log('Número inválido. Por favor, digite um número de zero adiante.');
  numeroStr = prompt('Digite um número positivo'); // Pede novamente a entrada
  numero = parseInt(numeroStr); // Converte a nova entrada
} else {
  let contador = 0; // Inicializa um contador para começar em 0
  while (contador <= numero) {
    console.log(contador);
    contador++;
  }
}
```
