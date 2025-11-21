const colorPrimary = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-primary")
    .trim();

const colorLabel = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-label")
    .trim();

const fontFamily = getComputedStyle(document.documentElement)
    .getPropertyValue("--font-family")
    .trim();

const defaultOptions = {

    chart: {
        toolbar: {
            show: true
        },
        zoom: {
            enabled: false 
        },
        width: '100%',
        height: 180,
        offsetY: 18,
    },

    dataLabels: {
        enabled: false
    }

}

let barOptions = {

    ...defaultOptions,

  chart: {
    ...defaultOptions.chart,
    type: "area"
  },

  tooltip: {
    enabled: true,
    style: {
      fontFamily: fontFamily
    },

    y: {
      formatter: value => `${value}mm`  
    }
  },

  series: [ {
        name: "Safe",
        data: [87, 18, 94, 65, 22, 76, 13, 46, 89, 98, 10, 99, 75, 14, 52, 88, 34, 52]
    }
  ],

  colors: [colorPrimary],

  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      opacityFrom: 1,
      opacityTo: 0,
      stops: [0, 100],
      colorStops: [
        {
            offset: 0,
            opacity: .2,
            color: "ffffff"
        },
        {
            offset: 100,
            opacity: 0,
            color: "#ffffff"
        }
        
      ]
    }
  }
}

let chart = new ApexCharts(
  document.querySelector(".area-chart"), barOptions
);

chart.render();