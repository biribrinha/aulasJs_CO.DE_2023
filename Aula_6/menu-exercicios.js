import PromptSync from "prompt-sync";

import { imc } from "./exercicios.js";

const prompt = PromptSync();


//menu para escolher qual exercício o usuário escolher

let exercicio;
let continuar;

do {
    exercicio = parseInt(prompt("Digite um número que represente um exercício de 1 a 4: "));


    switch (exercicio) {
        case 1:
            helloWord("Hello Word!!!!!!!");
            break;
        case 2:
            let aluno = {
                nome: "Ju",
                idade: 22,
                hardSkills: [
                    "figma", // 0
                    "HTML", // 1
                    "CSS", // 2
                    "Web Responsividade" // 3
                ]
            }

            console.log(aluno.nome, aluno.idade, aluno.hardSkills);
            console.log(aluno.hardSkills[2]);
            console.log("aluno objeto", aluno);
            break;
        case 3:

            imc();
            break;
        case 4:

            break;
        default:
            console.log("De 1 a 4!!!!!!");
            break;
    }


    continuar = prompt("Deseja continuar?")

} while (continuar.toLocaleLowerCase() === "s");

//toLocaleLowerCase pra manter o padrao pra receber tudo em leta minuscula



function helloWord(frase) {
    console.log(frase);
}


