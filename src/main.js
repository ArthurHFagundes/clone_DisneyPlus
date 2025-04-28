document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]'); // PEGA TODAS AS TAGS 'data-tab-button' //* CASO QUEIRA UM ATRIBUTO DA TAG, UTILIZAR O NOME: data-tab-button=em_breve
    const questions = document.querySelectorAll('[data-faq-question]'); // ARMAZENA EM UMA CONSTANTE O ELEMENTO COM A TAG 'data-faq-question'
    
    const heroSection = document.querySelector('.hero'); // PARA SELECIONAR O ELEMENTO COM A CLASSE "hero"
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY // PARA VERIFICAR A DISTÂNCIA DO SCROLL NO EIXO Y

        if(posicaoAtual < alturaHero) { // QUANDO A POSIÇÃO DO SCROLL FOR MENOR QUE A ALTURA DO HERO ELE OCULTA (+ performance)
            ocultaElementosDoHeader();
        }
        else {
            exibeElementosDoHeader();
        }
    })

    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) { //*ChatGPT: Adiciona um ouvinte de clique para cada botão.
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton; //*ChatGPT: Obtém o valor de data-tab-button do botão clicado. Exemplo: em_breve.
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) { //* ESSA FUNÇÃO SERVE BASICAMENTE PARA VERIFICAR ATÉ ONDE O PROGRAMA VAI REPETIR UM LAÇO, OU SEJA, VAI REPETIR AS AÇÕES ATÉ INFORMAR O CONTRÁRIO
        questions[i].addEventListener('click', abreOuFechaResposta); // VE QUANDO O ELEMENTO COM A TAG 'data-faq-question' É CLICADO
    }
})

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) { 
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode; // PARA PEGAR O PAI DO ALVO

    elementoPai.classList.toggle(classe); // ATIVA A CLASSE
}