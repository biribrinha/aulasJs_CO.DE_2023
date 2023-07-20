import PromptSync from "prompt-sync";

const prompt = PromptSync();


export function imc() {


    let pessoa = {
        nome: "",
        altura: 0,
        peso: 0
    }


    pessoa.nome = prompt("Qual seu nome? ")
    pessoa.altura = parseFloat(prompt("Sua altura (ex: 1.60) :  "))
    pessoa.peso = parseFloat(prompt("Seu peso:  "))

    imc = pessoa.peso / (pessoa.altura * pessoa.altura)


    if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal, imc de " + imc)
    } else if (imc >= 25.0 && imc <= 29.9) {
        console.log("Sobrepeso, imc de " + imc)
    } else if (imc >= 30.0 && imc <= 34.9) {
        console.log("Obesidade grau 1, imc de " + imc)
    } else if (imc >= 35.0 && imc <= 39.9) {
        console.log("Obesidade grau 2, imc de " + imc)
    } else if (imc >= 40.0) {
        console.log("Obesidade grau 3, imc de " + imc)
    } else {
        console.log("Abaixo do peso, imc de " + imc)
    }
}

