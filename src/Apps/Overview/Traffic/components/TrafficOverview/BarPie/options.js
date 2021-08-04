export default function getOptions(data) {
  // console.log(JSON.parse(JSON.stringify(data)));
  const formateData = data.map((d) => ({
    name: d.name,
    value: d.value,
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0,
          color: d.color[0],
        }, {
          offset: 1,
          color: d.color[1],
        }],
        global: false,
      },
    },
  }));
  return {
    series: [
      {
        type: 'pie',
        radius: ['60%', '83%'],
        center: ['50%', '50%'],
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          focus: 'series',
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
            formatter: '{a|{d}%}',
            rich: {
              a: {
                color: '#DCFFF7',
                fontSize: 32,
                lineHeight: 46,
                verticalAlign: 'bottom',
                fontFamily: 'Oswald',
                fontWeight: 'lighter',
              },
            },
          },
        },
        data: formateData,
      },
      {
        type: 'pie',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#3551A45c',
            }, {
              offset: 0.5,
              color: '#3D8EC45c',
            }, {
              offset: 1,
              color: '#5ECDB05c',
            }],
            global: false,
          },
        },
        scale: false,
        radius: ['60%', '90%'],
        center: ['50%', '50%'],
        label: {
          show: false,
        },
        data: [1],
        z: -1,
      },
      {
        type: 'pie',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#3551A42c',
            }, {
              offset: 0.5,
              color: '#3D8EC42c',
            }, {
              offset: 1,
              color: '#5ECDB02c',
            }],
            global: false,
          },
        },
        scale: false,
        radius: ['34%', '55%'],
        center: ['50%', '50%'],
        label: {
          show: false,
        },
        data: [1],
        z: -1,
      },
      {
        type: 'pie',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#3551A45c',
            }, {
              offset: 0.5,
              color: '#3D8EC45c',
            }, {
              offset: 1,
              color: '#5ECDB05c',
            }],
            global: false,
          },
        },
        scale: false,
        radius: ['44%', '48%'],
        center: ['50%', '50%'],
        label: {
          show: false,
        },
        data: [1],
        z: -1,
      },
    ],
  };
}
