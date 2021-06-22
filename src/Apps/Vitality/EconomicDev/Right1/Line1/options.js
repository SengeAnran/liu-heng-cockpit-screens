export default function getOptions(data) {
  return {
    title: {
      text: '人均GDP趋势',
      textStyle: {
        height: 26,
        color: '#fff',
        fontSize: 24,
        fontWeight: 500,
        fontFamily: 'Source Han Sans CN',
      },
      top: 0,
    },
    grid: {
      top: 80,
      left: 95,
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
      name: '人均额度/元',
      nameTextStyle: {
        fontSize: 22,
        fontFamily: 'Source Han Sans CN',
        fontWeight: 400,
        color: '#FFF',
        opacity: 0.7,
        align: 'left',
        padding: [0, 0, 0, -85],
      },
    }],
    series: [
      {
        type: 'line',
        // name: '拥堵指数',
        symbol: 'rect',
        showSymbol: true,
        symbolSize: 10,
        lineStyle: {
          width: 2,
          color: '#85ECEC',
        },
        label: {
          show: false,
        },
        itemStyle: {
          color: '#85ECEC',
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(133, 236, 236, 0.4)',
              },
              {
                offset: 1,
                color: 'rgba(133, 236, 236, 0.1)',
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
