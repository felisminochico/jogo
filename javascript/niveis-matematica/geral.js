// alert("Olá, Mundo!");
const nav = window.document.getElementsByTagName("nav")[0];
let Seccoes = window.document.getElementsByTagName('section');
const todosBotoesSeccoes = window.document.querySelectorAll(".seccoes button");
const caixaGameOver = window.document.getElementById("game-over");
let posicaoAtualNav = nav.offsetTop;
const negarRecomecarJogo = window.document.getElementById("nao-aceitar-recomecar");
const aceitarSairCategoria = window.document.getElementById("aceitar-sair-categoria");
const negarSairCategoria = window.document.getElementById("nao-aceitar-sair-categoria");
const caixaSairCategoria = window.document.getElementById("sair-categoria");
const caixaNivel2 = window.document.getElementById("nivel-2");
const botaoSairCategoria = window.document.getElementById("btn-sair-categoria");
let linguagemLocal = window.navigator.language;
let hora = new Date().toLocaleString(linguagemLocal, {hour: "numeric"});
const anoAtual = window.document.getElementById("ano-atual");

//Verificação do ano atual
anoAtual.innerHTML = "\u00A9 " + new Date().toLocaleString(linguagemLocal, {year: "numeric"});

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

negarRecomecarJogo.addEventListener("click", ()=>{
    window.location.replace("../categorias.html");
})

//Janela do Nível 2
function nivel2(){
    setTimeout(()=>{
        caixaNivel2.showModal();
        window.document.body.style.overflow = "hidden";
    }, 5000);
}

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

//Desabilitação e Opacidade de todas Secções e Botões
for(const botoes of todosBotoesSeccoes){
    botoes.disabled = true;
    botoes.style.cursor = "auto";
}
for(const secc of Seccoes){
    secc.style.opacity = "0.1";
}

function desabilitarBotoesAtuais(btnSeccao){
    for(const botoes of btnSeccao){
        botoes.disabled = true;
        botoes.style.color = "black";
        botoes.style.cursor = "auto";
    }
}

function desabilitarProximaSeccao(btnSeccao, seccao){
    setTimeout(()=>{
        seccao.style.opacity = "1";
        for(const botoes of btnSeccao){
            botoes.disabled = false;
            botoes.style.cursor = "pointer";
        }
    }, 5000);
}