import PromptSync from "prompt-sync";

import { imc } from "./imc.js";

import { salarioMaior } from "./salario.js";

import { senha } from "./senha.js";

import { aluno } from "./aluno.js";

import { ordemCres } from "./ordemCrescente.js";

import { fibonacci } from "./fibonacci.js";

const prompt = PromptSync();


//menu para escolher qual exercício o usuário escolher

let exercicio;
let continuar;

do {

    exercicio = parseInt(prompt("Digite um número que represente um exercício de 1 a 6: "));


    switch (exercicio) {
        case 1:
            fibonacci();
            break;

        case 2:
            aluno();
            break;

        case 3:
            imc();
            break;

        case 4:
            salarioMaior();
            break;

        case 5:
            senha();
            break;

        case 6:
            ordemCres();
            break;

        default:
            console.log("De 1 a 6!!!!!!");
            break;
    }


    continuar = prompt("Deseja continuar?")

} while (continuar.toLocaleLowerCase() === "s");

//toLocaleLowerCase pra manter o padrao pra receber tudo em leta minuscula



