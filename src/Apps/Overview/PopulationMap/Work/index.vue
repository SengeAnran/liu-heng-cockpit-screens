<template>
  <div class="work">
    <BaseTitle title="户籍人口工作占比" />
    <PieChart :chartData="{ pieData: personData, title: '户籍人口工作占比' }" />
  </div>
</template>

<script>
import PieChart from '../components/PieChart';
export default {
  name: 'Work',
  data() {
    return {
      personData: [
        { value: 1048, name: '农业' },
        { value: 735, name: '技术' },
        { value: 580, name: '服务业' },
        { value: 484, name: '工业' },
        { value: 300, name: '其他' },
      ],
    };
  },
  components: {
    PieChart,
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.work {
  position: absolute;
  right: 125px;
  top: 805px;
  width: 835px;
  height: 535px;
  .pie-chart {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 460px;
  }
}
</style>
