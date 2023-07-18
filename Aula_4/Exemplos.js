let nomes = ["Alana", "Aléxia", "Samanta", "Thiago", "Odirlei"]
//              0         1         2          3         4


// for (let contador = 0; contador < nomes.length; contador++) {
//     const cadaElemento = nomes[contador];
//     console.log(cadaElemento);
// }

// o for manipula a ordem que a lista vai ser lida, ideal para situações específicas

// nomes.forEach(cadaElemento => {
//     console.log(cadaElemento);
// })


// mesma lista, so que mostrando o indice 

nomes.forEach((cadaElemento, indice) => {
    console.log(indice , cadaElemento);
})

// forEach é bom usar quando eu apenas quiser ler uma lista
