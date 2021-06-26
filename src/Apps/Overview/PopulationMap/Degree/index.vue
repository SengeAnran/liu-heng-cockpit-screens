<template>
  <div class="degree">
    <BaseTitle title="劳动力资源情况" />
    <LineChart :lineData="{title: ['男', '女'], chartData }" />
  </div>
</template>

<script>
import LineChart from '../components/LineChart';
import { getLabourByYear } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'Degree',
  data() {
    return {
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
      getLabourByYear().request().then((json) => {
        if (json) {
          this.chartData = json.map((item) => {
            item.name = item.nf || '';
            item.value1 = item.manldl || '';
            item.value2 = item.felmanldl || '';
            return item;
          });
        }
        // this.personData = this.resolveData(json);
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
