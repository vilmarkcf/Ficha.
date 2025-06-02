function atualizarStatus() {
    const fisico = parseInt(document.getElementById("fisico").value) || 0;
    const velocidade = parseInt(document.getElementById("velocidade").value) || 0;
    const intelecto = parseInt(document.getElementById("intelecto").value) || 0;
    const coragem = parseInt(document.getElementById("coragem").value) || 0;
  
    const totalAtributos = fisico + velocidade + intelecto + coragem;
  
    document.getElementById("movimentos").textContent = 1 + velocidade;
    document.getElementById("acoes-combate").textContent = 1 + coragem;
    document.getElementById("iniciativa").textContent = velocidade;
    document.getElementById("defesa").textContent = 5 + fisico;
    
    
  
    const alerta = document.getElementById("atributos-alerta");
    if (totalAtributos > 4) {
      alerta.textContent = "Você só pode distribuir até 4 pontos nos atributos!";
    } else {
      alerta.textContent = "";
    }
  }
  
function validarAntecedentes() {
  const inputs = document.querySelectorAll(".antecedente");
  let total = 0;
  inputs.forEach(input => {
    total += parseInt(input.value) || 0;
  });

  const intelecto = parseInt(document.getElementById("intelecto").value) || 0;
  const limite = 4 + intelecto;

  const alerta = document.getElementById("antecedentes-alerta");
  if (total > limite) {
    alerta.textContent = `Você só pode distribuir até ${limite} pontos nos antecedentes!`;
  } else {
    alerta.textContent = "";
  }
}

  
  document.querySelectorAll("input[type='number']").forEach(input => {
    input.addEventListener("input", () => {
      atualizarStatus();
      validarAntecedentes();
    });
  });
  
  // Atualiza ao carregar
  atualizarStatus();

  // Salvar automaticamente ao mudar inputs
document.querySelectorAll('input, textarea').forEach(el => {
  el.addEventListener('input', salvarFicha);
});

function salvarFicha() {
  const dados = {
    nome: getValue('nome'),
    fisico: getValue('fisico'),
    velocidade: getValue('velocidade'),
    intelecto: getValue('intelecto'),
    coragem: getValue('coragem'),
    habilidades: getValue('habilidades'),
    antecedentes: Array.from(document.querySelectorAll('.antecedente')).map(input => input.value || '')
  };
  localStorage.setItem('fichaRPG', JSON.stringify(dados));
}

function carregarFicha() {
  const dados = JSON.parse(localStorage.getItem('fichaRPG'));
  if (!dados) return;

  setValue('nome', dados.nome);
  setValue('fisico', dados.fisico);
  setValue('velocidade', dados.velocidade);
  setValue('intelecto', dados.intelecto);
  setValue('coragem', dados.coragem);
  setValue('habilidades', dados.habilidades);

  const antecedentesInputs = document.querySelectorAll('.antecedente');
  antecedentesInputs.forEach((input, i) => {
    input.value = dados.antecedentes?.[i] || '';
  });
}

// Helpers
function getValue(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}

function setValue(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val || '';
}

// Carrega automaticamente ao abrir
window.addEventListener('load', carregarFicha);

 
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



