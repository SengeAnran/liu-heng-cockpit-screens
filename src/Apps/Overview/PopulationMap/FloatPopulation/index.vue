<template>
  <div class="float-population">
    <BaseTitle title="户籍人口性别情况" />
    <LineChart :lineData="{ title: ['男', '女'], min: 28000, max: 35000, interval: 3000, chartData }" />
  </div>
</template>

<script>
import LineChart from '../components/LineChart';
import { getPopuliationBySex } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'Register',
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
      getPopuliationBySex()
        .request()
        .then((json) => {
          if (json) {
            this.chartData = json.map((item) => {
              item.name = item.nf || '';
              item.value1 = item.manrk || '';
              item.value2 = item.felmanrk || '';
              return item;
            });
          }
          // this.chart.setOption(this.getOptions(json));
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.float-population {
  position: absolute;
  left: 157px;
  top: 755px;
  width: 835px;
  height: 535px;
  .line-chart {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 460px;
  }
}
</style>
