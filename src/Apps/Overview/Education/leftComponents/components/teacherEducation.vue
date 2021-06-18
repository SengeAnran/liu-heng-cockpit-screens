<template>
  <div class="school_age">
    <PiceChart :chartData="{ pieData: personData, title: '教师学历结构' }" height="470" :color='color' legendTop="30%" />
  </div>
</template>

<script>
import PiceChart from '../../components/piceChart';
export default {
  name: 'LeftComponents',
  components: {
    PiceChart,
  },
  data() {
    return {
      personData: [
        { value: 1048, name: '大专' },
        { value: 735, name: '本科' },
        { value: 580, name: '研究生' },
      ],
      color: [
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(97, 130, 174, 0.6)', // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(97, 130, 174, 0.6)', // 100% 处的颜色
          }],
          global: false, // 缺省为 false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(200, 114, 242, 1)', // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(247, 114, 209, 1)', // 100% 处的颜色
          }],
          global: false, // 缺省为 false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(1, 94, 234, 1)', // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(0, 192, 250, 1)', // 100% 处的颜色
          }],
          global: false, // 缺省为 false
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.school_age {
  position: absolute;
  width: 855px;
  height: 370px;
  position: absolute;
  top: 640px;
  right: 0;
  // opacity: 0.6;
  // background: pink;
}
</style>
