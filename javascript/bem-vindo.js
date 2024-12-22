//alert('Olá, Mundo!');
let aceitarInstrucao = window.document.getElementById('aceitarInstrucao');
let botaoComecarJogo = window.document.getElementsByTagName('button')[0];

aceitarInstrucao.addEventListener('click', verificarInstrucao)

function verificarInstrucao(){
    if(aceitarInstrucao.checked){
        botaoComecarJogo.style.opacity = '1';
        botaoComecarJogo.disabled = false;
        botaoComecarJogo.style.cursor = 'pointer'
    }else{;
        botaoComecarJogo.style.opacity = '0.5';
        botaoComecarJogo.disabled = true;
        botaoComecarJogo.style.cursor = 'auto'
    }
}