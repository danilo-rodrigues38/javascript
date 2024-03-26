function parimp(num) {
    if (num % 2 == 0) {
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}

let resp = parimp(10)

console.log(`O número é ${resp}.`)
