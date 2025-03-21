/* API para copiar texto */
let copyP = document.querySelector('#copyP');
let message = document.querySelector('#message');

copyP.addEventListener('click', () => {
    
    navigator.clipboard.writeText(copyP.textContent)
        .then(() => {
            console.log('Mensagem copiada: ' + copyP.textContent);
            alert('Mensagem copiada: ' + copyP.textContent);
        })
        .catch(err => {
            console.error('Erro ao copiar: ', err);
        });
});

// Themes para o site
let theme = document.getElementById('theme')
let elementosParaAlterar = document.querySelectorAll('body, .ul-right, .ul-right p, .respostas-main, .respostas-div, .respostas-p, .a-quest, .logos, .top-respostas-questoes, .link-respost, .que-h3, .q5-p, h2, h3, b');

theme.addEventListener('click', () => {
    theme.classList.toggle('dark')
    elementosParaAlterar.forEach(elemento => {
        elemento.classList.toggle('dark');
    });
})

let arrows = document.querySelectorAll('.arrow-icon');

arrows.forEach(arrow => {
    arrow.addEventListener('click', function () {
        let resposta = this.parentElement.nextElementSibling;

        if (resposta.style.maxHeight) {
            resposta.style.maxHeight = null;
            this.style.transform = "rotate(-90deg)";
        } else {
            resposta.style.maxHeight = resposta.scrollHeight + "px"; 
            this.style.transform = "rotate(90deg)";
        }
    });
});

