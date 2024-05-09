var options = {
  series: [80],
  chart: {
    height: 300,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['MS Office'],
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

var options = {
  series: [75],
  chart: {
    height: 300,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Photoshop'],
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

var options = {
  series: [90],
  chart: {
    height: 300,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Illustrator'],
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();

var options = {
  series: [85],
  chart: {
    height: 300,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Figma'],
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();


