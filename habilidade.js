// Salvar automaticamente ao digitar na área de texto
document.getElementById('habilidades').addEventListener('input', salvarHabilidades);

function salvarHabilidades() {
  const texto = document.getElementById('habilidades').value;
  localStorage.setItem('habilidadesTexto', texto);
}

function carregarHabilidades() {
  const textoSalvo = localStorage.getItem('habilidadesTexto');
  if (textoSalvo) {
    document.getElementById('habilidades').value = textoSalvo;
  }
}

window.addEventListener('load', carregarHabilidades);



const titulos = document.querySelectorAll('h2');
const cima = document.querySelectorAll("h1")

titulos.forEach(titulo => {
    titulo.addEventListener('click', () => {
        const paragrafo = titulo.nextElementSibling;
        if (paragrafo && paragrafo.tagName.toLowerCase() === 'p') {
            paragrafo.style.display = paragrafo.style.display === 'block' ? 'none' : 'block';
        }
    });
});

cima.forEach(h1 => {
    h1.addEventListener('click', () => {
        let elemento = h1.nextElementSibling;
        while (elemento && elemento.tagName.toLowerCase() !== 'h1') {
            if (elemento.tagName.toLowerCase() === 'h2') {
                elemento.style.display = elemento.style.display === 'none' ? 'block' : 'none';            
            }
            elemento = elemento.nextElementSibling;
        }
    });
});

