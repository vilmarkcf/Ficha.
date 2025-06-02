document.querySelectorAll('input').forEach(el => {
  el.addEventListener('input', salvarMontaria);
});

function salvarMontaria() {
  const dados = {
    nomeMontaria: getValue('.grande'),
    potencia: getValue('input[name="potencia"]'),
    resistencia: getValue('input[name="resistencia"]'),
    itens: Array.from(document.querySelectorAll('.tabela-itens input[type="text"]')).map(i => i.value),
    armas: Array.from(document.querySelectorAll('.tabela-armas input[type="text"]')).map(i => i.value)
  };

  localStorage.setItem('fichaMontaria', JSON.stringify(dados));
}

function carregarMontaria() {
  const dados = JSON.parse(localStorage.getItem('fichaMontaria'));
  if (!dados) return;

  setValue('.grande', dados.nomeMontaria);
  setValue('input[name="potencia"]', dados.potencia);
  setValue('input[name="resistencia"]', dados.resistencia);

  const itens = document.querySelectorAll('.tabela-itens input[type="text"]');
  dados.itens?.forEach((val, i) => {
    if (itens[i]) itens[i].value = val;
  });

  const armas = document.querySelectorAll('.tabela-armas input[type="text"]');
  dados.armas?.forEach((val, i) => {
    if (armas[i]) armas[i].value = val;
  });
}

function getValue(selector) {
  const el = document.querySelector(selector);
  return el ? el.value : '';
}

function setValue(selector, val) {
  const el = document.querySelector(selector);
  if (el) el.value = val || '';
}

window.addEventListener('load', carregarMontaria);


  /*vida */

function adicionarCheckbox() {
    const container = document.getElementById('vida');
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    
    if (checkboxes.length < 20) {
        const novoCheckbox = document.createElement('input');
        novoCheckbox.type = 'checkbox';
        novoCheckbox.classList.add('adicionado');
        container.appendChild(novoCheckbox);
    }
}

function removerCheckbox() {
    const container = document.getElementById('vida');
    const adicionados = container.querySelectorAll('input.adicionado');
    
    if (adicionados.length > 0) {
        const ultimo = adicionados[adicionados.length - 1]; // remove o último adicionado
        container.removeChild(ultimo);
    } 
}

  
