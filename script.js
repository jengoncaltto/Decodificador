const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
    inputTexto.value= "";
    console.log(btnEncriptar)
} 

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
   
    console.log(stringEncriptada)
}

function btnDesincriptar() {
    const textoDescriptado = descriptar(inputTexto.value);
    mensagem.value = textoDescriptado;
    mensagem.style.backgroundImage="none";
    inputTexto.value="";
} console.log(btnDesincriptar);

function descriptar(stringDescriptada) {
    let matrizCodigo = [ ["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][0])){
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringDescriptada;
}

function btnCopiar() {

    var content = document.querySelector(".mensagem");
    
    content.select();

    navigator.clipboard.writeText(content.value);

    alert("Texto copiado");
    mensagem.value="";
}   console.log(btnCopiar)

