// 1. Faça um programa que receba o nome, cargo e salário de um
// funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
// salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
// desse funcionário.
import PromptSync from "prompt-sync";

const prompt = PromptSync();

export function salarioMaior() {

    let funcionario = {
        nome: "",
        cargo: 0,
        salario: 0,
        aumento: 0
    }

    funcionario.nome = prompt("Diga seu nome: ")
    funcionario.cargo = prompt("Qual é o seu cargo? ")
    funcionario.salario = parseInt(prompt("Qual o seu salario? "))
    let acrescido = 10

    if (funcionario.salario < 1000) {

        funcionario.aumento = funcionario.salario + (funcionario.salario * acrescido / 100)
        console.log("Parabens pela promocao, " + funcionario.nome + " seu salario agora e " + funcionario.aumento + " reais, te tornando um " + funcionario.cargo + " feliz")

    } else {

        console.log("Ta ganhando bem hein")

    }
}

