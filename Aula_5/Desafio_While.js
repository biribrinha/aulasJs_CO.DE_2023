let prompt = require('prompt-sync')()

// 6. Imprimir números pares de 0 a 20 utilizando o loop while


let contador = 0;

while (contador < 20) {
    contador = contador + 2;
    console.log(contador)
}



// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.

let soma = 0;

while (soma < 100) {
    soma = soma + 1;
    console.log(soma);
}


// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.


let idade;

do{
    idade = prompt("Sua idade")
}while (idade < "18")

// 9. Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.


contador = prompt("Digite um numero: ")
while (contador >= 0){

    console.log(contador);
    contador = contador - 1;

}

// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let numero;

do{
    numero = prompt("Digite um numero")
}while (numero != "0")