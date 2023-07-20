
import PromptSync from "prompt-sync";

const prompt = PromptSync();



export function aluno() {
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


}

