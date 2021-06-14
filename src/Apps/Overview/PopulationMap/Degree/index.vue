<template>
  <div class="degree">
    <BaseTitle title="户籍人口学历占比" />
    <PieChart :chartData="{ pieData: personData, title: '户籍人口学历占比' }" />
  </div>
</template>

<script>
import PieChart from '../components/PieChart';
export default {
  name: 'Degree',
  data() {
    return {
      personData: [
        { value: 1048, name: '大专' },
        { value: 735, name: '本科' },
        { value: 580, name: '研究生' },
        { value: 484, name: '高中' },
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
.degree {
  position: absolute;
  right: 976px;
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
