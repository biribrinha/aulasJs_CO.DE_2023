
import PromptSync from "prompt-sync";

const prompt = PromptSync();

export function fibonacci() {
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
}