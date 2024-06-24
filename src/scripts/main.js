document.addEventListener('DOMContentLoaded', function() {
    const chars = document.querySelectorAll('[data-char-button]');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            return;
        }
        entry.target.classList.remove('in-view');
        });
    });

    const allAnimatedElements = document.querySelectorAll('.animate');
    
    allAnimatedElements.forEach((element) => observer.observe(element));


    //abas
    for (let i = 0; i < chars.length; i++) {
        chars[i].addEventListener('click', function(char) {
            const currentChar = char.currentTarget.dataset.charButton;
            const character = document.querySelector(`[data-char-id=${currentChar}]`)
            hideChar();
            character.classList.add('chars__content__data__select--crt')
            hideCharButton();
            char.currentTarget.classList.add('crt')
        })
    }
});

function hideCharButton() {
    const chars = document.querySelectorAll('[data-char-button]');

    for (let i = 0; i < chars.length; i++) {
        chars[i].classList.remove('crt')
    }
}

function hideChar() {
    const charsInfo = document.querySelectorAll('[data-char-id]');

    for (let i = 0; i < charsInfo.length; i++) {
        charsInfo[i].classList.remove('chars__content__data__select--crt')
    }
}