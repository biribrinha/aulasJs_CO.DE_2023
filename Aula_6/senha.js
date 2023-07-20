

import PromptSync from "prompt-sync";

const prompt = PromptSync();

export function senha() {

    let user = {
        usuario: "",
        senha: ""
    }


    user.usuario = prompt("Insira seu usuário: ")
    user.senha = prompt("Insira sua senha: ")

    if (user.usuario == "admin" && user.senha  == "senha123") {

        console.log("Bem vindo! " + user.usuario)

    } else {
        console.log(" Não autorizado... ")
    }
}

