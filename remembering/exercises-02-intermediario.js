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

// 25. Count even numbers up to N
let n = 20;

for( let i = 0; i <= n; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}

// 26. Fatorial de um número
// 27. Sequência de Fibonacci (até N)
// 28. Verificar número primo
// 29. Contar quantos divisores um número tem
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