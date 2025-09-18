const janelaNaoDisponivel = window.document.getElementById("janela-nao-disponivel");
const botaoFecharJanela = window.document.querySelector("#opcao button");
const categoriaMatematica = window.document.getElementById("categoria-matematica")
let linguagemLocal = window.navigator.language;
let hora = new Date().toLocaleString(linguagemLocal, {hour: "numeric"});
const anoAtual = window.document.getElementById("ano-atual");

anoAtual.innerHTML = "\u00A9 " +  new Date().toLocaleString(linguagemLocal, {year: "numeric"});

// janelaNaoDisponivel.showModal();
categoriaMatematica.addEventListener("click", () =>{
    window.location.href = "niveis-matematica/nivel-1.html";
})

function mostrarJanelaNaoDisponivel(){
    janelaNaoDisponivel.showModal();
}

botaoFecharJanela.addEventListener("click", () =>{
    janelaNaoDisponivel.close();
})