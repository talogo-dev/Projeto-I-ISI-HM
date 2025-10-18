async function criarGraficoClientes() {
  const resposta = await fetch('./Clientes_Pais_0.json');
  const data = await resposta.json();

  const labels = data.map(item => item.Pais);
  const valores = data.map(item => item["Count*(Id)"]);

  new Chart(document.getElementById('grafico'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Número de Clientes por País',
        data: valores,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });
}

async function criarGraficoLivros() {
  const resposta = await fetch('./Livros_Por_Ano_0.json');
  const data = await resposta.json();

  // Ordenar os dados por ano
  data.sort((a, b) => a.Ano_Publicado - b.Ano_Publicado);

  const labels = data.map(item => item.Ano_Publicado);
  const valores = data.map(item => item["Count*(Id)"]);

  const ctx = document.getElementById('grafico').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Número de Livros lançados por ano',
        data: valores,
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        tension: 0.2,
        pointRadius: 3
      }]
    },
    options: {
      responsive: false,
      scales: {
        y: { beginAtZero: true },
        x: { 
          title: { display: true, text: 'Ano' },
          ticks: { maxRotation: 90, minRotation: 45, autoSkip: true }
        }
      },
      plugins: {
        legend: { position: 'top' },
        tooltip: { enabled: true }
      }
    }
  });
}

async function criarGraficoVendas() {
  const resposta = await fetch('./Vendas_Por_Ano_0.json');
  const data = await resposta.json();

  const labels = data.map(item => item.Ano);
  const valores = data.map(item => item["Count*(Venda_Id)"]);

  const ctx = document.getElementById('grafico').getContext('2d');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels,
      datasets: [{
        label: 'Número de vendas por ano',
        data: valores,
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: { position: 'top' },
        tooltip: { enabled: true }
      }
    }
  });
}
