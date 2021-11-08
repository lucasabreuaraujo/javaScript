function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
   
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora < 12){
        // bom dia!
        img.src = "imgmanha.png"
        document.body.style.background = '#caaa77'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = "imgtarde.png"
        document.body.style.background = '#f36400'

    } else{
        //boa noite
        img.src = "imgnoite.png"
        document.body.style.background = '#012638'
    }
    }