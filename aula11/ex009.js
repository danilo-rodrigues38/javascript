var pais = 'BRASIL'

console.log(`\n\nVivendo em ${pais}...`)
var pais = pais.toLowerCase()

if (pais == 'brasil') {
    console.log('Você é Brasileiro!\n\n')
} else {
    console.log('Você é Estrangeiro!\n\n')
    console.log(pais.toUpperCase())
}