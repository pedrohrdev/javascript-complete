/* 21. Loop from 1 to 10
for(let i = 1; i <= 10; i++) {
    console.log(i)
} */

/* 22. Loop from 10 to 1
for(let i = 10; i >= 1; i--) {
    console.log(i);
} */

/* 23. Sum from 1 to N
let sum = 0;
const n = 5;
const numeroAnteriorDoN = n - 1;

for( let numeroAtual = n - numeroAnteriorDoN; numeroAtual <= n; numeroAtual++) {

    console.log(`Numero atual: ${numeroAtual}`)
    console.log(`Sera feito: ${sum} + ${numeroAtual}`)
    sum = sum + numeroAtual;
    console.log(`Resultado: ${sum}`);

    console.log('==========================================')

} */

/* 24. Multiplication table of a number
let numeroDaTabuada = 7;
for( let i = 0; i <= 10; i++) {

    console.log(numeroDaTabuada * i)

} */

/* 25. Count even numbers up to N
let n = 20;

for( let i = 0; i <= n; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
} */

/* 26. Fatorial de um número
let numero = 10;
let resultado = numero;

for(let i = numero - 1; i >= 1; i--) {

    resultado = resultado * i;
    console.log(resultado)

} */

/* 27. Sequência de Fibonacci (até N)
// Próximo termo é a soma do anterior 

let termo1 = 0;
let termo2 = 1;
let proximotermo = 0;

console.log(termo1);
console.log(termo2);

for(let i = 2; i <= 10; i++) {

    proximotermo = termo1 + termo2; // primeira iteracao: 0 + 1 = 1
    console.log(proximotermo);

    termo1 = termo2; // termo 1 agora é 1,
    termo2 = proximotermo; // termo 2 é igual a proximotermo(que fez a soma de termo1 + termo 2), logo proximotermo = 1
} */

/* 28. Verificar número primo

O que é um número primo?
É um número que só é divisível por 1 e por ele mesmo.
Então a pergunta que seu código precisa responder é:

"Esse número tem algum divisor além de 1 e dele mesmo?"


Tenta responder essas perguntas antes de codar:

Se eu quero saber se o número 7 é primo, por quais números eu precisaria testar se ele é divisível?
Quando eu posso parar de testar? (não precisa testar até o infinito...)
Se eu achar qualquer divisor no meio do caminho, o que isso significa para o resultado?


let numero = 7;
let ehPrimo = true

for(let i = 2; i < numero; i++) {

    // Se o numero for divisivel
    // por ele mesmo            E o numero for divisivel por 1

    if(numero % i === 0) {
        ehPrimo = false;
    }

}

if(ehPrimo) {
    console.log(`${numero} é primo`)
} else {
    console.log(`${numero} nao é primo`)
}


*/

/* 29. Contar quantos divisores um número tem
let numero = 10;
let divisores = []

for(let i = 1; i <= numero; i++) {

    if(numero % i === 0) {
        divisores.push(i)
    }

}
console.log(divisores) */

// 30. Somar apenas números pares até N
// 31. Somar apenas números ímpares até N
// 32. Encontrar maior número em loop
// 33. Contar números negativos em lista
// 34. Inverter um número (ex: 123 → 321)
// 35. Verificar palíndromo numérico
// 36. Gerar números aleatórios
// 37. Simular cara ou coroa
// 38. Encontrar menor número
// 39. Somar números de um array
// 40. Média de um array 