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
    {
      type: "column roundcaps",
      points: [{ id: "2", x: "speed", y: 0 }],
    },
    {
      type: "column roundcaps",
      points: [{ id: "3", x: "speed", y: 0 }],
    },
  ],
});



function setGauge(seriesIndex, y) {
  chart.series(seriesIndex).options({
    points: [{ id: "1", x: "speed", y: y }],
    points: [{ id: "2", x: "speed", y: y }],
    points: [{ id: "3", x: "speed", y: y }],
  });
  //chart.annotations('anVal').options({ label_text: JSC.formatNumber(y, 'n1') });
}

fetch("get_data.php")
  .then((response) => response.json())
  .then((data) => {
    // นำข้อมูลที่ได้มาเก็บในตัวแปร arr
    const arr = data;

    // สามารถนำ arr ไปใช้งานตามต้องการ
    console.log(arr[0]["light"]);

    setGauge(0, parseInt(arr[0]["light"]));
    setGauge(1, parseInt(arr[0]["soiltem"]));
    setGauge(2, parseInt(arr[0]["airtem"]));

  })
  .catch((error) => console.error("Error:", error));
