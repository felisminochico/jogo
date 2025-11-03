// alert("Olá, Mundo!");
try{
    if(window.sessionStorage.getItem("nivel4ProntoPraPartir") === null){
        throw new Error("Impossível Avançar! Conclua o Nível 3");
    }else if(window.performance.getEntriesByType("navigation")[0].type === "back_forward"){
        throw new Error("Refresh da Página não permitido. Voltando à Categorias.");
    }
    
    let pontosJS4 = Number(window.sessionStorage.getItem("pontos"));
    let vidasJS4 = Number(window.sessionStorage.getItem("vidas"));
    const botaoJogarNovamente = window.document.getElementById("jogar-novamente");
    pontosHTML.innerHTML = pontosJS4;
    vidasHTML.innerHTML = vidasJS4;

    botaoJogarNovamente.addEventListener("click", function(){
        sessionStorage.clear();
        this.style.animationPlayState = "paused";
        window.location.replace("../categorias.html");
    })
}catch(erro){
    window.sessionStorage.clear();
    window.document.body.innerHTML = "<h2>Erro: " + erro.message + "</h2>";
    window.document.body.style.backgroundColor = "white";
    setTimeout(function(){
        window.location.replace("../categorias.html");
    }, 2500);
}