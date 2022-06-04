const urso = document.querySelector('.urso');
const palmeira = document.querySelector('.palmeira');
const cipo = document.querySelector('.cipo');
const board = document.querySelector('.board');
function pulo(){
    urso.classList.add('pulo');

    setTimeout(()=>{
        urso.classList.remove('pulo')
    }, 700);
}

const verificaColisao = setInterval(()=>{
    const ursoPosicao = +window.getComputedStyle(urso).bottom.replace('px', '')
    const palmeiraPosicao = palmeira.offsetLeft;
    const cipoPosicao = window.getComputedStyle(cipo).right.replace('px', '');

    if(palmeiraPosicao <= 59 && ursoPosicao < 210 && palmeiraPosicao > 0){
        
        palmeira.style.animation = 'none';
        palmeira.style.left = `${palmeiraPosicao}px`
        urso.style.animation = 'none';
        urso.style.bottom = `${ursoPosicao}px`

        urso.src='./img/acidente.png'
        urso.style.width = '100px'

        
        cipo.style.animation = 'none';
        cipo.style.right = `${cipoPosicao}px`;

        
        
        clearInterval(verificaColisao);
        criarBotao('reiniciar')
    }
    
})

function criarBotao(texto){
    const botao = document.createElement('button');
    const text = document.createTextNode(texto);
    botao.appendChild(text);
    botao.onclick = ()=>{
        document.location.reload(false);
    }
    document.body.appendChild(botao);
}
document.addEventListener('keydown', pulo)
