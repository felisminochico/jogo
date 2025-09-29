// alert("Olá, Mundo!");
//Recepção dos Pontos e Vidas do Nível 2
let pontosJS3 = Number(sessionStorage.getItem("pontos"));
let vidasJS3 = Number(sessionStorage.getItem("vidas")) + 2;
pontosHTML.innerHTML = pontosJS3;
vidasHTML.innerHTML = vidasJS3;

//Variáveis Globais
const aceitarRecomecarJogo = window.document.getElementById("aceitar-recomecar");
const avancarNivel4 = window.document.getElementById("avancar-nivel-4");
// const vetorValoresSeccao3 = [[616, 14], [616, 14], [728, 14], [714, 14], [600, 15], [615, 15], [735, 15], [765, 15], [621, 27], [648, 27], [729, 27], [783, 27], [620, 31], [651, 31], [744, 31], [775, 31]];
// const vetorValoresSeccao6 = [[612, 18], [630, 18], [648, 18], [720, 18], [627, 33], [660, 33], [726, 33], [759, 33], [608, 38], [646, 38], [684, 38], [798, 38]];
// const vetorValoresSeccao8 = [[616, 14], [616, 14], [728, 14], [714, 14], [600, 15], [615, 15], [735, 15], [765, 15], [726, 33], [759, 33], [608, 38], [646, 38], [684, 38], [798, 38]];//Não feito ainda...
// const vetorValoresSeccao11 = [[616, 14], [616, 14], [728, 14], [714, 14], [600, 15], [615, 15], [735, 15], [765, 15], [726, 33], [759, 33], [608, 38], [646, 38], [684, 38], [798, 38]];//Não feito ainda...

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
// let t = 0;
// for(let vet of vetorValoresSeccao3[Number(Math.floor(Math.random() * vetorValoresSeccao3.length))]){
//     valoresSeccao3[t].innerHTML = Number(vet);
//     t += 1;
// }
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
// t = 0;
// for(let vet of vetorValoresSeccao6[Number(Math.floor(Math.random() * vetorValoresSeccao6.length))]){
//     valoresSeccao6[t].innerHTML = Number(vet);
//     t += 1;
// }
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
// t = 0
// for(let vet of vetorValoresSeccao8[Number(Math.floor(Math.random() * vetorValoresSeccao8.length))]){
//     valoresSeccao8[t].innerHTML = Number(vet);
//     t += 1;
// }
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
// t = 1;
// for(let vet of vetorValoresSeccao11[Number(Math.floor(Math.random() * vetorValoresSeccao11.length))]){
//     valoresSeccao11[t].innerHTML = Number(vet);
//     t += 1;
// }
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

function primeiraSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao1){
        alert("Resposta Certa!");
    }else{
        alert("Resposta Errada.");
    }
}

function segundaSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao2){
        alert("Resposta Certa!");
    }else{
        alert("Resposta Errada.");
    }
}

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