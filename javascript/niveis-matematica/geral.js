// alert("Olá, Mundo!");
const nav = window.document.getElementsByTagName("nav")[0];
let pontosHTML = window.document.getElementById('pontos');
let vidasHTML = window.document.getElementById('vidas');
let Seccoes = window.document.getElementsByTagName('section');
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
const valoresSeccao11 = window.document.querySelectorAll("#valores-seccao-11 span");
const valoresSeccao12 = window.document.querySelectorAll("#valores-seccao-12 span");
const valoresSeccao13 = window.document.querySelectorAll("#valores-seccao-13 span");
const valoresSeccao14 = window.document.querySelectorAll("#valores-seccao-14 span");
const valoresSeccao15 = window.document.querySelectorAll("#valores-seccao-15 span");
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
const botoesSeccao11 = window.document.getElementsByClassName("btn-seccao-11");
const botoesSeccao12 = window.document.getElementsByClassName("btn-seccao-12");
const botoesSeccao13 = window.document.getElementsByClassName("btn-seccao-13");
const botoesSeccao14 = window.document.getElementsByClassName("btn-seccao-14");
const botoesSeccao15 = window.document.getElementsByClassName("btn-seccao-15");
const todosBotoesSeccoes = window.document.querySelectorAll(".seccoes button");
const caixaGameOver = window.document.getElementById("game-over");
let posicaoAtualNav = nav.offsetTop;
const negarRecomecarJogo = window.document.getElementById("nao-aceitar-recomecar");
const aceitarSairCategoria = window.document.getElementById("aceitar-sair-categoria");
const negarSairCategoria = window.document.getElementById("nao-aceitar-sair-categoria");
const caixaSairCategoria = window.document.getElementById("sair-categoria");
const caixaNivel2 = window.document.getElementById("proximo-nivel");
const botaoSairCategoria = window.document.getElementById("btn-sair-categoria");
const pontosFinal = window.document.getElementById("pts");
const vidasFinal = window.document.getElementById("vds");
let linguagemLocal = window.navigator.language;
let hora = new Date().toLocaleString(linguagemLocal, {hour: "numeric"});
const anoAtual = window.document.getElementById("ano-atual");

//Verificação do ano atual
anoAtual.innerHTML = "\u00A9 " + new Date().toLocaleString(linguagemLocal, {year: "numeric"});

//Desabilitação e Opacidade de todas Secções e Botões
// for(const botoes of todosBotoesSeccoes){
//     botoes.disabled = true;
//     botoes.style.cursor = "auto";
// }
// for(const secc of Seccoes){
//     secc.style.opacity = "0.1";
// }

//Função que muda os valores das Questões
function mudarValoresQuestoes(dividendo, divisor, dividendoMax, dividendoMin, divisorMax, divisorMin, resultadoMin){
    dividendo.innerHTML = Number(Math.floor(Math.random() * ((dividendoMax - dividendoMin) + 1) + dividendoMin))
    divisor.innerHTML = Number(Math.floor(Math.random() * ((divisorMax - divisorMin) + 1) + divisorMin));
    let res = Number(dividendo.innerHTML) / Number(divisor.innerHTML)

    if(Number.isInteger(res) === false || res < resultadoMin){
        mudarValoresQuestoes(dividendo, divisor, dividendoMax, dividendoMin, divisorMax, divisorMin, resultadoMin);
    }else{
        console.log("O resultado é exato.");
    }
}

//Função que muda os valores dos Botões
function mudancaValores2(res, btnSeccao){
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
                btnSeccao[c].textContent = Number(Math.floor(Math.random() * (((res - 1) - (res - 10)) + 1) + (res - 10)));
            }else if(c == 1){
                btnSeccao[c].textContent = Number(Math.floor(Math.random() * (((res + 10) - (res + 1)) + 1) + (res + 1)));
            }else if(c == 2){
                btnSeccao[c].textContent = Number(Math.floor(Math.random() * (((res - 11) - (res - 20)) + 1) + (res - 20)));
            }else if(c == 3){
                btnSeccao[c].textContent = Number(Math.floor(Math.random() * (((res + 20) - (res + 11)) + 1) + (res + 11)));
            }
        }
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

//Criando Evento de clique da Sexta Secção
for(const botoes of botoesSeccao6){
    botoes.addEventListener("click", function(){
        sextaSeccao(this);
    });
}

//Criando Evento de clique da Sétima Secção
for(const botoes of botoesSeccao7){
    botoes.addEventListener("click", function(){
        setimaSeccao(this);
    });
}

//Criando Evento de clique da Oitava Secção
for(const botoes of botoesSeccao8){
    botoes.addEventListener("click", function(){
        oitavaSeccao(this);
    });
}

//Criando Evento de clique da Nona Secção
for(const botoes of botoesSeccao9){
    botoes.addEventListener("click", function(){
        nonaSeccao(this);
    });
}

//Criando Evento de clique da Décima Secção
for(const botoes of botoesSeccao10){
    botoes.addEventListener("click", function(){
        decimaSeccao(this);
    });
}

//Criando Evento de clique da Décima Primeira Secção
for(const botoes of botoesSeccao11){
    botoes.addEventListener("click", function(){
        decimaPrimeiraSeccao(this);
    });
}

//Criando Evento de clique da Décima Segunda Secção
for(const botoes of botoesSeccao12){
    botoes.addEventListener("click", function(){
        decimaSegundaSeccao(this);
    });
}

//Criando Evento de clique da Décima Terceira Secção
for(const botoes of botoesSeccao13){
    botoes.addEventListener("click", function(){
        decimaTerceiraSeccao(this);
    });
}

//Criando Evento de clique da Décima Quarta Secção
for(const botoes of botoesSeccao14){
    botoes.addEventListener("click", function(){
        decimaQuartaSeccao(this);
    });
}

//Criando Evento de clique da Décima Quinta Secção
for(const botoes of botoesSeccao15){
    botoes.addEventListener("click", function(){
        decimaQuintaSeccao(this);
    });
}

//Janela Sair Categoria
function janelaSairCategoria(){
    caixaSairCategoria.style.animation = "janela 0.5s forwards";
    caixaSairCategoria.showModal();
    window.document.body.style.overflow = "hidden";
}

negarSairCategoria.addEventListener("click", ()=>{
    caixaSairCategoria.close();
    window.document.body.style.overflow = "auto";
})

aceitarSairCategoria.addEventListener("click", ()=>{
    sessionStorage.clear();
    window.location.replace("../categorias.html");
})

botaoSairCategoria.addEventListener("click", ()=>{
    janelaSairCategoria();
});

//Janela do Game Over
function gameOver(){
    setTimeout(()=>{
        caixaGameOver.style.animation = "janela 0.5s forwards";
        caixaGameOver.showModal();
        window.document.body.style.overflow = "hidden";
    }, 5000);
}

//Janela do Nível 2
function proximoNivel(pts, vds){
    setTimeout(()=>{
        caixaNivel2.style.animation = "janela 0.5s forwards";
        caixaNivel2.showModal();
        window.document.body.style.overflow = "hidden";
        pontosFinal.innerHTML = `Pontos: <strong>${pts}</strong>`;
        vidasFinal.innerHTML = `Vidas: <strong>${vds}</strong>`;
    }, 5000);
}

//Mostrar o Botão Certo de Qualquer Seccão
function respostaErrada(botao, btnSeccao1, resultado){
    botao.style.animation = "respostaErrada 3.6s forwards";
    // vidasJS -= 1;
    for(const btn of btnSeccao1){
        if(Number(btn.innerHTML) === resultado){
            setTimeout(()=>{
                btn.style.backgroundColor = "rgb(12, 139, 12)";
                btn.style.color = "white";
                // vidasHTML.innerHTML = vidasJS;
            }, 3550);
        }
    }
}

//Resposta Certa de Qualquer Secçao
function respostaCerta(botao){
    botao.style.animation = "respostaCerta 3.6s forwards";
    // setTimeout(() =>{
    //     pontosJS += 5;
    //     pontosHTML.innerHTML = pontosJS;
    // }, 3600);
}

//Função para negar recomeçar o Jogo
negarRecomecarJogo.addEventListener("click", ()=>{
    sessionStorage.clear();
    window.location.replace("../categorias.html");
});

//Fixando a Nav quando chegar no topo
window.addEventListener("scroll", fixarNav)

function fixarNav(){
    if(posicaoAtualNav <= window.scrollY){
        nav.classList.add("fixo");
    }else{
        nav.classList.remove("fixo");
    }
}
requestAnimationFrame(fixarNav);

//Função para Desabilitar Botões da Secção atual
function desabilitarBotoesAtuais(btnSeccao){
    for(const botoes of btnSeccao){
        botoes.disabled = true;
        botoes.style.color = "black";
        botoes.style.cursor = "auto";
    }
}

//Função para Desabilitar Botões do Próximo Nível
function desabilitarProximaSeccao(btnSeccao, seccao){
    setTimeout(()=>{
        seccao.style.opacity = "1";
        for(const botoes of btnSeccao){
            botoes.disabled = false;
            botoes.style.cursor = "pointer";
        }
    }, 5000);
}   