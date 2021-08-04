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
    legend: {
      icon: 'rect',
      itemWidth: 18,
      itemHeight: 18,
      itemGap: 50,
      right: 0,
      top: 15,
      formatter(name) {
        return `${name}   80%`;
      },
      textStyle: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'Source Han Sans CN',
        padding: [0, 0, 0, 10],
        fontWeight: 400,
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
        show: false,
        lineStyle: {
          color: '#9797978f',
        },
      },
      name: '数值',
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
        name: '交通指数',
        showSymbol: false,
        symbolSize: 10,
        lineStyle: {
          width: 2,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#68DFAF',
              },
              {
                offset: 1,
                color: '#68DFAF',
              },
            ],
          },
        },
        label: {
          show: false,
        },
        itemStyle: {
          color: 'rgb(104, 223, 175)',
          borderWidth: 4,
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(104, 223, 175, 0.4)',
            },
            {
              offset: 1,
              color: 'rgba(104, 223, 175, 0.1)',

            },
            ],
          },
        },
        data: data.map((d) => d.value2),
        z: 2,
      },
      {
        type: 'line',
        name: '拥堵指数',
        showSymbol: false,
        symbolSize: 10,
        lineStyle: {
          width: 2,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#7C52C4',
              },
              {
                offset: 1,
                color: '#EFE6FD',
              },
            ],
          },
        },
        label: {
          show: false,
        },
        itemStyle: {
          color: '#7C52C4',
          borderWidth: 4,
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
                color: 'rgba(124, 82, 196, 0.4)',
              },
              {
                offset: 1,
                color: 'rgba(124, 82, 196, 0.1)',
              },
            ],
          },
        },
        data: data.map((d) => d.value1),
        z: 1,
      },
    ],
  };
}
