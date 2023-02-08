function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.toLocaleTimeString()
    setInterval(carregar, 1000)
    msg.innerHTML = `Agora são ${hora}.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        foto.src = 'manha.jpg'
    } else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        foto.src = 'tarde.jpg'
    } else {
        //BOA NOITE!
        foto.src = 'noite.jpg'
    }
}

