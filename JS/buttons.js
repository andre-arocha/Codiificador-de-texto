var textarea = document.querySelector(".campoDeDigitacao");
var btnCopiar = document.querySelector(".copiar");
var btnCriptogarfar = document.querySelector(".criptografar");
var btnDescriptogarfar = document.querySelector(".descriptografar");

textarea.addEventListener("input", function() {

    var texto = textarea.value;

    function ocultarImagem() {
        var imgTxt = document.querySelector(".img-txt").classList.add("invisivel");
        var txtBtn = document.querySelector(".txt-btn").classList.remove("invisivel");
    }

    function exibirImagem() {
        var imgTxt = document.querySelector(".img-txt").classList.remove("invisivel");
        var txtBtn = document.querySelector(".txt-btn").classList.add("invisivel");
    }

    function replicarTextoDigitado(){
        var txtDigitacao = document.getElementById("txtDigitacao");
        var txtExibicao = document.getElementById("txtExibicao");

        txtDigitacao.addEventListener("keyup", function(){
            txtExibicao.innerHTML = txtDigitacao.value;
        });
    }
    

    if(texto != ""){
        ocultarImagem();
        replicarTextoDigitado();
    } else if (texto == ""){
        exibirImagem();
    }

});


btnCopiar.addEventListener("click", function(){

    function copiarTexto() {
        var txtExibicao = document.getElementById("txtExibicao");
        txtExibicao.select();
        document.execCommand("copy");
    };

    if(txtExibicao.value.length > 0){
        copiarTexto();
    }

});


function criptografar(texto) {

    var txtCrip = texto.replace(/e/gi, "enter");
    txtCrip = txtCrip.replace(/i/gi, "imes");
    txtCrip = txtCrip.replace(/a/gi, "ai");
    txtCrip = txtCrip.replace(/o/gi, "ober");
    txtCrip = txtCrip.replace(/u/gi, "ufat");

    return txtCrip;

}

btnCriptogarfar.addEventListener("click", function(txtDigitacao){

    var txtDigitacao = document.getElementById("txtDigitacao").value;
    var txtcripit = criptografar(txtDigitacao);
    var txtExibicao = document.getElementById("txtExibicao");
    txtExibicao.textContent = txtcripit;


});

function descriptografar(texto) {

    var txtDescrip = texto.replace(/enter/gi, "e");
    txtDescrip = txtDescrip.replace(/imes/gi, "i");
    txtDescrip = txtDescrip.replace(/ai/gi, "a");
    txtDescrip = txtDescrip.replace(/ober/gi, "o");
    txtDescrip = txtDescrip.replace(/ufat/gi, "u");

    return txtDescrip;

}

btnDescriptogarfar.addEventListener("click", function(txtDigitacao){

    var txtDigitacao = document.getElementById("txtDigitacao").value;
    var txtdescripit = descriptografar(txtDigitacao);
    var txtExibicao = document.getElementById("txtExibicao");
    txtExibicao.textContent = txtdescripit;


});






