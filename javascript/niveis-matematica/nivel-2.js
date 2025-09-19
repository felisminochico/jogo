// console.log("Funcioanando...")

//Recepção dos Pontos e Vidas do Nível 1
let pontosJS2 = Number(sessionStorage.getItem("pontos"));
let vidasJS2 = Number(sessionStorage.getItem("vidas"));
pontosHTML.innerHTML = pontosJS2;
vidasHTML.innerHTML = vidasJS2;