const janelaNaoDisponivel = window.document.getElementById("janela-nao-disponivel");
const botaoFecharJanela = window.document.querySelector("#opcao button");
const categoriaMatematica = window.document.getElementById("categoria-matematica")

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