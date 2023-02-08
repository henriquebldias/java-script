function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    if (hora >=0 && hora < 10) {
        hora = hora.toString()
        hora = '0' + hora
    }
    if (minutos >=0 && minutos < 10) {
        minutos = minutos.toString()
        minutos = '0' + minutos
    }

    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`

    if (hora >= 5 && hora < 12) {
        //Manhã
        img.innerHTML =  '<img style="border-radius: 50%" width="250" height="250" src="fotos/manha.jpg">'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora <=18){
        //Tarde
        img.innerHTML = '<img style="border-radius: 50%" width="250" height="250" src="fotos/tarde.jpg">'
        document.body.style.background = '#b9846f'
    } else if (hora >= 19 || hora == 0 ) {
        //Noite
        img.innerHTML= '<img style="border-radius: 50%" width="250" height="250" src="fotos/noite.jpg">'
        document.body.style.background = '#515154'
    }
    else {
        //Madrugada
        img.innerHTML= '<img style="border-radius: 50%" width="250" height="250" src="fotos/madrugada.jpg">'
        document.body.style.background = '#274360'
    }
    
}

