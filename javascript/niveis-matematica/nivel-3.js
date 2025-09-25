// alert("Olá, Mundo!");
//Recepção dos Pontos e Vidas do Nível 2
let pontosJS3 = Number(sessionStorage.getItem("pontos"));
let vidasJS3 = Number(sessionStorage.getItem("vidas")) + 2;
pontosHTML.innerHTML = pontosJS3;
vidasHTML.innerHTML = vidasJS3;

//Variáveis Globais
const aceitarRecomecarJogo = window.document.getElementById("aceitar-recomecar");
const avancarNivel4 = window.document.getElementById("avancar-nivel-4");
const vetorValoresSeccao3 = [[616, 14], [616, 14], [728, 14], [714, 14], [600, 15], [615, 15], [735, 15], [765, 15], [621, 27], [648, 27], [729, 27], [783, 27], [620, 31], [651, 31], [744, 31], [775, 31]];
const vetorValoresSeccao6 = [[612, 18], [630, 18], [648, 18], [720, 18], [627, 33], [660, 33], [726, 33], [759, 33], [608, 38], [646, 38], [684, 38], [798, 38]];

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
let t = 0;
for(let vet of vetorValoresSeccao3[Number(Math.floor(Math.random() * vetorValoresSeccao3.length))]){
    valoresSeccao3[t].innerHTML = Number(vet);
    t += 1;
}
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
t = 0;
for(let vet of vetorValoresSeccao6[Number(Math.floor(Math.random() * vetorValoresSeccao6.length))]){
    valoresSeccao6[t].innerHTML = Number(vet);
    t += 1;
}
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

console.log(resultadoSeccao7);

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