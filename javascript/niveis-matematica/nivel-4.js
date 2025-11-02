// alert("Olá, Mundo!");
try{
    if(window.sessionStorage.getItem("nivel4ProntoPraPartir") === null){
        throw new Error("Impossível Avançar! Conclua o Nível 3");
    }
    console.log("Tudo funcionando...");
}catch(erro){
    window.sessionStorage.clear();
    window.document.body.innerHTML = "<h2>Erro: " + erro.message + "</h2>";
    window.document.body.style.backgroundColor = "white";
    setTimeout(function(){
        window.location.replace("../categorias.html");
    }, 2500);
}