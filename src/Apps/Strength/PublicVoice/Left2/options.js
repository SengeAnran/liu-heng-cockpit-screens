export default function getOptions(data) {
  return {
    grid: {
      top: 55,
      left: 80,
      bottom: 38,
      right: 0,
    },
    legend: {
      show: true,
      icon: 'rect',
      itemHeight: 20,
      itemWidth: 20,
      right: 20,
      textStyle: {
        fontSize: '20',
        fontFamily: 'Source Han Sans SC',
        fontWeight: 400,
        color: '#FFFFFF',
      },
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
          width: 2,
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
        name: '总量',
        type: 'line',
        data: data.map((d) => d.value1),
        symbol: 'emptyCircle',
        symbolSize: 2,
        itemStyle: {
          color: 'rgb(79,194,204)',
        },
        lineStyle: {
          width: 3,
          color: 'rgb(79,194,204)',
        },
        label: {
          show: false,
          position: 'top',
          formatter: '{c}',
          fontSize: 20,
          fontFamily: 'DINPro',
          color: '#fff',
        },
        emphasis: {
          label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            fontSize: 20,
            fontFamily: 'DINPro',
            color: '#fff',
          },
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
                color: 'rgba(79,194,204,0.9)',
              },
              {
                offset: 1,
                color: 'rgba(23, 47, 47, 0)',
              },
            ],
          },
        },
      },
      {
        name: '正面',
        type: 'line',
        data: data.map((d) => d.value2),
        symbol: 'emptyCircle',
        symbolSize: 2,
        itemStyle: {
          color: 'rgb(49,234,188)',
        },
        lineStyle: {
          width: 3,
          color: 'rgb(49,234,188)',
        },
        label: {
          show: false,
          position: 'top',
          formatter: '{c}',
          fontSize: 20,
          fontFamily: 'DINPro',
          color: '#fff',
        },
        emphasis: {
          label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            fontSize: 20,
            fontFamily: 'DINPro',
            color: '#fff',
          },
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
                color: 'rgba(49,234,188,0.9)',
              },
              {
                offset: 1,
                color: 'rgba(23, 47, 47, 0)',
              },
            ],
          },
        },
      },
      {
        name: '中性',
        type: 'line',
        data: data.map((d) => d.value4),
        symbol: 'emptyCircle',
        symbolSize: 2,
        itemStyle: {
          color: 'rgb(237,191,100)',
        },
        lineStyle: {
          width: 3,
          color: 'rgb(237,191,100)',
        },
        label: {
          show: false,
          position: 'top',
          formatter: '{c}',
          fontSize: 20,
          fontFamily: 'DINPro',
          color: '#fff',
        },
        emphasis: {
          label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            fontSize: 20,
            fontFamily: 'DINPro',
            color: '#fff',
          },
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
                color: 'rgba(237,191,100,0.9)',
              },
              {
                offset: 1,
                color: 'rgba(23, 47, 47, 0)',
              },
            ],
          },
        },
      },
      {
        name: '负面',
        type: 'line',
        data: data.map((d) => d.value3),
        symbol: 'emptyCircle',
        symbolSize: 2,
        itemStyle: {
          color: 'rgb(255,151,152)',
        },
        lineStyle: {
          width: 3,
          color: 'rgb(255,151,152)',
        },
        label: {
          show: false,
          position: 'top',
          formatter: '{c}',
          fontSize: 20,
          fontFamily: 'DINPro',
          color: '#fff',
        },
        emphasis: {
          label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            fontSize: 20,
            fontFamily: 'DINPro',
            color: '#fff',
          },
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
                color: 'rgba(255,151,152,0.9)',
              },
              {
                offset: 1,
                color: 'rgba(23, 47, 47, 0)',
              },
            ],
          },
        },
      },
    ],
  };
}
