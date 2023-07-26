// data for the gauge chart
// you can supply your own values here
// max is the Gauge's maximum value
var data = {
  value: 200,
  max: 300,
  label: "Progress",
};

// Chart.js chart's configuration
// We are using a Doughnut type chart to
// get a Gauge format chart
// This is approach is fine and actually flexible
// to get beautiful Gauge charts out of it
var config = {
  type: "doughnut",
  data: {
    labels: [data.label],
    datasets: [
      {
        data: [data.value, data.max - data.value],
        backgroundColor: ["rgba(54, 162, 235, 0.8)", "rgba(0, 0, 0, 0.1)"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 85,
    rotation: -90,
    circumference: 180,
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false,
    },
    animation: {
      animateRotate: true,
      animateScale: false,
    },
    title: {
      display: true,
      text: data.label,
      fontSize: 16,
    },
  },
};

// Create the chart
var chartCtx = document.getElementById("gaugeChart").getContext("2d");
var gaugeChart = new Chart(chartCtx, config);
