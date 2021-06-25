<template>
  <div class="degree">
    <BaseTitle title="劳动力资源情况" />
    <PieChart :chartData="{ pieData: personData, title: '户籍人口学历占比' }" />
  </div>
</template>

<script>
import PieChart from '../components/PieChart';
import { getLabourByYear } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'Degree',
  data() {
    return {
      personData: [],
    };
  },
  components: {
    PieChart,
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getLabourByYear().request().then((json) => {
        console.log('劳动资源情况', json);
        // this.personData = this.resolveData(json);
      });
    },
    resolveData(data) {
      return data.map((item) => {
        item.name = item.xl;
        item.value = +item.rs;
        return item;
      });
    },
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
