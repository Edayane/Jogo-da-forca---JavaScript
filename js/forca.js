let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras= [
    {
        "nome":"IRLANDA",
        "categoria" : "LUGARES"
    },
    {
        "nome":"EQUADOR",
        "categoria": "LUGARES"
    },
    {
        "nome":"PORTUGAL",
        "categoria": "LUGARES"
    },
    {
        "nome":"BRASIL",
        "categoria" : "LUGARES"
    },
    {
        "nome":"PERNAMBUCO",
        "categoria" : "LUGARES"
    },
    {
        "nome":"INGLATERRA",
        "categoria" : "LUGARES"
    },
    {
        "nome":"BAHIA",
        "categoria" : "LUGARES"
    },
    {
        "nome":"PARANA",
        "categoria" : "LUGARES"
    },
    {
        "nome": "NATAL",
        "categoria" : "LUGARES"
    },
    {
        "nome":"ESCOCIA",
        "categoria" : "LUGARES"
    },
    {
        "nome":"CARRO",
        "categoria" : "TRANSPORTES"
    },
    {
        "nome":"BICICLETA",
        "categoria" : "TRANSPORTES"
    },
    {
        "nome":"AVIAO",
        "categoria" : "TRANSPORTES"
    },
    {
        "nome": "MOTOCICLETA",
        "categoria" : "TRANSPORTES"
    },
    {
        "nome": "NAVIO",
        "categoria" : "TRANSPORTES"
    },
    {
        "nome": "BARCO",
        "categoria" : "TRANSPORTES"
    },
    {
        "nome": "TREM",
        "categoria" : "TRANSPORTES"
    },
    {
        "nome": "CAIAQUE",
        "categoria" : "TRANSPORTES"
    },
    {
        "nome": "LANCHA",
        "categoria" : "TRANSPORTES"
    },
    {
        "nome": "HELICOPTERO",
        "categoria" : "TRANSPORTES"
    },
    {
        "nome":"GATO",
        "categoria" : "ANIMAIS"
    },
    {
        "nome": "PAPAGAIO",
        "categoria" : "ANIMAIS"
    },
    {
        "nome": "RINOCERONTE",
        "categoria" : "ANIMAIS"
    },
    {
        "nome": "TIGRE",
        "categoria" : "ANIMAIS"
    },
    {
        "nome": "MACACO",
        "categoria" : "ANIMAIS"
    },
    {
        "nome": "CACHORRO",
        "categoria" : "ANIMAIS"
    },
    {
        "nome": "AVESTRUZ",
        "categoria" : "ANIMAIS"
    },
    {
        "nome": "MORCEGO",
        "categoria" : "ANIMAIS"
    },
    {
        "nome":"TARTARUGA",
        "categoria" : "ANIMAIS"
    },
    {
        "nome":"HIPOPOTAMO",
        "categoria" : "ANIMAIS"
    },
];

criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);
}

montarPalavraNaTela ();
function montarPalavraNaTela (){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML= palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML= ""; 

    for(i=0; i< palavraSecretaSorteada.length; i++ ){
        if(listaDinamica[i]== undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] +"</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] +"</div>" 
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if( tentativas > 0){
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        montarPalavraNaTela ();
    }
}
function mudarStyleLetra (tecla){
    document.getElementById(tecla).style.background = "#c71585";   
    document.getElementById(tecla).style.color = "#ffffff";
}
function comparaListas (letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0 ){
        tentativas --
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else {
        for (i=0; i< palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i=0; i< palavraSecretaSorteada.length; i++){
        if (palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }
    if (vitoria == true) {
        abreModal("PARABÉNS!", "Você venceu!!!");
        tentativas = 0;
    }  
}

function carregaImagemForca(){
    switch(tentativas){
        case 5: 
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4: 
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3: 
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2: 
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1: 
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0: 
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;

    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML= mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
    location.reload();
});
