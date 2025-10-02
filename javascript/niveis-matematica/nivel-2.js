// console.log("Funcioanando...")

// if(window.performance.getEntriesByType("navigation")[0].type === "reload"){
//     sessionStorage.clear();
//     window.location.replace("../categorias.html");
// }

//Recepção dos Pontos e Vidas do Nível 1
let pontosJS2 = Number(sessionStorage.getItem("pontos"));
let vidasJS2 = Number(sessionStorage.getItem("vidas")) + 1;
pontosHTML.innerHTML = pontosJS2;
vidasHTML.innerHTML = vidasJS2;

//Variáveis Globais
const aceitarRecomecarJogo = window.document.getElementById("aceitar-recomecar");
const avancarNivel3 = window.document.getElementById("avancar-nivel-3");

//Desabilitação da Secção 1
for(const botoes of botoesSeccao1){
    botoes.disabled = false;
    botoes.style.cursor = "pointer";
}
Seccoes[0].style.opacity = "1";

//Mudança de Valores da Secção 1
valoresSeccao1[0].innerHTML = Number(Math.floor(Math.random() * ((19 - 13) + 1)) + 13);
valoresSeccao1[1].innerHTML = Number(Math.floor(Math.random() * ((17 - 11) + 1) + 11));
let resultadoSeccao1 = valoresSeccao1[0].innerHTML * valoresSeccao1[1].innerHTML;
mudancaValores2(resultadoSeccao1, botoesSeccao1);
botoesSeccao1[Number(Math.floor(Math.random() * botoesSeccao1.length))].innerHTML = resultadoSeccao1;

//Mudança de Valores da Secção 2
valoresSeccao2[0].innerHTML = Number(Math.floor(Math.random() * ((163 - 121) + 1) + 121));
valoresSeccao2[1].innerHTML = Number(Math.floor(Math.random() * ((276 - 238) + 1) + 238));
let resultadoSeccao2 = Number(valoresSeccao2[0].innerHTML) + Number(valoresSeccao2[1].innerHTML);
mudancaValores2(resultadoSeccao2, botoesSeccao2);
botoesSeccao2[Number(Math.floor(Math.random() * botoesSeccao2.length))].innerHTML = resultadoSeccao2;

//Mudança de Valors da Secção 3
mudarValoresQuestoes(valoresSeccao3[0], valoresSeccao3[1], 520, 300, 30, 14, 20);
let resultadoSeccao3 = valoresSeccao3[0].innerHTML / valoresSeccao3[1].innerHTML;
mudancaValores2(resultadoSeccao3, botoesSeccao3);
botoesSeccao3[Number(Math.floor(Math.random() * botoesSeccao3.length))].innerHTML = resultadoSeccao3;

//Mudança de Valores da Secção 4
valoresSeccao4[0].innerHTML = Number(Math.floor(Math.random() * ((352 - 276) + 1) + 276));
valoresSeccao4[1].innerHTML = Number(Math.floor(Math.random() * ((172 - 118) + 1) + 118));
let resultadoSeccao4 = Number(valoresSeccao4[0].innerHTML) - Number(valoresSeccao4[1].innerHTML);
mudancaValores2(resultadoSeccao4, botoesSeccao4);
botoesSeccao4[Number(Math.floor(Math.random() * botoesSeccao4.length))].innerHTML = resultadoSeccao4;

//Mudança de Valores da Secção 5
valoresSeccao5[0].innerHTML = Number(Math.floor(Math.random() * ((119 - 78) + 1) + 78));
valoresSeccao5[1].innerHTML = Number(Math.floor(Math.random() * ((38 - 18) + 1) + 18));
valoresSeccao5[2].innerHTML = Number(Math.floor(Math.random() * ((14 - 7) + 1) + 7));
let resultadoSeccao5 = Number(valoresSeccao5[0].innerHTML) + (valoresSeccao5[1].innerHTML * valoresSeccao5[2].innerHTML);
mudancaValores2(resultadoSeccao5, botoesSeccao5);
botoesSeccao5[Number(Math.floor(Math.random() * botoesSeccao5.length))].innerHTML = resultadoSeccao5;

//Mudança de Valores da Secção 6
valoresSeccao6[0].innerHTML = Number(Math.floor(Math.random() * ((119 - 78) + 1) + 78));
// t = 1
// for(let vet of vetorValoresSeccao6[Number(Math.floor(Math.random() * vetorValoresSeccao6.length))]){
//     valoresSeccao6[t].innerHTML = Number(vet);
//     t += 1;
// }
mudarValoresQuestoes(valoresSeccao6[1], valoresSeccao6[2], 80, 40, 16, 8, 6);
let resultadoSeccao6 = Number(valoresSeccao6[0].innerHTML) - (Number(valoresSeccao6[1].innerHTML) / Number(valoresSeccao6[2].innerHTML));
mudancaValores2(resultadoSeccao6, botoesSeccao6);
botoesSeccao6[Number(Math.floor(Math.random() * botoesSeccao6.length))].innerHTML = resultadoSeccao6;

//Mudança de Valores da Secção 7
valoresSeccao7[0].innerHTML = Number(Math.floor(Math.random() * ((119 - 78) + 1) + 78));
// t = 1
// for(const vet of vetorValoresSeccao7[Number(Math.floor(Math.random()* vetorValoresSeccao7.length))]){
//     valoresSeccao7[t].innerHTML = Number(vet);
//     t += 1;
// }
mudarValoresQuestoes(valoresSeccao7[1], valoresSeccao7[2], 98, 40, 16, 8, 6);
let resultadoSeccao7 = Number(valoresSeccao7[0].innerHTML) + (Number(valoresSeccao7[1].innerHTML / Number(valoresSeccao7[2].innerHTML)));
mudancaValores2(resultadoSeccao7, botoesSeccao7);
botoesSeccao7[Number(Math.floor(Math.random() * botoesSeccao7.length))].innerHTML = resultadoSeccao7;

//Mudança de Valores da Seção 8
valoresSeccao8[0].innerHTML = Number(Math.floor(Math.random() * ((36 - 23) + 1) + 23));
valoresSeccao8[1].innerHTML = Number(Math.floor(Math.random() * ((18 - 9) + 1) + 9));
valoresSeccao8[2].innerHTML = Number(Math.floor(Math.random() * ((107 - 77) + 1) + 77));
let resultadoSeccao8 = (Number(valoresSeccao8[0].innerHTML) * Number(valoresSeccao8[1].innerHTML)) - Number(valoresSeccao8[2].innerHTML);
mudancaValores2(resultadoSeccao8, botoesSeccao8);
botoesSeccao8[Number(Math.floor(Math.random() * botoesSeccao8.length))].innerHTML = resultadoSeccao8;

//Mudança de Valores da Secção 9
valoresSeccao9[0].innerHTML = Number(Math.floor(Math.random() * ((264 - 228) + 1) + 228));
valoresSeccao9[1].innerHTML = Number(Math.floor(Math.random() * ((172 - 148) + 1) + 148));
valoresSeccao9[2].innerHTML = Number(Math.floor(Math.random() * ((117 - 88) + 1) + 88));
let resultadoSeccao9 = Number(valoresSeccao9[0].innerHTML) + Number(valoresSeccao9[1].innerHTML) - Number(valoresSeccao9[2].innerHTML);
mudancaValores2(resultadoSeccao9, botoesSeccao9);
botoesSeccao9[Number(Math.floor(Math.random() * botoesSeccao9.length))].innerHTML = resultadoSeccao9;

//Mudança de Valores da Secção 10
valoresSeccao10[0].innerHTML = Number(Math.floor(Math.random() * ((48 - 32) + 1) + 32));
// t = 1
// for(let vet of vetorValoresSeccao10[Number(Math.floor(Math.random() * vetorValoresSeccao10.length))]){
//     valoresSeccao10[t].innerHTML = Number(vet);
//     t += 1;
// }
mudarValoresQuestoes(valoresSeccao10[1], valoresSeccao10[2], 260, 90, 18, 8, 9)
let resultadoSeccao10 = Number(valoresSeccao10[0].innerHTML) * (Number(valoresSeccao10[1].innerHTML) / Number(valoresSeccao10[2].innerHTML));
mudancaValores2(resultadoSeccao10, botoesSeccao10);
botoesSeccao10[Number(Math.floor(Math.random() * botoesSeccao10.length))].innerHTML = resultadoSeccao10;

//Função para calcular Vidas
function calcularVidas(){
    vidasJS2 -= 1;
    setTimeout(()=>{
        vidasHTML.innerHTML = vidasJS2;
    }, 3550);
}

//Funcção para calcular Pontos
function calcularPontos(){
    pontosJS2 += 10;
    setTimeout(()=>{
        pontosHTML.innerHTML = pontosJS2;
    }, 3550);
}

//Primeira Secção
function primeiraSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao1){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao1, resultadoSeccao1);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao1);
    desabilitarProximaSeccao(botoesSeccao2, Seccoes[1]);
}

function segundaSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao2){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao2, resultadoSeccao2);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao2);
    desabilitarProximaSeccao(botoesSeccao3, Seccoes[2]);
}

function terceiraSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao3){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao3, resultadoSeccao3);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao3);

    if(vidasJS2 < 1){
        gameOver();
    }else{
        desabilitarProximaSeccao(botoesSeccao4, Seccoes[3]);
    }
}

function quartaSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao4){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao4, resultadoSeccao4);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao4);

    if(vidasJS2 < 1){
        gameOver();
    }else{
        desabilitarProximaSeccao(botoesSeccao5, Seccoes[4]);
    }
}

function quintaSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao5){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao5, resultadoSeccao5);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao5);

    if(vidasJS2 < 1){
        gameOver();
    }else{
        desabilitarProximaSeccao(botoesSeccao6, Seccoes[5]);
    }
}

function sextaSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao6){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao6, resultadoSeccao6);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao6);

    if(vidasJS2 < 1){
        gameOver();
    }else{
        desabilitarProximaSeccao(botoesSeccao7, Seccoes[6]);
    }
}

function setimaSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao7){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao7, resultadoSeccao7);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao7);

    if(vidasJS2 < 1){
        gameOver();
    }else{
        desabilitarProximaSeccao(botoesSeccao8, Seccoes[7]);
    }
}

function oitavaSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao8){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao8, resultadoSeccao8);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao8);

    if(vidasJS2 < 1){
        gameOver();
    }else{
        desabilitarProximaSeccao(botoesSeccao9, Seccoes[8]);
    }
}

function nonaSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao9){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao9, resultadoSeccao9);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao9);

    if(vidasJS2 < 1){
        gameOver();
    }else{
        desabilitarProximaSeccao(botoesSeccao10, Seccoes[9]);
    }
}

function decimaSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao10){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao10, resultadoSeccao10);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao10);

    if(vidasJS2 < 1){
        gameOver();
    }else{
        proximoNivel(pontosJS2, vidasJS2);
    }
}

//Função para aceitar Recomeçar o Jogo
aceitarRecomecarJogo.addEventListener("click", () =>{
    sessionStorage.clear();
    window.location.replace("nivel-1.html");
});

//Função para avançar no Nível 3
avancarNivel3.addEventListener("click", ()=>{
    sessionStorage.setItem("pontos", pontosJS2);
    sessionStorage.setItem("vidas", vidasJS2);
    window.location.replace("nivel-3.html");
})