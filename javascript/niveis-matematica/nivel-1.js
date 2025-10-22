// alert('Olá, Mundo!');
//Variaveis Globais
let pontosJS = 0;
let vidasJS = 3;
let Artigos = window.document.getElementsByTagName('article');
const aceitarRecomecarJogo = window.document.getElementById("aceitar-recomecar");
const avancarNivel2 = window.document.getElementById("avancar-nivel-2");
const resultados = Array(6);
const verificarCliques = Array(6);
// const vetorValoresSeccao3 = [[54, 6], [48, 8], [52, 4], [42, 6], [64, 4]];

//Habilitação da Secção 1
for(const botoes of botoesSeccao1){
    botoes.disabled = false;
    botoes.style.cursor = "pointer";
}
Seccoes[0].style.opacity = "1";

//Função que muda os valores dos Botões
function mudancaValores(resultado, btnSeccao){
    for(let c = 0; c < btnSeccao.length; c++){
        if(c == 0){
            if(resultado < 15){
                btnSeccao[c].innerHTML = Number(Math.floor(Math.random() * (((resultado - 1) - (resultado - 2)) + 1) + (resultado - 2)));
            }else{
                btnSeccao[c].innerHTML = Number(Math.floor(Math.random() * (((resultado - 2) - (resultado - 6)) + 1) + (resultado - 6)));
            }
        }else if(c == 1){
            btnSeccao[c].innerHTML = Number(Math.floor(Math.random() * (((resultado + 6) - (resultado + 2)) + 1) + (resultado + 2)));
        }else if(c == 2){
            btnSeccao[c].innerHTML = Number(Math.floor(Math.random() * (((resultado + 12) - (resultado + 8)) + 1) + (resultado + 8)));
        }else if(c == 3){
            btnSeccao[c].innerHTML = Number(Math.floor(Math.random() * (((resultado + 20) - (resultado + 14)) + 1) + (resultado + 14)));
        }
    }    
}

//Mudança de Valores da Seccão 1
valoresSeccao1[0].innerHTML = Number(Math.floor(Math.random() * ((8 - 4) + 1) + 4));
valoresSeccao1[1].innerHTML = Number(Math.floor(Math.random() * ((8 - 4) + 1) + 4));
resultados[1] = valoresSeccao1[0].innerHTML * valoresSeccao1[1].innerHTML;
mudancaValores(resultados[1], botoesSeccao1);
botoesSeccao1[Number(Math.floor(Math.random() * botoesSeccao1.length))].innerHTML = resultados[1];

//Mudança da Secçao 2
valoresSeccao2[0].innerHTML = Number(Math.floor(Math.random() * ((24 - 16) + 1) + 16));
valoresSeccao2[1].innerHTML = Number(Math.floor(Math.random() * ((38 - 24) + 1) + 24));
resultados[2] = Number(valoresSeccao2[0].innerHTML) + Number(valoresSeccao2[1].innerHTML);
mudancaValores(resultados[2], botoesSeccao2);
botoesSeccao2[Number(Math.floor(Math.random() * botoesSeccao1.length))].innerHTML = resultados[2];

//Mudança da Secção 3
// let c = 0;
// for(const v of vetorValoresSeccao3[Number(Math.floor(Math.random() * vetorValoresSeccao3.length))]){
//     valoresSeccao3[c].innerHTML = Number(v)
//     c++;
// }
mudarValoresQuestoes(valoresSeccao3[0], valoresSeccao3[1], 90, 40, 14, 9, 5);
resultados[3] = Number(valoresSeccao3[0].innerHTML) / Number(valoresSeccao3[1].innerHTML);
mudancaValores(resultados[3], botoesSeccao3);
botoesSeccao3[Number(Math.floor(Math.random() * botoesSeccao3.length))].innerHTML = resultados[3];

//Mudança da Secção 4
valoresSeccao4[0].innerHTML = Number(Math.floor(Math.random() * ((58 - 42) + 1) + 42));
valoresSeccao4[1].innerHTML = Number(Math.floor(Math.random() * ((26 - 15) + 1) + 15));
resultados[4] = Number(valoresSeccao4[0].innerHTML) - Number(valoresSeccao4[1].innerHTML);
mudancaValores(resultados[4], botoesSeccao4);
botoesSeccao4[Number(Math.floor(Math.random() * botoesSeccao4.length))].innerHTML = resultados[4];

//Mudança da Secção 5
valoresSeccao5[0].innerHTML = Number(Math.floor(Math.random() * ((9 - 4) + 1) + 4));
valoresSeccao5[1].innerHTML = Number(Math.floor(Math.random() * ((8 - 3) + 1) + 3));
valoresSeccao5[2].innerHTML = Number(Math.floor(Math.random() * ((8 - 3) + 1) + 3));
resultados[5] = Number(valoresSeccao5[0].innerHTML) + (Number(valoresSeccao5[1].innerHTML) * Number(valoresSeccao5[2].innerHTML));
mudancaValores(resultados[5], botoesSeccao5);
botoesSeccao5[Number(Math.floor(Math.random() * botoesSeccao5.length))].innerHTML = resultados[5];

//Função para calcular Vidas
function calcularVidas(){
    vidasJS -= 1;
    setTimeout(()=>{
        vidasHTML.innerHTML = vidasJS;
    }, 3550);
}

//Funcção para calcular Pontos
function calcularPontos(){
    pontosJS += 5;
    setTimeout(()=>{
        pontosHTML.innerHTML = pontosJS;
    }, 3550);
}

//Primeira Secão
function primeiraSeccao(botao){
    verificarCliques[1] = botao.textContent
    if(botao.innerHTML === resultados[1]){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao1, resultados[1]);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao1);
    desabilitarProximaSeccao(botoesSeccao2, Seccoes[1]);
}

//Segunda Secção
function segundaSeccao(botao){
    verificarCliques[2] = botao.textContent
    if(botao.innerHTML === resultados[2]){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao2, resultados[2]);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao2);
    desabilitarProximaSeccao(botoesSeccao3, Seccoes[2])
}

//Terceira Secção
function terceiraSeccao(botao){
    verificarCliques[3] = botao.textContent
    if(botao.innerHTML === resultados[3]){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao3, resultados[3]);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao3);

    if(vidasJS < 1){
        gameOver();       
    }else{
        desabilitarProximaSeccao(botoesSeccao4, Seccoes[3]);
    }
}

//Quarta Secção
function quartaSeccao(botao){
    verificarCliques[4] = botao.textContent
    if(botao.innerHTML === resultados[4]){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao4, resultados[4]);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao4);

    if(vidasJS < 1){
        gameOver();
    }else{
        desabilitarProximaSeccao(botoesSeccao5, Seccoes[4]);
    }
}

//Quinta Secção
function quintaSeccao(botao){
    verificarCliques[5] = botao.textContent
    if(botao.innerHTML === resultados[5]){
        respostaCerta(botao);
        calcularPontos();
    }else{
        respostaErrada(botao, botoesSeccao5, resultados[5]);
        calcularVidas();
    }
    desabilitarBotoesAtuais(botoesSeccao5);

    if(vidasJS < 1){
        gameOver();
    }else{
        let certo = 0;
        let errado = 0
        let trapaca = 0;
        for(let c = 1; c < resultados.length; c++){
            if(verificarCliques[c] === undefined || verificarCliques[c] !== resultados[c]){
                errado++
                // alert("Indefinido: " + verificarCliques.indexOf(verificarCliques[c]))
            }else if(verificarCliques[c] === resultados[c]){
                certo++
            }
        }
        console.log("Certo: " + certo)
        console.log("Errado: " + errado)

        if(errado > 2){
            setTimeout(() => {
                alert("ERRO: Secções de Respostas não concluídas.")
            }, 3600);
        }else if(certo >= 3){
            setTimeout(() => {
                alert("Tudo certo! Pode prosseguir.")
            }, 3600);
        // }else if(trapaca > 0){
        //     setTimeout(()=>{
        //         alert("ERRO: O Jogo foi hackeado!");
        //     }, 3600)
        }
        console.log(verificarCliques)
        // proximoNivel(pontosJS, vidasJS);
    }
    // console.log(verificarCliques);
    // let certo = 0
    // let errado = 0
    // setTimeout(()=>{
    //     for(let c = 1; c < resultados.length; c++){
    //         if(verificarCliques[c] === resultados[c]){
    //             certo++
    //         }else{
    //             errado++
    //         }
    //     }
    //     console.log("Total de Certos: " + certo);
    //     console.log("Total de Errados: " + errado);
    // }, 3500)
}

//Função para aceitar Recomeçar o jogo
aceitarRecomecarJogo.addEventListener("click", ()=>{
    window.location.reload();
})

//Função para Avançar para o Nível 2
avancarNivel2.addEventListener("click", ()=>{
    for(let c = 1; c < resultados.length; c++){
        if(verificarCliques[c] === undefined || verificarCliques[c] !== resultados[c]){
            errado++;
        }else if(verificarCliques[c] === resultados[c]){
            certo++;
        }
    }

    if(errado > 2){
        alert("ERRO: Secções de Respostas não concluídas.")
    }else if(certo >= 3 && certo <= 5){
        alert("Tudo certo! Pode prosseguir.")
    }
    // sessionStorage.setItem("pontos", pontosJS);
    // sessionStorage.setItem("vidas", vidasJS);
    sessionStorage.setItem("nivel2", true);
    window.location.replace("nivel-2.html");
});

//Colocando todos os valores de Resultados no padrão de Angola
for(let c = 1; c < resultados.length; c++){
    resultados[c] = Number(resultados[c]).toLocaleString("pt-AO");
}

console.log(resultados)
console.log(verificarCliques)

console.log(verificarCliques[0] === undefined)