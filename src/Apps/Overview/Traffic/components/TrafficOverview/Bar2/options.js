export default function getOptions(data) {
  return {
    grid: {
      left: 60,
      bottom: 45,
      right: 0,
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        fontSize: 22,
        fontFamily: 'DINPro',
        fontWeight: 500,
        color: '#FFF',
        opacity: 0.7,
      },
      splitLine: {
        lineStyle: {
          color: '#97979733',
        },
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#9797978f',
        },
      },
      data: data.map((d) => d.name),
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        fontSize: 22,
        fontFamily: 'DINPro',
        fontWeight: 500,
        color: '#FFF',
        opacity: 0.7,
      },
      splitLine: {
        lineStyle: {
          color: '#97979733',
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#9797978f',
        },
      },
      name: '客源量人数/人',
      nameTextStyle: {
        fontSize: 22,
        fontFamily: 'Source Han Sans CN',
        fontWeight: 500,
        color: '#FFF',
        opacity: 0.7,
        align: 'center',
        padding: [0, 0, 0, 40],
      },
    },
    series: [{
      data: data.map((d) => d.value),
      type: 'bar',
      barWidth: 24,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#FFAE9A',
            },
            {
              offset: 1,
              color: '#BB6D3E',
            },
          ],
          global: false,
        },
      },
    }],
  };
}
