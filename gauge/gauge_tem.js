var chart1 = JSC.chart("chartDiv1", {
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

var chart3 = JSC.chart("chartDiv2", {
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

var chart4 = JSC.chart("chartDiv2", {
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

var chart5 = JSC.chart("chartDiv2", {
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

var chart6 = JSC.chart("chartDiv2", {
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

var chart7 = JSC.chart("chartDiv2", {
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
