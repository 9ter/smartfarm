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
var INTERVAL_ID;

//playPause();

function setGauge(max, y) {
  chart.series(0).options({
    points: [{ id: "1", x: "speed", y: y }],
  });
  //chart.annotations('anVal').options({ label_text: JSC.formatNumber(y, 'n1') });
}

/*function playPause(val) { 
    if (val) { 
      clearInterval(INTERVAL_ID); 
    } else { 
      update(); 
    } 
  } */

/*function update() { 
    INTERVAL_ID = setInterval(function() { 
      setGauge(100, Math.random() * 100); 
    }, 1200); 
  } */

/*
Gauge with styled axis line breaks and a data point on top of the axis line.
Learn how to:

  - Draw a circular gauge chart.
*/
// JS
var value = Math.round(Math.random() * 100);

var chart1 = JSC.chart(
  "chartDiv1",
  JSC.merge(defaultOptions(), {
    defaultPoint: {
      marker: {
        outline: { width: 5, color: "currentColor" },
        rotate: "auto",
        type: "triangle",
        size: 30,
      },
    },
    series: [{ points: [{ x: 0.45, y: 23 }] }],
  })
);

var chart2 = JSC.chart(
  "chartDiv2",
  JSC.merge(defaultOptions(), {
    yAxis: { scale: { interval: 5 } },
    defaultPoint: {
      marker: {
        rotate: "auto",
        outline: { width: 5, color: "currentColor" },
        fill: "white",
        visible: true,
        size: 35,
        type: {
          path: "M24 0c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12s12-5.4 12-12V12c0-6.6-5.4-12-12-12z",
        },
      },
    },
    series: [{ points: [{ x: 0, y: 48 }] }],
  })
);
var chart3 = JSC.chart(
  "chartDiv3",
  JSC.merge(defaultOptions(), {
    yAxis: {
      defaultTick: {
        // Bring the tick label inside the axis line.
        padding: -5,
        label_visible: true,
      },
      scale: { interval: 20 },
      line: { width: 12, breaks_gap: 0.06 },
    },
    palette: {
      pointValue: "%yValue",
      ranges: [
        { value: [0, 20], color: "#ffdb00" },
        { value: [20, 80], color: "#ffb600" },
        { value: [80, 100], color: "#ff0000" },
      ],
    },
    defaultPoint: {
      marker: {
        rotate: "auto",
        outline: { width: 5, color: "currentColor" },
        fill: "white",
        visible: true,
        size: 35,
        type: "arrow-up",
      },
    },
    series: [{ points: [{ x: 0.5, y: 84 }] }],
  })
);

function defaultOptions() {
  return {
    debug: true,
    type: "gauge ",
    animation_duration: 0,
    legend_visible: false,
    xAxis: {
      scale: {
        // Helps position the marker on top of the y Axis.
        range: [0, 1],
      },
    },
    palette: {
      pointValue: "%yValue",
      ranges: [
        { value: [0, 30], color: "#FF5353" },
        { value: [30, 70], color: "#FFD221" },
        { value: [70, 100], color: "#77E6B4" },
      ],
    },
    yAxis: {
      defaultTick: {
        // Pads around the gauge
        padding: 13,
        label_visible: false,
      },
      line: {
        width: 15,
        // Gaps occur at tick intervals defined below.
        breaks_gap: 0.03,
        color: "smartPalette",
      },
      scale: { range: [0, 100], interval: 10 },
    },
    defaultSeries: {
      opacity: 1,
      mouseTracking_enabled: false,
      shape: {
        label: {
          text: "%sum",
          style: { fontSize: "68px" },
          align: "center",
          verticalAlign: "middle",
        },
      },
    },
    defaultPoint: {
      marker: {
        outline: { width: 8, color: "currentColor" },
        fill: "white",
        type: "circle",
        size: 35,
      },
    },
    series: [
      {
        type: "marker",
        mouseTracking_enabled: false,

        points: [{ y: 58 }],
      },
    ],
  };
}

fetch("get_data.php")
  .then((response) => response.json())
  .then((data) => {
    // นำข้อมูลที่ได้มาเก็บในตัวแปร arr
    const arr = data;

    // สามารถนำ arr ไปใช้งานตามต้องการ
    console.log(arr[0]["light"]);

    setGauge(500, parseInt(arr[0]["light"]));

    // เช่น แสดงผลข้อมูลในหน้าเว็บ
    /*const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = JSON.stringify(arr, null, 2);*/
  })
  .catch((error) => console.error("Error:", error));
