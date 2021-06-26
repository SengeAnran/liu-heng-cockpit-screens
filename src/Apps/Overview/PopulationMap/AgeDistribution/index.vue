<template>
  <div class="age-distribution">
    <BaseTitle title="出生与死亡情况" />
    <LineChart :lineData="{title: ['出生数', '死亡数'], chartData }" />
  </div>
</template>

<script>
import LineChart from '../components/LineChart';
import { getBornAndDeathByYear } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'AgeDistribution',
  data() {
    return {
      chart: null,
      chartData: [],
    };
  },
  components: {
    LineChart,
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getBornAndDeathByYear().request().then((json) => {
        if (json) {
          this.chartData = json.map((item) => {
            item.name = item.nf || '';
            item.value1 = item.chrks || '';
            item.value2 = item.swrks || '';
            return item;
          });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.age-distribution {
  position: absolute;
  right: 976px;
  top: 262px;
  width: 835px;
  height: 535px;
}
</style>
