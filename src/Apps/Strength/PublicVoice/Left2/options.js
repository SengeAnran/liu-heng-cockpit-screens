export default function getOptions(data) {
  return {
    grid: {
      top: 45,
      left: 80,
      bottom: 38,
      right: 0,
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: [{
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
      // boundaryGap: false,
      data: data.map((d) => d.name),
    }],
    yAxis: [{
      type: 'value',
      min: 0,
      splitNumber: 4,
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
          width: 2,
          color: '#9797978f',
        },
      },
      name: '客源量人数/人',
      nameTextStyle: {
        fontSize: 22,
        fontFamily: 'Source Han Sans CN',
        fontWeight: 400,
        color: '#FFF',
        opacity: 0.7,
        align: 'left',
        padding: [0, 0, 0, -80],
      },
    }],
    series: [
      {
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
                color: 'rgba(123, 248, 217, 0.99)',
              },
              {
                offset: 1,
                color: 'rgba(30, 50, 127, 0.52)',
              },
            ],
          },
        },
        data: data.map((d) => d.value),
        z: 1,
      },
    ],
  };
}
