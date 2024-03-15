function contar(){
    let ini = window.document.getElementById('txtinicio')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpasso')
    let res = window.document.getElementById('res')

    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = '<p>Contando:</p>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (passo.value <= 0) {
            window.alert('Passo inválido! Considerando Passo com valor 1.')
            p = 1
        }

        if ( i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#x1F449 `
            }
        } else {
            for (let c = i; c >=f; c -= p) {
                res.innerHTML += `${c} &#x1F449 `
            }
        }

        res.innerHTML += '\u{1F3C1}'
    }
}

