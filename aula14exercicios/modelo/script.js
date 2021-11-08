function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(ini.value.length ==0 || fim.value.length == 0 || pas.value.length == 0){
        alert("Erro! Faltam dados")
        res.innerHTML = 'Impossível contar'
    }else{
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if(p == 0){
            alert('Erro! Passo invalido. Condiderando passo 1')
            p = 1
        }
        
        if(i < f){
            //Contagem Crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML +=` ${c} \u{1F449}`
            }
        } else {
            //Contagem Decrescente
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}