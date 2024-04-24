function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = '#DEC2A0'
    } else if (hora >= 12 && hora < 18) {
        //BOM TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#F1AD42'
    }else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#796098'
    }
}