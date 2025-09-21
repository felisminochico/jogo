// console.log("Funcioanando...")

//Recepção dos Pontos e Vidas do Nível 1
let pontosJS2 = Number(sessionStorage.getItem("pontos"));
let vidasJS2 = Number(sessionStorage.getItem("vidas"));
pontosHTML.innerHTML = pontosJS2;
vidasHTML.innerHTML = vidasJS2;

//Variáveis Globais
const valoresSeccao1 = window.document.querySelectorAll("#valores-seccao-1 span");
const valoresSeccao2 = window.document.querySelectorAll("#valores-seccao-2 span");
const valoresSeccao3 = window.document.querySelectorAll("#valores-seccao-3 span");
const valoresSeccao4 = window.document.querySelectorAll("#valores-seccao-4 span");
const valoresSeccao5 = window.document.querySelectorAll("#valores-seccao-5 span");
const valoresSeccao6 = window.document.querySelectorAll("#valores-seccao-6 span");
const valoresSeccao7 = window.document.querySelectorAll("#valores-seccao-7 span");
const valoresSeccao8 = window.document.querySelectorAll("#valores-seccao-8 span");
const valoresSeccao9 = window.document.querySelectorAll("#valores-seccao-9 span");
const valoresSeccao10 = window.document.querySelectorAll("#valores-seccao-10 span");
const botoesSeccao1 = window.document.getElementsByClassName('btn-primeira-seccao');
const botoesSeccao2 = window.document.getElementsByClassName('btn-segunda-seccao');
const botoesSeccao3 = window.document.getElementsByClassName('btn-terceira-seccao');
const botoesSeccao4 = window.document.getElementsByClassName('btn-quarta-seccao');
const botoesSeccao5 = window.document.getElementsByClassName('btn-quinta-seccao');
const botoesSeccao6 = window.document.getElementsByClassName("btn-sexta-seccao");
const botoesSeccao7 = window.document.getElementsByClassName("btn-setima-seccao");
const botoesSeccao8 = window.document.getElementsByClassName("btn-oitava-seccao");
const botoesSeccao9 = window.document.getElementsByClassName("btn-nona-seccao");
const botoesSeccao10 = window.document.getElementsByClassName("btn-decima-seccao");
const vetorValoresSeccao3 = [[399, 19], [396, 18], [368, 23], [408, 17], [414, 23], [418, 19], [432, 16], [435, 15], [456, 19]];
//Desabilitação da Secção 1
for(const botoes of botoesSeccao1){
    botoes.disabled = false;
    botoes.style.cursor = "pointer"
}
Seccoes[0].style.opacity = "1";

//Função que muda os valores dos Botões
function mudancaValores(res, btnSeccao){
    for(c = 0; c < btnSeccao.length; c++){
        if(res < 40){
            if(c == 0){
                btnSeccao[c].innerHTML = Number(Math.floor(Math.random() * (((res - 1) - (res - 5)) + 1) + (res - 5)));
            }else if(c == 1){
                btnSeccao[c].innerHTML = Number(Math.floor(Math.random() * (((res + 5) - (res + 1)) + 1) + (res + 1)));
            }else if(c == 2){
                btnSeccao[c].innerHTML = Number(Math.floor(Math.random() * (((res - 6) - (res - 11)) + 1) + (res - 11)));
            }else if(c == 3){
                btnSeccao[c].innerHTML = Number(Math.floor(Math.random() * (((res + 11) - (res + 6)) + 1) + (res + 6)));
            }
        }else{  
            if(c == 0){
                btnSeccao[c].innerHTML = Number(Math.floor(Math.random() * (((res - 1) - (res - 10)) + 1) + (res - 10)));
            }else if(c == 1){
                btnSeccao[c].innerHTML = Number(Math.floor(Math.random() * (((res + 10) - (res + 1)) + 1) + (res + 1)));
            }else if(c == 2){
                btnSeccao[c].innerHTML = Number(Math.floor(Math.random() * (((res - 11) - (res - 20)) + 1) + (res - 20)));
            }else if(c == 3){
                btnSeccao[c].innerHTML = Number(Math.floor(Math.random() * (((res + 20) - (res + 11)) + 1) + (res + 11)));
            }
        }
    }
}

//Mudança de Valores da Secção 1
valoresSeccao1[0].innerHTML = Number(Math.floor(Math.random() * ((19 - 13) + 1)) + 13);
valoresSeccao1[1].innerHTML = Number(Math.floor(Math.random() * ((17 - 11) + 1) + 11));
let resultadoSeccao1 = valoresSeccao1[0].innerHTML * valoresSeccao1[1].innerHTML;
mudancaValores(resultadoSeccao1, botoesSeccao1);
botoesSeccao1[Number(Math.floor(Math.random() * botoesSeccao1.length))].innerHTML = resultadoSeccao1;

//Mudança de Valores da Secção 2
valoresSeccao2[0].innerHTML = Number(Math.floor(Math.random() * ((163 - 121) + 1) + 121));
valoresSeccao2[1].innerHTML = Number(Math.floor(Math.random() * ((276 - 238) + 1) + 238));
let resultadoSeccao2 = Number(valoresSeccao2[0].innerHTML) + Number(valoresSeccao2[1].innerHTML);
mudancaValores(resultadoSeccao2, botoesSeccao2);
botoesSeccao2[Number(Math.floor(Math.random() * botoesSeccao2.length))].innerHTML = resultadoSeccao2;

//Mudança de Valors da Secção 3
let t = 0
for(const vet of vetorValoresSeccao3[Number(Math.floor(Math.random() * vetorValoresSeccao3.length))]){
    valoresSeccao3[t].innerHTML = Number(vet);
    t += 1;
}
let resultadoSeccao3 = valoresSeccao3[0].innerHTML / valoresSeccao3[1].innerHTML;
mudancaValores(resultadoSeccao3, botoesSeccao3);
botoesSeccao3[Number(Math.floor(Math.random() * botoesSeccao3.length))].innerHTML = resultadoSeccao3;

//Mudança de Valores da Secção 4
valoresSeccao4[0].innerHTML = Number(Math.floor(Math.random() * ((352 - 276) + 1) + 276));
valoresSeccao4[1].innerHTML = Number(Math.floor(Math.random() * ((172 - 118) + 1) + 118));
let resultadoSeccao4 = Number(valoresSeccao4[0].innerHTML) + Number(valoresSeccao4[1].innerHTML);
mudancaValores(resultadoSeccao4, botoesSeccao4);
botoesSeccao4[Number(Math.floor(Math.random() * botoesSeccao4.length))].innerHTML = resultadoSeccao4;

//Mudança de Valores da Secção 5
valoresSeccao5[0].innerHTML = Number(Math.floor(Math.random() * ((119 - 78) + 1) + 78));
valoresSeccao5[1].innerHTML = Number(Math.floor(Math.random() * ((38 - 18) + 1) + 18));
valoresSeccao5[2].innerHTML = Number(Math.floor(Math.random() * ((14 - 7) + 1) + 7));
let resultadoSeccao5 = Number(valoresSeccao5[0].innerHTML) + (valoresSeccao5[1].innerHTML * valoresSeccao5[2].innerHTML);
mudancaValores(resultadoSeccao5, botoesSeccao5);
botoesSeccao5[Number(Math.floor(Math.random() * botoesSeccao5.length))].innerHTML = resultadoSeccao5;
console.log(resultadoSeccao5)

function primeiraSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao1){
        alert("Resposta Certa!");
    }else{
        alert("Resposta Errada.")
    }
}

function segundaSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao2){
        alert("Resposta Certa!");
    }else{
        alert("Respsta Errada.");
    }
}

function terceiraSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao3){
        alert("Resposta Certa!");
    }else{
        alert("Resposta Errada.");
    }
}

function quartaSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao4){
        alert("Resposta Certa!");
    }else{
        alert("Resposta Errada.")
    }
}

function quintaSeccao(botao){
    if(Number(botao.innerHTML) === resultadoSeccao5){
        alert("Resposta Certa!");
    }else{
        alert("Resposta Errada.");
    }
}

//Criando Evento de clique da Primeira Secção
for(const botoes of botoesSeccao1){
    botoes.addEventListener("click", function(){
        primeiraSeccao(this);
    });
}

//Criando Evento de clique da Segunda Secção
for(const botoes of botoesSeccao2){
    botoes.addEventListener("click", function(){
        segundaSeccao(this);
    });
}

//Criando Evento de clique da Terceira Secção
for(const botoes of botoesSeccao3){
    botoes.addEventListener("click", function(){
        terceiraSeccao(this);
    });
}

//Criando Evento de clique da Quarta Secção
for(const botoes of botoesSeccao4){
    botoes.addEventListener("click", function(){
        quartaSeccao(this);
    });
}

//Criando Evento de clique da Quinta Secção
for(const botoes of botoesSeccao5){
    botoes.addEventListener("click", function(){
        quintaSeccao(this);
    });
}