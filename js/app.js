var textMain = document.querySelector("#textCriptor");
var outCaixa = document.querySelector("#exibe-mensagem");

function criptoText(){
    var texto = textMain.value;

    var cripResult = texto.replace(/a/g, "ai").replace(/e/g, "enter")
    .replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");
    
    document.getElementById('exibe-mensagem').innerHTML ='<textarea readonly class="copy" id="msgCampo">' + cripResult +
    '</textarea>'
    habilitaBotao();

}



function descriptoText(){
    var texto = textMain.value;

    var descResult = texto.replace(/ai/g, "a") .replace(/enter/g, "e")
    .replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    document.getElementById('exibe-mensagem').innerHTML ='<textarea readonly class="copy" id="msgCampo">' + descResult +
    '</textarea>' 
    habilitaBotao();
}

function habilitaBotao(){
    var texto = textMain.value;
    if(texto == null){
        document.getElementById("copiar").disabled = true;
    }else{
        document.getElementById("copiar").removeAttribute('disabled');
    }
    
}
function tempoMensage(){
$().ready(function() {
    setTimeout(function () {
    $('#msg').hide();
    }, 600);
});

}
function exibeMensage(){
    document.getElementById("p").innerHTML = "Texto copiado com sucesso!";
}

let copiaTexto = document.querySelector('#copiar');
    copiaTexto.addEventListener('click', function(e) {
    let textArea = document.querySelector('.copy');
    textArea.select();
    document.execCommand('copy');

})

function limparCampo(){
    cripResult = document.querySelector('textCriptor');
    texto.value ='';

}