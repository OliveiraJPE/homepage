var bvindas=window.prompt("Olá! digite seu primeiro nome: ")
function carregar(){
var msg=window.document.querySelector("div#msg")
var img = window.document.querySelector("img#imagem")
var data=new Date()
var hora = data.getHours()
msg.innerHTML=`Agora são ${hora} horas`
if(hora>=0 && hora<12){
    msg.innerHTML+= `<br> Bom dia ${bvindas}!<br> Em breve termos um ótimo site para você.`
    img.src=`_imagens/manhaRed.png`
    window.document.body.style.background= `#e2cd9f`
}else if(hora>=12 && hora<18){
    msg.innerHTML+= `<br> Boa tarde ${bvindas}!<br> Em breve termos um ótimo site para você.`
    img.src=`_imagens/tardeRed.png`
    window.document.body.style.background= `#b9846f`
}else{
    msg.innerHTML+= `<br> Boa noite ${bvindas}!<br> Em breve termos um ótimo site para você.`
    img.src=`_imagens/noiteRed.png`
    window.document.body.style.background= `#515154`
}
}
