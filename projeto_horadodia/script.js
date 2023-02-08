function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.innerHTML =  '<img style="border-radius: 50%" width="250" height="250" src="fotos/manha.jpg">'
    } else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        img.innerHTML = '<img style="border-radius: 50%" width="250" height="250" src="fotos/tarde.jpg">'
    } else {
        //BOA NOITE!
        img.innerHTML= '<img style="border-radius: 50%" width="250" height="250" src="fotos/noite.jpg">'
    }
}

