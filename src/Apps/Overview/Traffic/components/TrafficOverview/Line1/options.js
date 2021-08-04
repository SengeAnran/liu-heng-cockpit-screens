export default function getOptions(data) {
  return {
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      extraCssText: 'box-shadow: 0 0 4px rgba(4, 18, 40, 0.2);',
      textStyle: {
        color: '#232323',
        fontSize: 12,
      },
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.5)',
        },
      },
    },
    grid: {
      left: 60,
      bottom: 45,
      right: 0,
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
      name: '营运车辆/辆',
      nameTextStyle: {
        fontSize: 22,
        fontFamily: 'Source Han Sans CN',
        fontWeight: 500,
        color: '#FFF',
        opacity: 0.7,
        align: 'left',
        padding: [0, 0, 0, -45],
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
