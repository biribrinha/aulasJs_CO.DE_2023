let prompt = require('prompt-sync')()


// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

// let usuario = prompt("Insira seu usuário: ")
// let senha = prompt("Insira sua senha: ")

// if (usuario == "admin" && senha == "senha123") {

//     console.log("Bem vindo!")

// } else {
//     console.log("Não autorizado...")
// }

// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.

// let diaNum = prompt("Insira um numero: ")

// switch (diaNum) {
//     case "1":
//         console.log("Segunda");
//         break;

//     case "2":
//         console.log("Terça");
//         break;

//     case "3":
//         console.log("Quarta");
//         break;

//     case "4":
//         console.log("Quinta");
//         break;

//     case "5":
//         console.log("Sexta");
//         break;

//     case "6":
//         console.log("Sábado");
//         break;

//     case "7":
//         console.log("Domingo");
//         break;

//     default:
//         console.log("nao corresponte a nenhum dia da semana");
//         break;
// }


// Exercício 3: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

// let numero1 = parseInt(prompt("Digite o primeiro numero: "))
// let numero2 = parseInt(prompt("Digite o segundo numero: "))
// let numero3 = parseInt(prompt("Digite o terceiro numero: "))

// if (numero1 > numero2 && numero2 > numero3) {
//     console.log("Ordem decrescente");
    
// } else if (numero3 > numero2 && numero2 > numero1) {
//     console.log("Ordem crescente");
// }else{
//     console.log("Nenhuma ordem");
// }




// Exercício 4: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

// let ano = parseInt(prompt("Ano que vc nasceu: "))

// realIdade = 2023 - ano;

// if(realIdade >= 18){
//     console.log("maior de idade " + realIdade)
// }else{
//     console.log("menor de idade " + realIdade)
// }

// Para saber a idade de quem nasceu em 1990, basta fazer este cálculo: (Ano atual – 1990 = Resultado). Por exemplo: 2021 – 1990 = 31.



// Exercício 5: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim, aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

// let compra = parseFloat(prompt("Valor da compra: "))

// if (compra >= 100.01 && compra < 200) {
//     desconto = compra - (compra * 10 / 100)
//     console.log("desconto de 10%!, assim ficando " + desconto)
// } else if (compra >= 200) {
//     desconto = compra - (compra * 20 / 100)
//     console.log("desconto de 20%!, assim ficando " + desconto)
// } else {
//     console.log("sem desconto")
// }

// Exercício 6: Cálculo de IMC
// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros. Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o usuário se encontra, de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal
// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3


// let altura = parseFloat(prompt("Sua altura: "))
// let peso = parseFloat(prompt("Seu peso: "))

// imc = peso / (altura * altura)

// if (imc >= 18.5 && imc <= 24.9) {
//     console.log("Peso normal, imc de " + imc)
// } else if (imc >= 25.0 && imc <= 29.9) {
//     console.log("Sobrepeso, imc de " + imc)
// } else if (imc >= 30.0 && imc <= 34.9) {
//     console.log("Obesidade grau 1, imc de " + imc)
// } else if (imc >= 35.0 && imc <= 39.9) {
//     console.log("Obesidade grau 2, imc de " + imc)
// } else if (imc >= 40.0) {
//     console.log("Obesidade grau 3, imc de " + imc)
// } else {
//     console.log("Abaixo do peso, imc de " + imc)
// }


