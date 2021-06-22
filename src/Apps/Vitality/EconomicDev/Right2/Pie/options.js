export default function getOptions(data) {
  const center = ['24%', '51%'];
  return {
    color: ['#6182AE', '#C872F2', '#01A1F5'],
    legend: {
      icon: 'circle',
      itemWidth: 21,
      itemHeight: 21,
      itemGap: 31,
      left: '50%',
      top: '40%',
      orient: 'vertical',
      textStyle: {
        color: '#fff',
        padding: [0, 0, 0, 8],
        rich: {
          name: {
            fontSize: 29,
            fontFamily: 'Source Han Sans CN',
            fontWeight: 400,
            color: '#FFFEFE',
            width: 220,
          },
          value: {
            fontSize: 29,
            fontFamily: 'Source Han Sans CN',
            fontWeight: 400,
            color: '#FFFEFE',
            width: 120,
            align: 'right',
          },
        },
      },
      bottom: 26,
      formatter: function (name) {
        const item = data.find((d) => d.name === name);
        return [`{name|${name}}`, `{value|${item.value}万元}`].join('');
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['56%', '73%'],
        center,
        label: {
          // show: false,
          position: 'center',
          formatter: '三类产业\n占比',
          color: '#fff',
          fontSize: 34,
          lineHeight: 46,
          verticalAlign: 'bottom',
          fontFamily: 'Oswald',
          fontWeight: 'bold',
        },
        data,
      },
      {
        type: 'pie',
        center,
        radius: ['48%', '82%'],
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
        label: {
          show: false,
        },
        data: [1],
        z: -1,
      },
    ],
  };
}
