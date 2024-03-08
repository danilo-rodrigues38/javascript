function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${minu}min.`
    if (hora < 12) {
        // bom dia
        img.src = 'images/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        // boa tarde
        img.src = 'images/entardecer.png'
        document.body.style.background = '#b9846f'
    } else {
        // boa noite
        img.src = 'images/noite.png'
        document.body.style.background = "#515154"
        img.style.borderRadius = '135px'
        img.style.boxShadow = '3px 4px 5px rgba(0, 0, 0, 0.3)'
    }
}

