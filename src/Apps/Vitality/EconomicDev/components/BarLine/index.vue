<template>
  <div class="item">
    <Title v-if="title">{{ title }}</Title>
    <div class="bar-line" ref="eleChart"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts/lib/echarts';
import Title from '../../Title';
import getOptions from './options';
// import economicAPI from '@/api/Vitality/EconomicDev';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      required: true,
    },
    content: {
      type: Object,
      required: false,
      default() {
        return {
          title: '',
          rightUnit: '',
          leftUnit: '',
          barName: '',
          lineName: '',
        };
      },
    },
    refreshKey: {
      type: Boolean,
      default: false,
    },
  },
  components: { Title },
  data() {
    return {
      list: [],
    };
  },
  watch: {
    refreshKey(val) {
      if (val) {
        this.chart.setOption(getOptions(this.data, this.content));
      }
    },
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.eleChart);
      this.chart.setOption(getOptions(this.list, this.content));
    },
  },
};
</script>
<style lang="scss" scoped>
.item{
  width: 80rem;
  margin-right: 8rem;
  margin-bottom: 8rem;
  .bar-line {
    flex: auto;
    margin-left: 4rem;
    // outline: 1px solid red;
    height: 41rem;
    //width: 41rem;
  }
}

</style>
