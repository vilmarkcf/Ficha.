
const cima = document.querySelectorAll('h1');

// Clicar no <h1> mostra/esconde todas as <table> até o próximo <h1>
cima.forEach(h1 => {
    h1.addEventListener('click', () => {
        let elemento = h1.nextElementSibling;
        while (elemento && elemento.tagName.toLowerCase() !== 'h1') {
            if (elemento.tagName.toLowerCase() === 'table') {
                elemento.style.display = elemento.style.display === 'none' ? 'table' : 'none';
            }
            elemento = elemento.nextElementSibling;
        }
    });
});


