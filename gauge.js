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
    scale_range: [0, 100],
  },
  palette: {
    pointValue: "{%value/100}",
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
  /*toolbar_items: { 
      Stop: { 
        type: 'option', 
        icon_name: 'system/default/pause', 
        margin: 10, 
        boxVisible: true, 
        label_text: 'Pause', 
        events: { change: playPause }, 
        states_select: { 
          icon_name: 'system/default/play', 
          label_text: 'Play'
        } 
      } 
    }*/
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

fetch("get_data.php")
  .then((response) => response.json())
  .then((data) => {
    // นำข้อมูลที่ได้มาเก็บในตัวแปร arr
    const arr = data;

    // สามารถนำ arr ไปใช้งานตามต้องการ
    console.log(arr[1]);

    

    // เช่น แสดงผลข้อมูลในหน้าเว็บ
    /*const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = JSON.stringify(arr, null, 2);*/
  })
  .catch((error) => console.error("Error:", error));
