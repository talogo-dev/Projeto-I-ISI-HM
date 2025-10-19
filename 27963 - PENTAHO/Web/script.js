// Carregar o ficheiro JSON
async function loadSalesData() {
  try {
    const response = await fetch("VendasPorPais_0.json")
    const jsonData = await response.json()
    return jsonData.data
  } catch (error) {
    console.error("Erro ao carregar o ficheiro JSON:", error)
    return []
  }
}

// Criar o gráfico
async function createChart() {
  const salesData = await loadSalesData()

  if (salesData.length === 0) {
    console.error("Nenhum dado disponível")
    return
  }

  // PEGAR APENAS OS 15 PRIMEIROS (já estão ordenados do maior para menor)
  const top15Data = salesData.slice(0, 15)

  // Extrair países e totais dos 15 melhores
  const countries = top15Data.map((item) => item.Country)
  const orders = top15Data.map((item) => item.Total_Pedidos)

  // REMOVIDO: Cálculo de totais para o footer

  const chartHeight = Math.max(600, countries.length * 25)
  document.getElementById("salesChart").style.height = `${chartHeight}px`

  // Criar gradiente de cores
  const ctx = document.getElementById("salesChart").getContext("2d")
  const gradient = ctx.createLinearGradient(0, 0, 500, 0)
  gradient.addColorStop(0, "#667eea")
  gradient.addColorStop(1, "#764ba2")

  // Configurar o gráfico
  const Chart = window.Chart
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: countries,
      datasets: [
        {
          label: "Total de Pedidos",
          data: orders,
          backgroundColor: gradient,
          borderColor: "#5568d3",
          borderWidth: 1,
          borderRadius: 5,
          barPercentage: 0.7,
          categoryPercentage: 0.8,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Top 15 Países por Vendas',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        legend: {
          display: true,
          position: "top",
          labels: {
            font: {
              size: 14,
              weight: "bold",
            },
            color: "#2d3748",
          },
        },
        tooltip: {
          backgroundColor: "rgba(45, 55, 72, 0.9)",
          titleFont: {
            size: 14,
            weight: "bold",
          },
          bodyFont: {
            size: 13,
          },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: (context) => `Pedidos: ${context.parsed.x}`,
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            font: {
              size: 12,
            },
            color: "#4a5568",
          },
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
          title: {
            display: true,
            text: "Número de Pedidos",
            font: {
              size: 14,
              weight: "bold",
            },
            color: "#2d3748",
          },
        },
        y: {
          ticks: {
            font: {
              size: 11,
            },
            color: "#4a5568",
          },
          grid: {
            display: false,
          },
          title: {
            display: true,
            text: "País",
            font: {
              size: 14,
              weight: "bold",
            },
            color: "#2d3748",
          },
        },
      },
    },
  })
}

async function loadGenreData() {
  try {
    const response = await fetch("PedidosTotaisPorGenero_0.json")
    const jsonData = await response.json()
    return jsonData.data
  } catch (error) {
    console.error("Erro ao carregar o ficheiro JSON de géneros:", error)
    return []
  }
}

async function createGenreChart() {
  const genreData = await loadGenreData()

  if (genreData.length === 0) {
    console.error("Nenhum dado de género disponível")
    return
  }

  // Ordenar os dados por Total_Pedidos (descendente)
  genreData.sort((a, b) => b.Total_Pedidos - a.Total_Pedidos)

  // Extrair géneros e totais
  const genres = genreData.map((item) => item.Genre)
  const orders = genreData.map((item) => item.Total_Pedidos)

  // REMOVIDO: Cálculo de totais para o footer

  const chartHeight = Math.max(400, genres.length * 60)
  document.getElementById("genreChart").style.height = `${chartHeight}px`

  // Criar gradiente de cores (tons de verde/azul)
  const ctx = document.getElementById("genreChart").getContext("2d")
  const gradient = ctx.createLinearGradient(0, 0, 500, 0)
  gradient.addColorStop(0, "#38b2ac")
  gradient.addColorStop(1, "#4299e1")

  // Configurar o gráfico
  const Chart = window.Chart
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: genres,
      datasets: [
        {
          label: "Total de Pedidos",
          data: orders,
          backgroundColor: gradient,
          borderColor: "#2c7a7b",
          borderWidth: 1,
          borderRadius: 5,
          barPercentage: 0.7,
          categoryPercentage: 0.8,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            font: {
              size: 14,
              weight: "bold",
            },
            color: "#2d3748",
          },
        },
        tooltip: {
          backgroundColor: "rgba(45, 55, 72, 0.9)",
          titleFont: {
            size: 14,
            weight: "bold",
          },
          bodyFont: {
            size: 13,
          },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: (context) => `Pedidos: ${context.parsed.x}`,
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            stepSize: 20,
            font: {
              size: 12,
            },
            color: "#4a5568",
          },
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
          title: {
            display: true,
            text: "Número de Pedidos",
            font: {
              size: 14,
              weight: "bold",
            },
            color: "#2d3748",
          },
        },
        y: {
          ticks: {
            font: {
              size: 12,
            },
            color: "#4a5568",
          },
          grid: {
            display: false,
          },
          title: {
            display: true,
            text: "Género Literário",
            font: {
              size: 14,
              weight: "bold",
            },
            color: "#2d3748",
          },
        },
      },
    },
  })
}

document.addEventListener("DOMContentLoaded", () => {
  createChart()
  createGenreChart()
})