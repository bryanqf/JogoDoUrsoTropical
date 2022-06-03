const urso = document.querySelector('.urso')
const palmeira = document.querySelector('.palmeira')
function pulo(){
    urso.classList.add('pulo');

    setTimeout(()=>{
        urso.classList.remove('pulo')
    }, 700);
}

const verificaColisao = setInterval(()=>{
    const ursoPosicao = +window.getComputedStyle(urso).bottom.replace('px', '')
    const palmeiraPosicao = palmeira.offsetLeft;
    if(palmeiraPosicao <= 59 && ursoPosicao < 210 && palmeiraPosicao > 0){
        palmeira.style.animation = 'none';
        palmeira.style.left = `${palmeiraPosicao}px`
        urso.style.animation = 'none';
        urso.style.bottom = `${ursoPosicao}px`

        urso.src='./img/acidente.png'
        urso.style.width = '100px'
         clearInterval(verificaColisao);
    }
    
})

document.addEventListener('keydown', pulo)