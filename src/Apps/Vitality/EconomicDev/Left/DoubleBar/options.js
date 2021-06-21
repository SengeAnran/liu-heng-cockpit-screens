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
      left: 50,
      bottom: 38,
      right: 10,
    },
    tooltip: {
      trigger: 'axis',
      // axisPointer: {
      //   lineStyle: {
      //   },
      // },
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
      name: '数量/户',
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
        name: '新增注册',
        data: data.map((d) => d.value1),
        label: {
          show: true,
          position: 'top',
          fontSize: 20,
          fontFamily: 'DINPro',
          fontWeight: 'bold',
          color: '#fff',
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
        type: 'bar',
        name: '新增注销',
        data: data.map((d) => d.value2),
        label: {
          show: true,
          position: 'top',
          fontSize: 20,
          fontFamily: 'DINPro',
          fontWeight: 'bold',
          color: '#fff',
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
                color: 'rgba(49, 234, 188, 1)',
              },
              {
                offset: 1,
                color: 'rgba(49, 234, 188, 0.2)',
              },
            ],
          },
        },
      },
    ],
  };
}
