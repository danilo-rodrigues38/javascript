// Variáveis compostas
//      Array ou Vetor
let num = [5, 8, 4, 3]
//Índice = 0  1  2  3

// acrescentando parâmetros ao final do array
num[4] = 6
num.push(7)

// para saber quantos elemento tem o array
// console.log(`\nO vetor tem ${num.length} posições.\n`)

// coloca os valores em ordem crescente
// num.sort()

// console.log(num)


// for (let pos = 0; pos < num.length; pos++) {
//     console.log(`O vetor na posição ${pos} tem o valor ${num[pos]}`)
// }

for ( let pos in num) {
    console.log(`O vetor na posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`\n`)