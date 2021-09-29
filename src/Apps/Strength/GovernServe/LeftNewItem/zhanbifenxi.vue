<template>
  <div class="chart-box">
    <PieChart :data="pieTypeData" :color="pieColor" legendType="pec" title="满意度占比分析" />
  </div>
</template>

<script>
import PieChart from '../../../Overview/Medical/components/PieChart';
import { getEvaluationPercent } from '@/api/Strength/GovernServe/api';
export default {
  components: { PieChart },
  data() {
    return {
      pieColor: ['#6182AE', ' #E772DD', '#01A1F5'],
      pieTypeData: [],
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getEvaluationPercent()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.pieTypeData = json.map((item) => {
            return { name: item.pjzt, value: item.pjzs };
          });
        });
    },
  },
};
</script>

<style>
.chart-box {
  margin-top: 50px;
  height: 350px;
  width: 799px;
}
</style>