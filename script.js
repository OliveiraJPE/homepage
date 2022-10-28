function carregar(){
var msg=window.document.querySelector("div#msg")
var img = window.document.querySelector("img#imagem")
var data=new Date()
var hora = data.getHours()
msg.innerHTML=`Agora são ${hora} horas`
if(hora>=0 && hora<12){
    msg.innerHTML+= `<br> Bom dia!`
    img.src=`manhaRed.png`
    window.document.body.style.background= `#e2cd9f`
}else if(hora>=12 && hora<18){
    msg.innerHTML+= `<br> Boa tarde!`
    img.src=`tardeRed.png`
    window.document.body.style.background= `#b9846f`
}else{
    msg.innerHTML+= `<br> Boa noite!`
    img.src=`noiteRed.png`
    window.document.body.style.background= `#515154`
}
}
