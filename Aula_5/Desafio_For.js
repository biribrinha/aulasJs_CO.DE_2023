let prompt = require('prompt-sync')()

//1. Imprimir números de 1 a 10 utilizando o loop for

for (let contador = 1; contador < 11; contador++) {

    console.log(contador);

}


//2. Imprimir números pares de 1 a 10.

for (let contador = 0; contador < 11; contador += 2) {

    console.log(contador);

}


//3. Faça um programa que imprima os números ímpares de 0 a 50;

for (let contador = 0; contador < 50; contador += 2) {
    console.log(contador);
}


// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.



let tabuada = parseInt(prompt("Digite um numero pra fazer a tabuada dele: "))

for (let contador = 1; contador < 10; contador++) {

    console.log(tabuada + " x " + contador + " = " + (tabuada * contador));

}


//5. Imprimir os primeiros 10 números da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8...)


let numAnterior = 0;

let numAtual = 1;

console.log(numAnterior);
console.log(numAtual);

for (let contador = 0; contador < 10; contador++) {
    let proximoNumero = numAnterior + numAtual;

    numAnterior = numAtual;
    numAtual = proximoNumero;
    console.log(proximoNumero);
}