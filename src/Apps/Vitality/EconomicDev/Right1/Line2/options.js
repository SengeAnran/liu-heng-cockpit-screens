export default function getOptions(data) {
  return {
    title: {
      text: '财政收入情况',
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
      name: '万元',
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
        name: '财政收入',
        showSymbol: true,
        symbolSize: 5,
        lineStyle: {
          width: 2,
          color: '#59DBE6',
        },
        label: {
          show: false,
        },
        itemStyle: {
          color: '#59DBE6',
        },
        data: data.map((d) => d.value1),
      },
      {
        type: 'line',
        name: '财政支出',
        showSymbol: true,
        symbolSize: 5,
        lineStyle: {
          width: 2,
          color: '#FF9798',
        },
        label: {
          show: false,
        },
        itemStyle: {
          color: '#FF9798',
        },
        data: data.map((d) => d.value2),
      },
    ],
  };
}
