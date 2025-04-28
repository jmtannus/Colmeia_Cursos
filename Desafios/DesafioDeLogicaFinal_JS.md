## Desafios finais

Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
```javascript
console.log('Boas vindas!')
```

Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

**1. Usando concatenação de strings (+):**
```javascript
let nome = "Janaína Tannús";
console.log("Olá, " + nome + "!");
```
**2. Usando template literal (`` e ${}):**
```javascript
let nome = "Janaína Tannús";
console.log(`Olá, ${nome}!`);
```

Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".

**1. Usando concatenação de strings (+):**
```javascript
let nome = "Janaína Tannús";
alert('Olá, ' + nome + '!');
```
**2. Usando template literal (`` e ${}):**
```javascript
let nome = "Janaína Tannús";
alert(`Olá, ${nome}!`);
```

Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
```javascript
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem);
```

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

**1. Usando let e conversão de strings em números, para fixar o aprendizado:**
```javascript
let valor1Str = 4;
let valor1 = parseFloat(valor1Str);
let valor2Str = 10.000
let valor2 = parseFloat(valor2Str);

let resultado = valor1 + valor2;
console.log( `A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
```

**2. Usando const e mudanças para o programa ser mais eficaz:**
```javascript
const valor1 = 4;
const valor2 = 10;
const resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
```

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
```javascript
const valor1 = 5;
const valor2 = 50;
const resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
```

Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
```javascript
const idadeStr = prompt('Qual a sua idade?');
const idade = parseInt(idadeStr);

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log(`Você tem ${idade} anos, é menor de idade.`);
}
```
Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
```javascript
const numeroStr = prompt("Digite um número:");
const numero = parseFloat(numeroStr);

if (isNaN(numero)) {
  console.log("Entrada inválida. Por favor, digite um número.");
} else if (numero > 0) {
  console.log("O número digitado é positivo.");
} else if (numero < 0) {
  console.log("O número digitado é negativo.");
} else {
  console.log("O número digitado é zero.");
}

```
Use um loop while para imprimir os números de 1 a 10 no console.
```javascript

```
Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
```javascript

```
Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
```javascript

```
Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
```javascript

```
Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
```javascript

```
