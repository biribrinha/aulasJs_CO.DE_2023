let prompt = require('prompt-sync')()

// LISTA DE EXERCÍCIOS - IF

// 1. Faça um programa que receba o nome, cargo e salário de um
// funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
// salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
// desse funcionário.



let nome = prompt("Diga seu nome: ")
let cargo = prompt("Qual é o seu cargo? ")
let salario = parseInt(prompt("Qual o seu salario? "))
let acrescido = 10

if (salario < 1000) {

    aumento = salario + (salario * acrescido / 100)
    console.log("Parabens pela promocao, " + nome + " seu salario agora e " + aumento + " reais, te tornando um " + cargo + " feliz")

} else {

    console.log("Ta ganhando bem hein")

}

// 2. Uma empresa decide dar aumento de 30% aos funcionários cujo
// salário é inferior a 500 reais. Escreva um programa que receba o
// salário de um funcionário e imprima o valor do salário reajustado ou
// uma mensagem caso o funcionário não tenha direito a aumento.


let salario = parseInt(prompt("Qual o seu salario? "))
let acrescido = 30

if (salario < 500) {

    aumento = salario + (salario * acrescido / 100)
    console.log(" Nao nos processe por favor, agora seu salario e de " + aumento + " seja feliz!")

} else {

    console.log("Nao te devemos nada!!")

}


// 3. Faça um programa que receba um número inteiro do usuário e informe
// se este número é positivo ou negativo.

let valor = parseInt(prompt("Coloque um numero "))


if (valor < 0) {

    console.log("negativo")

} else if (valor == 0) {

    console.log("nulo")
}

else {
    console.log("positivo")
}

// 4. Faça um programa que receba um número do usuário e informe
// se este número é par ou ímpar.


let numero = parseInt(prompt("Digite um numero inteiro: "))

let resto = numero % 2

if (resto != 0) {

    console.log("O número é impar")
} else {

    console.log("O numero é par")

}

// 5. Faça um programa receba dois valores e imprima qual é o maior
// número digitado.

let valor1 = parseInt(prompt("Coloque um numero "))
let valor2 = parseInt(prompt("Coloque outro numero "))

if (valor1 < valor2) {

    console.log("O" + valor1 + " e menor que " + valor2)

} else if (valor1 == valor2) {

    console.log("Os numeros sao iguais!!")

} else {
    console.log("O" + valor2 + " e menor que " + valor1)
}


// 6. Faça um programa que receba 4 notas de um aluno, calcule e
// imprima a média aritmética das notas e a mensagem de APROVADO
// para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
// 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.


let valor1 = parseInt(prompt("Nota 1: "))
let valor2 = parseInt(prompt("Nota 2: "))
let valor3 = parseInt(prompt("Nota 3: "))
let valor4 = parseInt(prompt("Nota 4: "))

media = (valor1 + valor2 + valor3 + valor4) / 4;

if (media >= 7) {

    console.log("Parabéns! Vc passou com a média de " + media)

} else if (media >= 5 && media < 7) {

    console.log("recuperacao, da pra se salvar dessa media de " + media)
} else {
    console.log("nao passou, a media de " + media + " é insuficiente ")
}