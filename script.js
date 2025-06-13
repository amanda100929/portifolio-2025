const receitasCidade = [
  {
    nome: "Bolo de Cenoura",
    ingredientes: "Cenoura, açúcar, farinha, ovos, óleo, fermento",
    preparo: "Bata a cenoura, ovos e óleo. Misture com os secos. Asse por 40 minutos."
  },
  {
    nome: "Pastel de Feira",
    ingredientes: "Massa para pastel, carne moída, cebola, temperos",
    preparo: "Recheie a massa com carne temperada, frite em óleo quente até dourar."
  }
];

const receitasZonaRural = [
  {
    nome: "Pamonha Doce",
    ingredientes: "Milho verde, açúcar, leite, canela",
    preparo: "Rale o milho, misture com leite e açúcar, cozinhe em folha de milho."
  },
  {
    nome: "Frango Caipira",
    ingredientes: "Frango caipira, alho, cebola, cheiro-verde",
    preparo: "Cozinhe o frango com temperos até ficar macio e saboroso."
  }
];

// Função para criar lista de receitas
function carregarReceitas() {
  const cidadeList = document.getElementById("cidade-list");
  const ruralList = document.getElementById("zona-rural-list");

  receitasCidade.forEach(receita => {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${receita.nome}</h3>
                    <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
                    <p><strong>Preparo:</strong> ${receita.preparo}</p>`;
    cidadeList.appendChild(li);
  });

  receitasZonaRural.forEach(receita => {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${receita.nome}</h3>
                    <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
                    <p><strong>Preparo:</strong> ${receita.preparo}</p>`;
    ruralList.appendChild(li);
  });
}

// Função para trocar abas
function trocarAba(event) {
  const botaoClicado = event.target;
  if (!botaoClicado.classList.contains("tab-button")) return;

  // Remove active de todos botões e conteúdos
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(sec => sec.classList.remove("active"));

  // Adiciona active no botão clicado e no conteúdo correspondente
  botaoClicado.classList.add("active");
  const tab = botaoClicado.getAttribute("data-tab");
  document.getElementById(tab).classList.add("active");
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  carregarReceitas();

  document.querySelector("nav").addEventListener("click", trocarAba);
});
const receitasCidade = [
  {
    nome: "Bolo de Cenoura",
    ingredientes: "Cenoura, açúcar, farinha, ovos, óleo, fermento",
    preparo: "Bata a cenoura, ovos e óleo. Misture com os secos. Asse por 40 minutos.",
    imagem: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
  },
  {
    nome: "Pastel de Feira",
    ingredientes: "Massa para pastel, carne moída, cebola, temperos",
    preparo: "Recheie a massa com carne temperada, frite em óleo quente até dourar.",
    imagem: "https://images.unsplash.com/photo-1565895405227-c7950ca80043?auto=format&fit=crop&w=400&q=80"
  }
];

const receitasZonaRural = [
  {
    nome: "Pamonha Doce",
    ingredientes: "Milho verde, açúcar, leite, canela",
    preparo: "Rale o milho, misture com leite e açúcar, cozinhe em folha de milho.",
    imagem: "https://images.unsplash.com/photo-1505253210341-1663e1c7f6a9?auto=format&fit=crop&w=400&q=80"
  },
  {
    nome: "Frango Caipira",
    ingredientes: "Frango caipira, alho, cebola, cheiro-verde",
    preparo: "Cozinhe o frango com temperos até ficar macio e saboroso.",
    imagem: "https://images.unsplash.com/photo-1543352634-2cdb3f95a857?auto=format&fit=crop&w=400&q=80"
  }
];

function carregarReceitas() {
  const cidadeList = document.getElementById("cidade-list");
  const ruralList = document.getElementById("zona-rural-list");

  cidadeList.innerHTML = "";
  ruralList.innerHTML = "";

  receitasCidade.forEach(receita => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${receita.imagem}" alt="${receita.nome}" />
      <div>
        <h3>${receita.nome}</h3>
        <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
        <p><strong>Preparo:</strong> ${receita.preparo}</p>
      </div>
    `;
    cidadeList.appendChild(li);
  });

  receitasZonaRural.forEach(receita => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${receita.imagem}" alt="${receita.nome}" />
      <div>
        <h3>${receita.nome}</h3>
        <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
        <p><strong>Preparo:</strong> ${receita.preparo}</p>
      </div>
    `;
    ruralList.appendChild(li);
  });
}
const receitasCidade = [
  {
    nome: "Bolo de Cenoura",
    ingredientes: "Cenoura, açúcar, farinha, ovos, óleo, fermento",
    preparo: "Bata a cenoura, ovos e óleo. Misture com os secos. Asse por 40 minutos.",
    imagem: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
  },
  {
    nome: "Pastel de Feira",
    ingredientes: "Massa para pastel, carne moída, cebola, temperos",
    preparo: "Recheie a massa com carne temperada, frite em óleo quente até dourar.",
    imagem: "https://images.unsplash.com/photo-1565895405227-c7950ca80043?auto=format&fit=crop&w=400&q=80"
  },
  {
    nome: "Feijoada",
    ingredientes: "Feijão preto, carne seca, linguiça, bacon, temperos",
    preparo: "Cozinhe o feijão com as carnes e temperos até ficar macio e saboroso.",
    imagem: "https://images.unsplash.com/photo-1562967916-eb82221dfb33?auto=format&fit=crop&w=400&q=80"
  }
];

const receitasZonaRural = [
  {
    nome: "Pamonha Doce",
    ingredientes: "Milho verde, açúcar, leite, canela",
    preparo: "Rale o milho, misture com leite e açúcar, cozinhe em folha de milho.",
    imagem: "https://images.unsplash.com/photo-1505253210341-1663e1c7f6a9?auto=format&fit=crop&w=400&q=80"
  },
  {
    nome: "Frango Caipira",
    ingredientes: "Frango caipira, alho, cebola, cheiro-verde",
    preparo: "Cozinhe o frango com temperos até ficar macio e saboroso.",
    imagem: "https://images.unsplash.com/photo-1543352634-2cdb3f95a857?auto=format&fit=crop&w=400&q=80"
  },
  {
    nome: "Doce de Leite Caseiro",
    ingredientes: "Leite, açúcar, bicarbonato de sódio",
    preparo: "Cozinhe o leite e açúcar até engrossar e ficar com cor caramelo.",
    imagem: "https://images.unsplash.com/photo-1604335399105-2a9988b678f2?auto=format&fit=crop&w=400&q=80"
  }
];

function criarCard(receita) {
  const card = document.createElement("div");
  card.className = "receita-card";

  card.innerHTML = `
    <img src="${receita.imagem}" alt="${receita.nome}" />
    <div class="receita-content">
      <h3>${receita.nome}</h3>
      <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
      <p><strong>Preparo:</strong> ${receita.preparo}</p>
    </div>
  `;
  return card;
}

function carregarReceitas() {
  const cidadeContainer = document.getElementById("cidade-list");
  const ruralContainer = document.getElementById("zona-rural-list");

  receitasCidade.forEach(receita => {
    cidadeContainer.appendChild(criarCard(receita));
  });

  receitasZonaRural.forEach(receita => {
    ruralContainer.appendChild(criarCard(receita));
  });
}

document.addEventListener("DOMContentLoaded", carregarReceitas);
