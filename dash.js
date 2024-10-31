// Primeiro gráfico de rosquinha
const ctx1 = document.getElementById('donutChart1').getContext('2d');
const donutChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Concluído', 'Pendente'],
        datasets: [{
            label: 'Principais Tarefas',
            data: [40, 60],
            backgroundColor: ['#51E837', '#1A1A1A'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        }
    }
});

// Segundo gráfico de rosquinha
const ctx2 = document.getElementById('donutChart2').getContext('2d');
const donutChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Aprovado', 'Reprovado'],
        datasets: [{
            label: 'Avaliações do Evento',
            data: [75, 25],
            backgroundColor: ['#51E837', '#1A1A1A'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        }
    }
});

// Gráfico de barras
const ctx3 = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
        datasets: [{
            label: 'Gastos Mensais',
            data: [1200, 900, 700, 1300],
            backgroundColor: '#51E837'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: true }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#FFFFFF'  // Cor do texto para melhor visualização no tema escuro
                }
            },
            x: {
                ticks: {
                    color: '#FFFFFF'
                }
            }
        }
    }
});
