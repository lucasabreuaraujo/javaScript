function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked) {
        genero = 'Homem'
        if(idade >=1 && idade < 10){
            //criança
            img.setAttribute('src', 'imagens/menino.png')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'imagens/jovem-homem.png')
        }else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'imagens/adulto.png')
        }else{
            //Idoso
            img.setAttribute('src', 'imagens/idoso.png')
        } 
    }else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >=1 && idade < 10){
            //criança
            img.setAttribute('src', 'imagens/menina.png')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'imagens/jovem-mulher.png')
        }else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'imagens/adulta.png')
        }else{
            //Idoso
            img.setAttribute('src', 'imagens/idosa.png')
        } 
        
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}