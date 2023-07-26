// JS
var chart = JSC.chart("chartDiv", {
  debug: true,
  type: "gauge",
  animation_duration: 1000,
  legend_visible: false,
  xAxis: { spacingPercentage: 0.25 },
  yAxis: {
    defaultTick: {
      padding: -5,
      label_style_fontSize: "14px",
    },
    line: {
      width: 9,
      color: "smartPalette",
      breaks_gap: 0.06,
    },
    scale_range: [0, 1000],
  },
  palette: {
    pointValue: "{%value/1000}",
    colors: ["green", "yellow", "red"],
  },
  defaultTooltip_enabled: false,
  defaultSeries: {
    angle: { sweep: 180 },
    shape: {
      innerSize: "70%",

      label: {
        text: '<span color="%color">{%sum:n1}</span><br/><span color="#696969" fontSize="20px">kW</span>',
        style_fontSize: "46px",
        verticalAlign: "middle",
      },
    },
  },
  series: [
    {
      type: "column roundcaps",
      points: [{ id: "1", x: "speed", y: 0 }],
    },
  ],
});

var chart2 = JSC.chart("chartDiv2", {
  debug: true,
  type: "gauge",
  animation_duration: 1000,
  legend_visible: false,
  xAxis: { spacingPercentage: 0.25 },
  yAxis: {
    defaultTick: {
      padding: -5,
      label_style_fontSize: "14px",
    },
    line: {
      width: 9,
      color: "smartPalette",
      breaks_gap: 0.06,
    },
    scale_range: [0, 1000],
  },
  palette: {
    pointValue: "{%value/1000}",
    colors: ["green", "yellow", "red"],
  },
  defaultTooltip_enabled: false,
  defaultSeries: {
    angle: { sweep: 180 },
    shape: {
      innerSize: "70%",

      label: {
        text: '<span color="%color">{%sum:n1}</span><br/><span color="#696969" fontSize="20px">kW</span>',
        style_fontSize: "46px",
        verticalAlign: "middle",
      },
    },
  },
  series: [
    {
      type: "column roundcaps",
      points: [{ id: "1", x: "speed", y: 0 }],
    },
  ],
});

fetch("get_data.php")
  .then((response) => response.json())
  .then((data) => {
    // นำข้อมูลที่ได้มาเก็บในตัวแปร arr
    var arr = data;

    // สามารถนำ arr ไปใช้งานตามต้องการ
    console.log(arr[0]["light"]);

    setGauge(500, parseInt(arr[0]["light"]));

    // เช่น แสดงผลข้อมูลในหน้าเว็บ
    /*const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = JSON.stringify(arr, null, 2);*/
  })
  .catch((error) => console.error("Error:", error));

function setGauge(max, y) {
  chart.series(0).options({
    points: [{ id: "1", x: "speed", y: parseInt(arr[0]["light"]) }],
  });
  chart2.series(0).options({
    points: [{ id: "1", x: "speed", y: y }],
  });
  //chart.annotations('anVal').options({ label_text: JSC.formatNumber(y, 'n1') });
}

setGauge();
