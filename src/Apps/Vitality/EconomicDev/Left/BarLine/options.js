export default function getOptions(data) {
  return {
    title: {
      text: '项目行业分布',
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
      top: 100,
      left: 80,
      bottom: 38,
      right: 80,
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: 0,
      right: 0,
      orient: 'vertical',
      itemWidth: 20,
      itemHeight: 20,
      icon: 'rect',
      textStyle: {
        color: '#fff',
        fontSize: 20,
      },
      itemStyle: {
        color: 'inherit',
      },
      // data: [name1, name2, name3],
    },
    xAxis: {
      type: 'category',
      data: data.map((d) => d.name),
      axisLabel: {
        margin: 8,
        color: 'rgba(225,225,225,.7)',
        fontSize: 20,
        fontFamily: 'DINPro',
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(151, 151, 151, 1)',
          opacity: 0.5,
          width: 2,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: [{
      type: 'value',
      name: '数量/个',
      nameTextStyle: {
        fontSize: 22,
        fontFamily: 'Source Han Sans CN',
        fontWeight: 500,
        color: '#FFF',
        opacity: 0.7,
        align: 'center',
        padding: [0, 0, 0, -10],
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
      axisLabel: {
        show: true,
        margin: 8,
        color: 'rgba(225,225,225,.7)',
        fontSize: 21,
        fontFamily: 'DINPro',
      },
    }, {
      type: 'value',
      name: '数量/亿元',
      nameTextStyle: {
        color: 'rgba(225,225,225,.7)',
        fontSize: 21,
      },
      // position: 'left',
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
      minInterval: 1,
      axisLabel: {
        show: true,
        margin: 8,
        color: 'rgba(225,225,225,.7)',
        fontSize: 21,
        fontFamily: 'DINPro',
      },
    }],
    series: [
      {
        type: 'bar',
        name: '项目数',
        yAxisIndex: 1,
        data: data.map((d) => d.bar),
        label: {
          show: false,
          position: 'outside',
          color: '#fff',
          fontSize: 20,
          fontFamily: 'DINPro',
        },
        barWidth: 16,
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
                color: 'rgba(102, 204, 255, 1)',
              },
              {
                offset: 1,
                color: 'rgba(102, 204, 255, 0.2)',
              },
            ],
          },
        },
      },
      {
        type: 'line',
        name: '投资额',
        symbol: 'emptyCircle',
        symbolSize: 5,
        itemStyle: {
          color: 'rgba(237, 191, 100, 1)',
        },
        lineStyle: {
          width: 3,
        },
        data: data.map((d) => d.line),
        label: {
          show: false,
          position: 'top',
          formatter: '{c}',
          fontSize: 20,
          fontFamily: 'DINPro',
          color: '#fff',
        },
      },
    ],
  };
}
