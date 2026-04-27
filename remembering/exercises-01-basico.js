/* 1. Sum of two numbers:

// const num1 = 5;
// const num2 = 5;

// let sum = num1 + num2;
// console.log(sum) // 5 + 5 = 10
//================================= */

/* 2. Subtraction:

// let num1 = 67;
// let num2 = 66;
// let subtraction = num1 - num2;
// console.log(subtraction) // 67 - 66 = 1
//================================= */

/* 3. Multiplication:

const num1 = 10;
const num2 = 2;
const multiplication = num1 * num2;
console.log(multiplication) // 10 * 2 = 20;
// ============================= */

/* 4. Division:
const n1 = 10;
const n2 = 5;

const division = n1 / n2;
console.log(division) // 10 / 5 = 2
//========================= */

/* 5. Check if the multiplication
// of two numbers is even or odd:
const n1 = 67;
const n2 = 3;

const multiplication = n1 * n2; // 67 * 3 = 201 <- odd

if(multiplication % 2 === 0) {
    console.log('Even')
} else {
    console.log('Odd')
}
*/

/* 6. Converter Celsius para Fahrenheit
const celsius = 20;
const fahrenheit = (celsius * 1.8) + 32;
console.log(`${celsius} celsius to fahrenheit: ${fahrenheit}F`)
*/

/* // 7. Find the larger of two numbers
// let maior;
// let n1 = 10;
// let n2 = 200;

// if(n1 > n2) {
//     maior = n1;
// } else {
//     maior = n2;
// }

// console.log(maior) */

/* 8. Find the larger of three numbers
let maior;
const n1 = 10
const n2 = 15
const n3 = 20;

if(n1 > n2 && n1 > n3) {
    maior = n1;
} else if(n2 > n1 && n2 > n3) {
    maior = n2;
} else {
    maior = n3;
}

console.log(`Entre: ${n1}, ${n2}, ${n3} logico que o maior é ${maior}`) */

/* 9. Calculate the average of three grades
const nota1 = 8;
const nota2 = 5;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

console.log(`A media entre: ${nota1}, ${nota2}, ${nota3} é ${media.toFixed(2)}`) */

/* 10. Check if the number is positive, negative, or zero.
const number = -2;
let estadoNumber;

if(number > 0) {
    estadoNumber = 'positivo';
} else if(number === 0) {
    estadoNumber = 'zero'
} else {
    estadoNumber = 'negativo'
}

console.log(estadoNumber) */

/* 11. Calculate the area of ​​a circle.
const pi = 3.1416;
const meioRaio = 10; // <- cm
const raio = meioRaio * 2;
const area = pi * (raio ** 2)

console.log(area.toFixed(2)); */

/* 12. Convert minutos to seconds
const cincoMinutos = 5; // em min
const cincoMinutosEmSegundos = cincoMinutos * 60;
console.log(cincoMinutosEmSegundos) */

/* 13. Convert hours to minutes;
const oneHour = 1;
const oneHourInMinutes = oneHour * 60;
console.log(oneHourInMinutes) */

/* 14. Check if the number is a multiple of 5.
const number1 = 50;
const number2 = 6;

if(number1 % 5 === 0) {
    console.log(`${number1} é multiplo de 5`)
} else {
    console.log(`${number1} não é multiplo de 5`)
}


if(number2 % 5 === 0) {
    console.log(`${number2} é multiplo de 5`)
} else {
    console.log(`${number2} não é multiplo de 5`)
} */

/* 15. Swapping values ​​between two variables
let variavelUm = 10;
let variavelDois = 'Pedro';

console.log(`Variavel 1 antes da troca: ${variavelUm}`);
console.log(`Variavel 2 antes da troca: ${variavelDois}`);

console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');

[variavelUm, variavelDois] = [variavelDois, variavelUm];

console.log(`Variavel 1 depois da troca: ${variavelUm}`);
console.log(`Variavel 2 depois da troca: ${variavelDois}`); */

/* 16 Calculate identity from the year of birth:


const data = new Date();
const currentYear = data.getFullYear();
const dateOfBirth = 2010;

const age = currentYear - dateOfBirth;

console.log(`You're ${age} years old`) */

// 17. Check if the number is divisible by 3 and 5.
let number = 4;
let isDivisibleBy3 = (number % 3 === 0);
let isDivisibleBy5 = (number % 5 === 0);

if(isDivisibleBy3 && isDivisibleBy5) {
    
    console.log(`${number} é divisivel por 3 e 5`);

} else if(isDivisibleBy3) {

    console.log(`${number} é divisivel por 3 porem nao por 5`);

} else if(isDivisibleBy5) {

    console.log(`${number} nao é divisel por 3, porem é divisivel por 5`)

} else {
    console.log(`${number} não é divisivel por 3 nem por 5`)

}


// 18. Converter km para metros
// 19. Verificar se número é maior que 100
// 20. Calcular resto da divisão