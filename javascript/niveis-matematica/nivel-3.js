// alert("Olá, Mundo!");
//Recepção dos Pontos e Vidas do Nível 2
let pontosJS3 = Number(sessionStorage.getItem("pontos"));
let vidasJS3 = Number(sessionStorage.getItem("vidas")) + 2;
pontosHTML.innerHTML = pontosJS3;
vidasHTML.innerHTML = vidasJS3;

//Variáveis Globais

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
console.log(resultadoSeccao2);

function primeiraSeccao(botao){
    
}