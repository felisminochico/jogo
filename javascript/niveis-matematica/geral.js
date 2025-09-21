// alert("Olá, Mundo!");
const nav = window.document.getElementsByTagName("nav")[0];
let pontosHTML = window.document.getElementById('pontos');
let vidasHTML = window.document.getElementById('vidas');
let Seccoes = window.document.getElementsByTagName('section');
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

//Janela Sair Categoria
function janelaSairCategoria(){
    caixaSairCategoria.showModal();
    window.document.body.style.overflow = "hidden";
}

negarSairCategoria.addEventListener("click", ()=>{
    caixaSairCategoria.close();
    window.document.body.style.overflow = "auto";
})

aceitarSairCategoria.addEventListener("click", ()=>{
    window.location.replace("../categorias.html");
})

botaoSairCategoria.addEventListener("click", ()=>{
    janelaSairCategoria();
});

//Janela do Game Over
function gameOver(){
    setTimeout(()=>{
        caixaGameOver.showModal();
        window.document.body.style.overflow = "hidden";
    }, 5000);
}

//Janela do Nível 2
function proximoNivel(pts, vds){
    setTimeout(()=>{
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

negarRecomecarJogo.addEventListener("click", ()=>{
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