// Exercício 3: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.



import PromptSync from "prompt-sync";

const prompt = PromptSync();

export function ordemCres() {
    let numero1 = parseInt(prompt("Digite o primeiro numero: "))
    let numero2 = parseInt(prompt("Digite o segundo numero: "))
    let numero3 = parseInt(prompt("Digite o terceiro numero: "))

    if (numero1 > numero2 && numero2 > numero3) {
        console.log("Ordem decrescente");

    } else if (numero3 > numero2 && numero2 > numero1) {
        console.log("Ordem crescente");
    } else {
        console.log("Nenhuma ordem");
    }
}
