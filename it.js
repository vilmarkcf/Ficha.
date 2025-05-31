document.querySelectorAll('input').forEach(el => {
  el.addEventListener('input', salvarInventario);
});

function salvarInventario() {
  const dados = {
    itens: [],
    armas: []
  };

  // Coleta Itens
  const linhasItens = document.querySelectorAll('.tabela-itens tbody tr');
  linhasItens.forEach(linha => {
    const cols = linha.querySelectorAll('input');
    dados.itens.push({
      nome: cols[0]?.value || '',
      espaco: cols[1]?.value || ''
    });
  });

  // Coleta Armas
  const linhasArmas = document.querySelectorAll('.tabela-armas tbody tr');
  linhasArmas.forEach(linha => {
    const cols = linha.querySelectorAll('input');
    if (cols.length === 3) {
      dados.armas.push({
        nome: cols[0]?.value || '',
        espaco: cols[1]?.value || '',
        dano: cols[2]?.value || ''
      });
    }
  });

  localStorage.setItem('fichaInventario', JSON.stringify(dados));
}

function carregarInventario() {
  const dados = JSON.parse(localStorage.getItem('fichaInventario'));
  if (!dados) return;

  // Preenche Itens
  const linhasItens = document.querySelectorAll('.tabela-itens tbody tr');
  dados.itens?.forEach((item, i) => {
    const cols = linhasItens[i]?.querySelectorAll('input');
    if (cols?.length === 2) {
      cols[0].value = item.nome || '';
      cols[1].value = item.espaco || '';
    }
  });

  // Preenche Armas
  const linhasArmas = document.querySelectorAll('.tabela-armas tbody tr');
  dados.armas?.forEach((arma, i) => {
    const cols = linhasArmas[i]?.querySelectorAll('input');
    if (cols?.length === 3) {
      cols[0].value = arma.nome || '';
      cols[1].value = arma.espaco || '';
      cols[2].value = arma.dano || '';
    }
  });
}

window.addEventListener('load', carregarInventario);


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


