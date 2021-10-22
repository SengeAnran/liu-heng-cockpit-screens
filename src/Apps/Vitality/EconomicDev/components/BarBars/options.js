export default function getOptions(data, content) {
  // console.log(data, content);
  return {
    title: {
      text: content.title,
      textStyle: {
        height: 26,
        color: '#fff',
        fontSize: 24,
        fontWeight: 500,
        fontFamily: 'Source Han Sans CN',
      },
      top: 20,
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
      // orient: 'vertical',
      // bottom: 0,
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
      name: content.leftUnit,
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
    }],
    series: [
      {
        type: 'bar',
        name: content.barName1,
        // yAxisIndex: 1,
        data: data.map((d) => d.bar1),
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
                color: '#FFFFFF',
              },
              {
                offset: 0.2,
                color: 'rgba(110, 193, 251, 0.91)',
              },
              {
                offset: 1,
                color: 'rgba(133, 234, 255, 0.3)',
              },
            ],
          },
        },
      },
      {
        type: 'bar',
        name: content.barName2,
        symbol: 'emptyCircle',
        symbolSize: 5,
        itemStyle: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: 'linear',
            colorStops: [
              {
                offset: 0,
                color: '#FFFFFF',
              },
              {
                offset: 0.2,
                color: 'rgba(255, 151, 152, 0.95)',
              },
              {
                offset: 1,
                color: 'rgba(255, 151, 152, 0.3)',
              },
            ],
          },
        },
        lineStyle: {
          width: 3,
        },
        data: data.map((d) => d.bar2),
        label: {
          show: false,
          position: 'top',
          formatter: '{c}',
          fontSize: 20,
          fontFamily: 'DINPro',
          color: '#fff',
        },
        barWidth: 16,
      },
      {
        type: 'bar',
        name: content.barName3,
        symbol: 'emptyCircle',
        symbolSize: 5,
        itemStyle: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: 'linear',
            colorStops: [
              {
                offset: 0,
                color: '#FFFFFF',
              },
              {
                offset: 0.2,
                color: 'rgba(119, 227, 218, 0.94)',
              },
              {
                offset: 1,
                color: 'rgba(133, 234, 255, 0.3)',
              },
            ],
          },
        },
        lineStyle: {
          width: 3,
        },
        data: data.map((d) => d.bar3),
        label: {
          show: false,
          position: 'top',
          formatter: '{c}',
          fontSize: 20,
          fontFamily: 'DINPro',
          color: '#fff',
        },
        barWidth: 16,
      },
    ],
  };
}
