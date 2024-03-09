function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!');
    } else {
        var sexo = window.document.getElementsByName('sexo');
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade < 12) {
                //crianca
                img.setAttribute('src', 'images/crianca-masculino.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'images/jovem-masculino.png')
            } else if ( idade < 60) {
                //adulto
                img.setAttribute('src', 'images/adulto-masculino.png')
            } else {
                // idoso
                img.setAttribute('src', 'images/idoso-masculino.png')
            }
        } else {
            genero = 'Mulher'
            if (idade < 12) {
                //crianca
                img.setAttribute('src', 'images/crianca-feminino.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'images/jovem-feminino.png')
            } else if ( idade < 60) {
                //adulto
                img.setAttribute('src', 'images/adulto-feminino.png')
            } else {
                // idoso
                img.setAttribute('src', 'images/idoso-feminino.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
    
}