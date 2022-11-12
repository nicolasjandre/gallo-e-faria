/* Slide changing */


/* FOI CRIADA UMA VARIAVEL COUNT COMEÇANDO PELO 1
ESSA VARIAVEL SE REFERE AO INPUT RADIO QUE CRIAMOS
O DOCUMENT.CHECKED = TRUE INICIAL É PARA DEIXAR DE PADRAO
A PRIMEIRA RADIO ATIVA AO ABRIR A PÁGINA
O SET INTERVAL TEM A FUNCTION NEXTIMAGE DENTRO DELE
E OS 4S DE TEMPO PRA TROCA DO SLIDE

COUNT++ É PARA SUBIR SEMPRE UM NÚMERO DA VARIAVEL COUNT
SE O COUNT FOR MAIOR QUE 4, A COUNT VOLTA PRA 1
USAMOS NO FINAL A VARIAVEL COUNT PRA SETAR O RADIO EM ESPECIFICO QUE
QUEREMOS ATIVO */

let count = 1
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

/* BUTTON FROM 3 ROWS TO X */
function myFunction(x) {
    x.classList.toggle("change");
}

const mobileButton = document.getElementById('mobileButton');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

mobileButton.addEventListener('click', toggleMenu);
mobileButton.addEventListener('touchstart', toggleMenu);
