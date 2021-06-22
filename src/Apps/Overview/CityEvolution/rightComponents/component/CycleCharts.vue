<template>
  <div class="cycle_charts">
    <div class="area_location">
      <PieChart :data="buildingAreaData" legendType="pec" :color="colors" title="建成区分布情况" />
    </div>
    <div class="area_location">
      <PieChart :data="areaAddressData" legendType="pec" :color="colors" title="面积分布情况" />
    </div>
    <div class="area_location">
      <PieChart :data="oceanAddressData" legendType="pec" :color="colors" title="海域分布情况" />
    </div>
  </div>
</template>

<script>
import PieChart from '../../components/PiceChart';
export default {
  name: 'CycleCharts',
  components: {
    PieChart,
  },
  props: {
    buildingAreaData: {
      type: Array,
      default: () => [],
    },
    areaAddressData: {
      type: Array,
      default: () => [],
    },
    oceanAddressData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      colors: [
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(239, 182, 144, 1)', // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(239, 182, 144, 1)', // 100% 处的颜色
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
            offset: 0, color: 'rgba(168, 255, 178, 1)', // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(84, 188, 104, 1)', // 100% 处的颜色
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
            offset: 0, color: 'rgba(253, 226, 255, 1)', // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(173, 143, 249, 1)', // 100% 处的颜色
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
            offset: 0, color: 'rgba(255, 243, 138, 1)', // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(239, 185, 67, 1)', // 100% 处的颜色
          }],
          global: false, // 缺省为 false
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.cycle_charts {
  position: absolute;
  width: 840px;
  height: 1060px;
  top: 0;
  left: 840px;
  padding-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  // background: red;
  // opacity: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .area_location {
    height: 360px;
    &:first-child {
      // background: orange;
    }
    &:last-child {
      // background: blue;
    }
  }
}
</style>
