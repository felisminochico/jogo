// alert("Olá, Mundo!");
//Recepção dos Pontos e Vidas do Nível 2
let pontosJS3 = Number(sessionStorage.getItem("pontos"));
let vidasJS3 = Number(sessionStorage.getItem("vidas")) + 2;
pontosHTML.innerHTML = pontosJS3;
vidasHTML.innerHTML = vidasJS3;

//Variáveis Globais
const aceitarRecomecarJogo = window.document.getElementById("aceitar-recomecar");
const avancarNivel4 = window.document.getElementById("avancar-nivel-4");

//Desabilitação da Primeira Secção
for(const botoes of botoesSeccao1){
    botoes.disabled = false;
    botoes.style.cursor = "pointer";
}
Seccoes[0].style.opacity = "1";

//Mudança de Valores da Secção 1
valoresSeccao1[0].innerHTML = Number(Math.floor(Math.random() * ((33 - 22) + 1) + 22));
valoresSeccao1[1].innerHTML = Number(Math.floor(Math.random() * ((19 - 12) + 1) + 12));
let resultadoSeccao1 = valoresSeccao1[0].innerHTML * valoresSeccao1[1].innerHTML;
mudancaValores2(resultadoSeccao1, botoesSeccao1);
botoesSeccao1[Number(Math.floor(Math.random() * botoesSeccao1.length))].innerHTML = resultadoSeccao1;

//Mudança de Valores da Secção 2
valoresSeccao2[0].innerHTML = Number(Math.floor(Math.random() * ((613 - 491) + 1) + 491));
valoresSeccao2[1].innerHTML = Number(Math.floor(Math.random() * ((373 - 291) + 1) + 291));
let resultadoSeccao2 = Number(valoresSeccao2[0].innerHTML) + Number(valoresSeccao2[1].innerHTML);
mudancaValores2(resultadoSeccao2, botoesSeccao2);
botoesSeccao2[Number(Math.floor(Math.random() * botoesSeccao2.length))].innerHTML = resultadoSeccao2;

//Mudança de Valores da Secção 3
mudarValoresQuestoes(valoresSeccao3[0], valoresSeccao3[1], 790, 600, 33, 14, 30);
let resultadoSeccao3 = Number(valoresSeccao3[0].innerHTML) / Number(valoresSeccao3[1].innerHTML)
mudancaValores2(resultadoSeccao3, botoesSeccao3);
botoesSeccao3[Number(Math.floor(Math.random() * botoesSeccao3.length))].innerHTML = resultadoSeccao3;

//mudança de Valores da Secção 4
valoresSeccao4[0].innerHTML = Number(Math.floor(Math.random() * ((864 - 631) + 1) + 631));
valoresSeccao4[1].innerHTML = Number(Math.floor(Math.random() * ((493 - 343) + 1) + 343));
let resultadoSeccao4 = Number(valoresSeccao4[0].innerHTML) - Number(valoresSeccao4[1].innerHTML);
mudancaValores2(resultadoSeccao4, botoesSeccao4);
botoesSeccao4[Number(Math.floor(Math.random() * botoesSeccao4.length))].innerHTML = resultadoSeccao4;

//Mudança de Valores da Secção 5
valoresSeccao5[0].innerHTML = Number(Math.floor(Math.random() * ((87 - 68) + 1) + 68));
valoresSeccao5[1].innerHTML = Number(Math.floor(Math.random() * ((15 - 7) + 1) + 7));
valoresSeccao5[2].innerHTML = Number(Math.floor(Math.random() * ((313 - 209) + 1) + 209));
let resultadoSeccao5 = (Number(valoresSeccao5[0].innerHTML) * Number(valoresSeccao5[1].innerHTML)) + Number(valoresSeccao5[2].innerHTML);
mudancaValores2(resultadoSeccao5, botoesSeccao5);
botoesSeccao5[Number(Math.floor(Math.random() * botoesSeccao5.length))].innerHTML = resultadoSeccao5;

//Mudança de Valores da Secção 6
mudarValoresQuestoes(valoresSeccao6[0], valoresSeccao6[1], 740, 500, 32, 14, 30);
valoresSeccao6[2].innerHTML = Number(Math.floor(Math.random() * ((373 - 264) + 1) + 264));
let resultadoSeccao6 = (Number(valoresSeccao6[0].innerHTML) / Number(valoresSeccao6[1].innerHTML)) + Number(valoresSeccao6[2].innerHTML);
mudancaValores2(resultadoSeccao6, botoesSeccao6);
botoesSeccao6[Number(Math.floor(Math.random() * botoesSeccao6.length))].innerHTML = resultadoSeccao6;

//Mudança de Valores da Secção 7
valoresSeccao7[0].innerHTML = Number(Math.floor(Math.random() * ((96 - 71) + 1) + 71));
valoresSeccao7[1].innerHTML = Number(Math.floor(Math.random() * ((13 - 7) + 1) + 7));
valoresSeccao7[2].innerHTML = Number(Math.floor(Math.random() * ((364 - 223) + 1) + 223));
let resultadoSeccao7 = (Number(valoresSeccao7[0].innerHTML) * Number(valoresSeccao7[1].innerHTML)) - Number(valoresSeccao7[2].innerHTML);
mudancaValores2(resultadoSeccao7, botoesSeccao7);
botoesSeccao7[Number(Math.floor(Math.random() * botoesSeccao7.length))].innerHTML = resultadoSeccao7;

//Mudança de Valores da Secção 8
mudarValoresQuestoes(valoresSeccao8[0], valoresSeccao8[1], 800, 600, 36, 14, 36);
valoresSeccao8[2].innerHTML = Number(Math.floor(Math.random() * ((23 - 7) + 1) + 7));
let resultadoSeccao8 = (Number(valoresSeccao8[0].innerHTML) / Number(valoresSeccao8[1].innerHTML)) - Number(valoresSeccao8[2].innerHTML);
mudancaValores2(resultadoSeccao8, botoesSeccao8);
botoesSeccao8[Number(Math.floor(Math.random() * botoesSeccao8.length))].innerHTML = resultadoSeccao8;

//Mudança de Valores da Secção 9
valoresSeccao9[0].innerHTML = Number(Math.floor(Math.random() * ((798 - 568) + 1) + 568));
valoresSeccao9[1].innerHTML = Number(Math.floor(Math.random() * ((478 - 325) + 1) + 325));
valoresSeccao9[2].innerHTML = Number(Math.floor(Math.random() * ((431 - 214) + 1) + 214));
let resultadoSeccao9 = Number(valoresSeccao9[0].innerHTML) + Number(valoresSeccao9[1].innerHTML) - Number(valoresSeccao9[2].innerHTML);
mudancaValores2(resultadoSeccao9, botoesSeccao9);
botoesSeccao9[Number(Math.floor(Math.random() * botoesSeccao9.length))].innerHTML = resultadoSeccao9;

//Mudança de Valores da Secção 10
valoresSeccao10[0].innerHTML = Number(Math.floor(Math.random() * ((865 - 623) + 1) + 623));
valoresSeccao10[1].innerHTML = Number(Math.floor(Math.random() * ((479 - 326) + 1) + 326));
valoresSeccao10[2].innerHTML = Number(Math.floor(Math.random() * ((375 - 243) + 1) + 243));
let resultadoSeccao10 = Number(valoresSeccao10[0].innerHTML) - Number(valoresSeccao10[1].innerHTML) + Number(valoresSeccao10[2].innerHTML);
mudancaValores2(resultadoSeccao10, botoesSeccao10);
botoesSeccao10[Number(Math.floor(Math.random() * botoesSeccao10.length))].innerHTML = resultadoSeccao10;

//Mudança de Valores da Secção 11
valoresSeccao11[0].innerHTML = Number(Math.floor(Math.random() * ((47 - 32) + 1) + 32));
mudarValoresQuestoes(valoresSeccao11[1], valoresSeccao11[2], 800, 500, 34, 13, 20);
let resultadoSeccao11 = Number(valoresSeccao11[0].innerHTML) * (Number(valoresSeccao11[1].innerHTML) / Number(valoresSeccao11[2].innerHTML));
mudancaValores2(resultadoSeccao11, botoesSeccao11);
botoesSeccao11[Number(Math.floor(Math.random() * botoesSeccao11.length))].innerHTML = resultadoSeccao11;

//Mudança de Valores da Secção 12
mudarValoresQuestoes(valoresSeccao12[0], valoresSeccao12[1], 800, 560, 32, 14, 16);
valoresSeccao12[2].innerHTML = Number(Math.floor(Math.random() * ((47 - 23) + 1) + 23));
let resultadoSeccao12 = (Number(valoresSeccao12[0].innerHTML) / Number(valoresSeccao12[1].innerHTML)) * Number(valoresSeccao12[2].innerHTML);
mudancaValores2(resultadoSeccao12, botoesSeccao12);
botoesSeccao12[Number(Math.floor(Math.random() * botoesSeccao12.length))].innerHTML = resultadoSeccao12;

//Mudança de Valores da Secção 13
valoresSeccao13[0].innerHTML = Number(Math.floor(Math.random() * ((72 - 42) + 1) + 42));
mudarValoresQuestoes(valoresSeccao13[1], valoresSeccao13[2], 800, 500, 34, 14, 40);
valoresSeccao13[3].innerHTML = Number(Math.floor(Math.random() * ((490 - 280) + 1) + 280));
let resultadoSeccao13 = (Number(valoresSeccao13[0].innerHTML) * (Number(valoresSeccao13[1].innerHTML) / Number(valoresSeccao13[2].innerHTML))) + Number(valoresSeccao13[3].innerHTML);
mudancaValores2(resultadoSeccao13, botoesSeccao13);
botoesSeccao13[Number(Math.floor(Math.random() * botoesSeccao13.length))].innerHTML = resultadoSeccao13;

//Mudança de Valores da Secção 14
mudarValoresQuestoes(valoresSeccao14[0], valoresSeccao14[1], 1200, 700, 64, 24, 30);
valoresSeccao14[2].innerHTML = Number(Math.floor(Math.random() * ((78 - 32) + 1) + 32));
valoresSeccao14[3].innerHTML = Number(Math.floor(Math.random() * ((532 - 391) + 1) + 391));
let resultadoSeccao14 = ((Number(valoresSeccao14[0].innerHTML) / Number(valoresSeccao14[1].innerHTML)) * Number(valoresSeccao14[2].innerHTML)) - Number(valoresSeccao14[3].innerHTML);
mudancaValores2(resultadoSeccao14, botoesSeccao14);
botoesSeccao14[Number(Math.floor(Math.random() * botoesSeccao14.length))].innerHTML = resultadoSeccao14;

//Mudança de Valores da Secção 15
valoresSeccao15[0].innerHTML = Number(Math.floor(Math.random() * ((95 - 52) + 1) + 52));
mudarValoresQuestoes(valoresSeccao15[1], valoresSeccao15[2], 2600, 1300, 96, 44, 30);
valoresSeccao15[3].innerHTML = Number(Math.floor(Math.random() * ((297 - 142) + 1) + 142));
valoresSeccao15[4].innerHTML = Number(Math.floor(Math.random() * ((497 - 325) + 1) + 325));
let resultadoSeccao15 = (Number(valoresSeccao15[0].innerHTML) * (Number(valoresSeccao15[1].innerHTML) / Number(valoresSeccao15[2].innerHTML))) + (Number(valoresSeccao15[3].innerHTML) - Number(valoresSeccao15[4].innerHTML));
mudancaValores2(resultadoSeccao15, botoesSeccao15);
botoesSeccao15[Number(Math.floor(Math.random() * botoesSeccao15.length))].innerHTML = resultadoSeccao15;
console.log(resultadoSeccao15);

//Função para calcular pontos
function calcularPontos(){
    pontosJS3 += 15;
    setTimeout(()=>{
        pontosHTML.innerHTML = pontosJS3;
    }, 3550);
}

//Função para calcular Vidas
function calcularVidas(){
    vidasJS3 -= 1;
    setTimeout(()=>{
        vidasHTML.innerHTML = vidasJS3;
    }, 3550);
}

function primeiraSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao1){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao1, resultadoSeccao1);
    }
}

function segundaSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao2){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao2, resultadoSeccao2);
        calcularVidas();
    }
}

function terceiraSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao3){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao3, resultadoSeccao3);
        calcularVidas();
    }
    // desabilitarBotoesAtuais(botoesSeccao3);

    // if(vidasJS2 < 1){
    //     gameOver();
    // }else{
    //     desabilitarProximaSeccao(botoesSeccao4, Seccoes[3]);
    // }
}

// function quartaSeccao(botao){
//     if(Number(botao.innerHTML) === resultadoSeccao4){
//         respostaCerta(botao);
//         calcularPontos();
//     }else{
//         respostaErrada(botao, botoesSeccao4, resultadoSeccao4);
//         calcularVidas();
//     }
//     desabilitarBotoesAtuais(botoesSeccao4);

//     if(vidasJS2 < 1){
//         gameOver();
//     }else{
//         desabilitarProximaSeccao(botoesSeccao5, Seccoes[4]);
//     }
// }

// function quintaSeccao(botao){
//     if(Number(botao.innerHTML) === resultadoSeccao5){
//         respostaCerta(botao);
//         calcularPontos();
//     }else{
//         respostaErrada(botao, botoesSeccao5, resultadoSeccao5);
//         calcularVidas();
//     }
//     desabilitarBotoesAtuais(botoesSeccao5);

//     if(vidasJS2 < 1){
//         gameOver();
//     }else{
//         desabilitarProximaSeccao(botoesSeccao6, Seccoes[5]);
//     }
// }

// function sextaSeccao(botao){
//     if(Number(botao.innerHTML) === resultadoSeccao6){
//         respostaCerta(botao);
//         calcularPontos();
//     }else{
//         respostaErrada(botao, botoesSeccao6, resultadoSeccao6);
//         calcularVidas();
//     }
//     desabilitarBotoesAtuais(botoesSeccao6);

//     if(vidasJS2 < 1){
//         gameOver();
//     }else{
//         desabilitarProximaSeccao(botoesSeccao7, Seccoes[6]);
//     }
// }

// function setimaSeccao(botao){
//     if(Number(botao.innerHTML) === resultadoSeccao7){
//         respostaCerta(botao);
//         calcularPontos();
//     }else{
//         respostaErrada(botao, botoesSeccao7, resultadoSeccao7);
//         calcularVidas();
//     }
//     desabilitarBotoesAtuais(botoesSeccao7);

//     if(vidasJS2 < 1){
//         gameOver();
//     }else{
//         desabilitarProximaSeccao(botoesSeccao8, Seccoes[7]);
//     }
// }

// function oitavaSeccao(botao){
//     if(Number(botao.innerHTML) === resultadoSeccao8){
//         respostaCerta(botao);
//         calcularPontos();
//     }else{
//         respostaErrada(botao, botoesSeccao8, resultadoSeccao8);
//         calcularVidas();
//     }
//     desabilitarBotoesAtuais(botoesSeccao8);

//     if(vidasJS2 < 1){
//         gameOver();
//     }else{
//         desabilitarProximaSeccao(botoesSeccao9, Seccoes[8]);
//     }
// }

// function nonaSeccao(botao){
//     if(Number(botao.innerHTML) === resultadoSeccao9){
//         respostaCerta(botao);
//         calcularPontos();
//     }else{
//         respostaErrada(botao, botoesSeccao9, resultadoSeccao9);
//         calcularVidas();
//     }
//     desabilitarBotoesAtuais(botoesSeccao9);

//     if(vidasJS2 < 1){
//         gameOver();
//     }else{
//         desabilitarProximaSeccao(botoesSeccao10, Seccoes[9]);
//     }
// }

// function decimaSeccao(botao){
//     if(Number(botao.innerHTML) === resultadoSeccao10){
//         respostaCerta(botao);
//         calcularPontos();
//     }else{
//         respostaErrada(botao, botoesSeccao10, resultadoSeccao10);
//         calcularVidas();
//     }
//     desabilitarBotoesAtuais(botoesSeccao10);

//     if(vidasJS2 < 1){
//         gameOver();
//     }else{
//         proximoNivel(pontosJS2, vidasJS2);
//     }
// }

//Função para aceitar Recomeçar o Jogo
aceitarRecomecarJogo.addEventListener("click", () =>{
    sessionStorage.clear();
    window.location.replace("nivel-1.html");
});

for(const botoes of todosBotoesSeccoes){
    botoes.innerHTML = Number(botoes.innerHTML).toLocaleString("pt-AO");
}

function teste(){
    let n1 = Number(Math.floor(Math.random() * ((860 - 600) + 1) + 600));
    let n2 = Number(Math.floor(Math.random() * ((40 - 14) + 1) + 14));
    let res = n1 / n2

    if(Number.isInteger(res) === false || res < 40){
        teste()
    }else{
        console.log(`${n1} / ${n2} = ${res}`)
    }
}

teste()