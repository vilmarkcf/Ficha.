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
    el.addEventListener('input', () => {
      salvarFicha();
    });
  });
  
  function salvarFicha() {
    const dados = {
      nome: document.getElementById('nome').value,
      fisico: document.getElementById('fisico').value,
      velocidade: document.getElementById('velocidade').value,
      intelecto: document.getElementById('intelecto').value,
      coragem: document.getElementById('coragem').value,
      habilidades: document.getElementById('habilidades').value,
      antecedentes: Array.from(document.querySelectorAll('.antecedente')).map(input => input.value)
    };
    localStorage.setItem('fichaRPG', JSON.stringify(dados));
  }
  
  function carregarFicha() {
    const dados = JSON.parse(localStorage.getItem('fichaRPG'));
    if (!dados) return;
  
    document.getElementById('nome').value = dados.nome || '';
    document.getElementById('fisico').value = dados.fisico || 0;
    document.getElementById('velocidade').value = dados.velocidade || 0;
    document.getElementById('intelecto').value = dados.intelecto || 0;
    document.getElementById('coragem').value = dados.coragem || 0;
    document.getElementById('habilidades').value = dados.habilidades || '';
    
    const antecedentes = document.querySelectorAll('.antecedente');
    antecedentes.forEach((input, i) => {
      input.value = dados.antecedentes?.[i] || 0;
    });
  }
  
 
/*vida */

function adicionarCheckbox() {
    const container = document.getElementById('vida');
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    
    if (checkboxes.length < 20) {
        const novoCheckbox = document.createElement('input');
        novoCheckbox.type = 'checkbox';
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

