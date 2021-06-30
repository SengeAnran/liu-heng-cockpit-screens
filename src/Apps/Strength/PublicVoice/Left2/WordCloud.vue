<template>
  <div class="word-cloud" ref="eleChart">
    word-cloud
  </div>
</template>
<script>
import * as echarts from 'echarts';
import 'echarts-wordcloud';
export default {
  data() {
    return {
      list: [
        { name: '郭巨码头', value: 30 },
        { name: '车渡', value: 28 },
        { name: '大美六横', value: 29 },
        // { name: '交通拥堵', value: 32 },
        // { name: '健康码', value: 25 },
        // { name: '无停车位', value: 26 },
        // { name: '乱扔垃圾', value: 22 },
        // { name: '食品安全', value: 21 },
        // { name: '环境卫生', value: 30 - 12 },
        // { name: '疫情', value: 28 - 12 },
        // { name: '景色太差', value: 19 - 12 },
        // { name: '交通拥堵', value: 32 - 12 },
        // { name: '健康码', value: 25 - 12 },
        // { name: '无停车位', value: 26 - 12 },
        // { name: '乱扔垃圾', value: 22 - 12 },
        // { name: '食品安全', value: 21 - 12 },
        // { name: '环境卫生', value: 30 - 20 },
        // { name: '疫情', value: 28 - 20 },
        // { name: '景色太差', value: 19 - 20 },
        // { name: '交通拥堵', value: 32 - 20 },
        // { name: '健康码', value: 25 - 20 },
        // { name: '无停车位', value: 26 - 20 },
        // { name: '乱扔垃圾', value: 22 - 20 },
        // { name: '食品安全', value: 21 - 20 },
      ],
    };
  },
  mounted() {
    const chart = echarts.init(this.$refs.eleChart);

    chart.setOption({
      series: [{
        type: 'wordCloud',
        shape: 'circle',
        // maskImage: maskImage,
        left: 'center',
        top: 'center',
        width: '70%',
        height: '80%',
        right: null,
        bottom: null,
        sizeRange: [12, 60],
        rotationRange: [0, 0],
        rotationStep: 0,
        gridSize: 8,
        drawOutOfBound: false,
        layoutAnimation: true,
        textStyle: {
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: 'rgba(153, 238, 255, 1)',
        },
        emphasis: {
          focus: 'self',
          textStyle: {
            shadowBlur: 10,
            shadowColor: '#333',
          },
        },
        data: this.list,
      }],
    });
  },
};
</script>
<style lang="scss" scoped>
.word-cloud {
  margin-top: 3rem;
  // outline: 1px solid red;
  height: 40rem;
}
</style>
