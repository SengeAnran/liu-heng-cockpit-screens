<template>
  <div class="punishment">
    <BaseTitle title="行政处罚" />
    <div class="bar-box">
      <BarItem v-for="(item, index) in list" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import BarItem from '../components/barItem';
import { getPenaltyForPollution } from '@/api/Strength/Environmental/api';
export default {
  name: 'Punishment',
  components: {
    BarItem,
  },
  data() {
    return {
      list: [
        {
          cflx: '项目审批',
          cs: 0,
          unit: '',
        },
        {
          cflx: '信访管理',
          cs: 0,
          unit: '',
        },
        {
          cflx: '移动执法',
          cs: 5,
          unit: '',
        },
        {
          cflx: '行政处罚',
          cs: 4.76,
          unit: '万元',
        },
      ],
    };
  },
  mounted() {
    // this.loadData();
  },
  methods: {
    loadData() {
      getPenaltyForPollution()
        .request()
        .then((json) => {
          this.list = json || [];
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.punishment {
  position: absolute;
  right: 125px;
  top: 805px;
  width: 835px;
  height: 535px;
  .bar-box {
    height: 400px;
  }
}
</style>
