// alert('Olá, Mundo!');
//Variaveis Globais
let pontosJS = 0;
let vidasJS = 3;
let botaoNivel2 = window.document.getElementById('btn-proximo-nivel')
let pontosHTML = window.document.getElementById('pontos')
let vidasHTML = window.document.getElementById('vidas');
let Seccoes = window.document.getElementsByTagName('section');
let Artigos = window.document.getElementsByTagName('article');
let botoesSeccao1 = window.document.getElementsByClassName('btn-primeira-seccao');
let botoesSeccao2 = window.document.getElementsByClassName('btn-segunda-seccao');
let botoesSeccao3 = window.document.getElementsByClassName('btn-terceira-seccao');
let botoesSeccao4 = window.document.getElementsByClassName('btn-quarta-seccao');
let botoesSeccao5 = window.document.getElementsByClassName('btn-quinta-seccao');

//Função para Desabilitar Botãoes da Secção-1 após um deles for clicado
function desabilitarBotoesSeccao1(){
    for(let c = 0; c <= 3; c++){
        botoesSeccao1[c].disabled = true;
        botoesSeccao1[c].style.cursor = 'auto';
        botoesSeccao1[c].style.color = 'black'
    }
}

//Função para Desabilitar Botões da Secção-2 após um deles for clicado
function desabilitarBotoesSeccao2(){
    for(let c = 0; c <= 3; c++){
        botoesSeccao2[c].disabled = true;
        botoesSeccao2[c].style.cursor = 'auto';
    }
}

//Função para Desabilitar Botões da Secção-3 após um deles for clicado.
function desabilitarBotoesSeccao3(){
    for(let c = 0; c <= 3; c++){
        botoesSeccao3[c].disabled = true;
        botoesSeccao3[c].style.cursor = 'auto';
    }
}

//Função para Desabilitar Botões da Secção-4 após um deles for clicado.
function desabilitarBotoesSeccao4(){
    for(let c = 0; c <= 3; c++){
        botoesSeccao4[c].disabled = true;
        botoesSeccao4[c].style.cursor = 'auto';
    }
}

//Função para Desabilitar Botões da Secção-4 após um deles dor clicado
function desabilitarBotoesSeccao5(){
    for(let c = 0; c <= 3; c++){
        botoesSeccao5[c].disabled = true;
        botoesSeccao5[c].style.cursor = 'auto';
    }
}

//Função para mostrar o Botão Certo da Secção 1
function mostrarBotaoCertoSessao1(){
    setTimeout(function(){
        botoesSeccao1[2].style.backgroundColor = 'rgb(12, 139, 12)';
        botoesSeccao1[2].style.color = 'white'
        vidasJS = vidasJS - 1;
        vidasHTML.innerHTML = Number(vidasJS);
    }, 3600)
}

//Função para mostrar o Botão Certo da Secção 2
function mostrarBotaoCertoSessao2(){
    setTimeout(function(){
        botoesSeccao2[0].style.backgroundColor = 'rgb(12, 139, 12)';
        botoesSeccao2[0].style.color = 'white'
        vidasJS = vidasJS - 1;
        vidasHTML.innerHTML = Number(vidasJS);
    }, 3600)
}

//Função para mostrar o Botão Certo da Secção 3
function mostrarBotaoCertoSessao3(){
    setTimeout(function(){
        botoesSeccao3[3].style.backgroundColor = 'rgb(12, 139, 12)';
        botoesSeccao3[3].style.color = 'white'
        vidasJS = vidasJS - 1;
        vidasHTML.innerHTML = Number(vidasJS);
    }, 3600)
}

//Função para mostrar o Botão Certo da Secção 4
function mostrarBotaoCertoSessao4(){
    setTimeout(function(){
        botoesSeccao4[1].style.backgroundColor = 'rgb(12, 139, 12)';
        botoesSeccao4[1].style.color = 'white'
        vidasJS = vidasJS - 1;
        vidasHTML.innerHTML = Number(vidasJS);
    }, 3600)
}

//Função para mostrar o Botão Certo da Secção 5
function mostrarBotaoCertoSessao5(){
    setTimeout(function(){
        botoesSeccao5[3].style.backgroundColor = 'rgb(12, 139, 12)';
        botoesSeccao5[3].style.color = 'white';
        vidasJS = vidasJS - 1;
        vidasHTML.innerHTML = Number(vidasJS);
    }, 3600)
}

//Função para Adicionar Pontos
function adicionarPontos(){
    setTimeout(function(){
        pontosJS = pontosJS + 5;
        pontosHTML.innerHTML = Number(pontosJS);
    }, 3600)
}

//Desabilitação dos Botões da Segunda Secção até na Quinta Secção.
for(let c = 0; c <= 3; c++){
    botoesSeccao2[c].disabled = true;
    botoesSeccao2[c].style.cursor = 'auto';
    botoesSeccao2[c].style.color = 'black'
    botoesSeccao3[c].disabled = true;
    botoesSeccao3[c].style.cursor = 'auto';
    botoesSeccao3[c].style.color = 'black'
    botoesSeccao4[c].disabled = true;
    botoesSeccao4[c].style.cursor = 'auto';
    botoesSeccao4[c].style.color = 'black'
    botoesSeccao5[c].disabled = true;
    botoesSeccao5[c].style.cursor = 'auto';
    botoesSeccao5[c].style.color = 'black'
}

//Opacidade da Segunda Secção até a Quinta Secção. 
for(let c = 1; c <= 4; c++){
    Seccoes[c].style.opacity = 0.1;
}

// for(let c = 0; c <= 3; c++){
//     botoesSeccao2[c].style.opacity = '0.6';
//     botoesSeccao2[c].style.opacity = '0.6';
//     botoesSeccao2[c].style.opacity = '0.6';
//     botoesSeccao2[c].style.opacity = '0.6';
// }

function primeiraSeccao(x){
    if(x == 26){
        botoesSeccao1[0].style.animation = 'respostaErrada 3.6s forwards';
        desabilitarBotoesSeccao1();
        mostrarBotaoCertoSessao1()
    }else{
        if(x == 22){
            botoesSeccao1[1].style.animation = 'respostaErrada 3.6s forwards';
            desabilitarBotoesSeccao1();
            mostrarBotaoCertoSessao1();
        }else{
            if(x == 24){
                botoesSeccao1[2].style.animation = 'respostaCerta 3.6s forwards';
                adicionarPontos()
                desabilitarBotoesSeccao1()
            }else{
                if(x == 36){
                    botoesSeccao1[3].style.animation = 'respostaErrada 3.6s forwards';
                    desabilitarBotoesSeccao1();
                    mostrarBotaoCertoSessao1();
                }
            }
        }
    }

    setTimeout(function(){
        Seccoes[1].style.opacity = '1'
        for(let c = 0; c <= 3; c++){
            botoesSeccao2[c].disabled = false;
            botoesSeccao2[c].style.cursor = 'pointer'
        }
    }, 5000)
}

function segundaSeccao(x){
    if(x == 50){
        botoesSeccao2[0].style.animation = 'respostaCerta 3.6s forwards';
        desabilitarBotoesSeccao2();
        adicionarPontos()
    }else{
        if(x == 40){
            botoesSeccao2[1].style.animation = 'respostaErrada 3.6s forwards';
            desabilitarBotoesSeccao2();
            mostrarBotaoCertoSessao2();
        }else{
            if(x == 47){
                botoesSeccao2[2].style.animation = 'respostaErrada 3.6s forwards';
                desabilitarBotoesSeccao2();
                mostrarBotaoCertoSessao2();
            }else{
                if(x == 54){
                    botoesSeccao2[3].style.animation = 'respostaErrada 3.6s forwards';
                    desabilitarBotoesSeccao2();
                    mostrarBotaoCertoSessao2();
                }
            }
        }
    }

    setTimeout(function(){
        Seccoes[2].style.opacity = '1'
        for(let c = 0; c <= 3; c++){
            botoesSeccao3[c].disabled = false;
            botoesSeccao3[c].style.cursor = 'pointer'
        }
    }, 5000)
}

function terceiraSeccao(x){
    if(x == 18){
        botoesSeccao3[0].style.animation = 'respostaErrada 3.6s forwards';
        mostrarBotaoCertoSessao3();
        desabilitarBotoesSeccao3()
    }else{
        if(x == 14){
            botoesSeccao3[1].style.animation = 'respostaErrada 3.6s forwards';
            mostrarBotaoCertoSessao3();
            desabilitarBotoesSeccao3();
        }else if(x == 22){
            botoesSeccao3[2].style.animation = 'respostaErrada 3.6s forwards';
            mostrarBotaoCertoSessao3();
            desabilitarBotoesSeccao3();
        }else{
            if(x == 9){
                botoesSeccao3[3].style.animation = 'respostaCerta 3.6s forwards';
                desabilitarBotoesSeccao3();
                adicionarPontos();
            }
        }
    }

    setTimeout(function(){
        if(vidasJS < 1){
            alert('Ficaste sem nenhuma Vida de Jogo. Recomece o jogo. ')
        }else{
            Seccoes[3].style.opacity = 1;
            for(let c = 0; c <= 3; c++){
                botoesSeccao4[c].disabled = false;
                botoesSeccao4[c].style.cursor = 'pointer';
            }
        }
    }, 5000)
}

function quartaSeccao(x){
    switch (x){
        case 21:
            botoesSeccao4[0].style.animation = 'respostaErrada 3.6s forwards';
            mostrarBotaoCertoSessao4();
            desabilitarBotoesSeccao4()
        break;

        case 25:
            botoesSeccao4[1].style.animation = 'respostaCerta 3.6s forwards';
            adicionarPontos();
            desabilitarBotoesSeccao4();
        break;

        case 17:
            botoesSeccao4[2].style.animation = 'respostaErrada 3.6s forwards';
            mostrarBotaoCertoSessao4();
            desabilitarBotoesSeccao4();
        break;

        case 27:
            botoesSeccao4[3].style.animation = 'respostaErrada 3.6s forwards';
            mostrarBotaoCertoSessao4();
            desabilitarBotoesSeccao4();
        break;
    }

    setTimeout(function(){
        if(vidasJS < 1){
            alert('Ficaste sem Vida de Jogo. Recomece o Jogo.')
        }else{
            Seccoes[4].style.opacity = '1';
            let c = 0;
            do{
                botoesSeccao5[c].disabled = false;
                botoesSeccao5[c].style.cursor = 'pointer';
                c += 1;
            }while(c <= 3)
        }
    }, 5000)
}

function quintaSeccao(x){
    switch(x){
        case 44:
            botoesSeccao5[0].style.animation = 'respostaErrada 3.6s forwards';
            mostrarBotaoCertoSessao5();
            desabilitarBotoesSeccao5();
        break;

        case 28:
            botoesSeccao5[1].style.animation = 'respostaErrada 3.6s forwards';
            mostrarBotaoCertoSessao5();
            desabilitarBotoesSeccao5();
            break;
        
        case 38:
            botoesSeccao5[2].style.animation = 'respostaErrada 3.6s forwards';
            mostrarBotaoCertoSessao5();
            desabilitarBotoesSeccao5();
            break;

        case 29:
            botoesSeccao5[3].style.animation = 'respostaCerta 3.6s forwards';
            desabilitarBotoesSeccao5();
            adicionarPontos();
        break;
        }    

        setTimeout(function(){
            if(vidasJS < 1){
                botaoNivel2.disabled = true;
                botaoNivel2.style.cursor = 'auto';
            }else{
                botaoNivel2.disabled = false;
                botaoNivel2.style.backgroundColor = '#45214A'
                botaoNivel2.style.cursor = 'pointer'
            }
        }, 5000)
}