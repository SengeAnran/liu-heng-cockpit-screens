<template>
  <div class="work">
    <BaseTitle title="户籍人口工作占比" />
    <PieChart :chartData="{ pieData: personData, title: '户籍人口工作占比' }" />
  </div>
</template>

<script>
import PieChart from '../components/PieChart';
import { getWrok } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'Work',
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
      getWrok().request().then((json) => {
        this.personData = this.resolveData(json);
      });
    },
    resolveData(data) {
      return data.map((item) => {
        item.name = item.dsman;
        item.value = +item.rs;
        return item;
      });
    },
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
