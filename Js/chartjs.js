
// chart
const ctx = document.getElementById("graph_1");
const ctx2 = document.getElementById("graph_2");
const ctx3 = document.getElementById("graph_3");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 20, 10, 20, 30, 10, 5],
        borderWidth: 0,
        backgroundColor: "#fff",
        borderRadius: 8,
        maxBarThickness: 7,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255,255,255,0.4)",
          drawBorder: false,
          drawTicks: false,
          drawOnChartArea: true,
        },
        border: {
          dash: [5, 5],
        },
        ticks: {
          padding: 10,
          color: "rgba(255,255,255,0.7)",
          font: {
            size: 12,
          },
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          color: "rgba(255,255,255,0.4)",
          drawBorder: false,
          drawTicks: false,
          drawOnChartArea: true,
        },
        border: {
          dash: [5, 5],
        },
        ticks: {
          padding: 10,
          color: "rgba(255,255,255,0.7)",
          font: {
            size: 12,
          },
        },
      },
    },
  },
});

new Chart (ctx2, {
  type: "line",
  data: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 20, 10, 20, 30, 10, 5,34,67],
        borderWidth: 3,
        backgroundColor: "transparent",
        pointRadius: 6,
        fill: true,
        borderColor: "rgba(255,255,255,0.7)",
        pointBackgroundColor: "rgba(255,255,255,0.9)",
        pointBorderColor: "transparent",
        maxBarThickness: 7,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255,255,255,0.4)",
          drawBorder: false,
          drawTicks: false,
          drawOnChartArea: true,
        },
        border: {
          dash: [5, 5],
        },
        ticks: {
          padding: 10,
          color: "rgba(255,255,255,0.7)",
          font: {
            size: 12,
          },
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          color: "rgba(255,255,255,0.4)",
          drawBorder: false,
          drawTicks: false,
          drawOnChartArea: true,
        },
        border: {
          dash: [5, 5],
        },
        legend: {
          display: false,
        },
        ticks: {
          padding: 10,
          color: "rgba(255,255,255,0.7)",
          font: {
            size: 12,
          },
        },
      },
    },
  },
});


new Chart(ctx3, {
  type: "line",
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "# of Votes",
        data: [30, 10, 20, 20, 30, 10, 5],
        borderWidth: 3,
        backgroundColor: "transparent",
        pointRadius: 6,
        fill: true,
        borderColor: "rgba(255,255,255,0.7)",
        pointBackgroundColor: "rgba(255,255,255,0.9)",
        pointBorderColor: "transparent",
        maxBarThickness: 7,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255,255,255,0.4)",
          drawBorder: false,
          drawTicks: false,
          drawOnChartArea: true,
        },
        border: {
          dash: [5, 5],
        },
        ticks: {
          padding: 10,
          color: "rgba(255,255,255,0.7)",
          font: {
            size: 12,
          },
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          color: "rgba(255,255,255,0.4)",
          drawBorder: false,
          drawTicks: false,
          drawOnChartArea: true,
        },
        border: {
          dash: [5, 5],
        },
        legend: {
          display: false,
        },
        ticks: {
          padding: 10,
          color: "rgba(255,255,255,0.7)",
          font: {
            size: 12,
          },
        },
      },
    },
  },
});
//chart