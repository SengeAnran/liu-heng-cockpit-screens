<template>
  <div class="single">
    <BaseTitle title="自然增长情况" />
    <div class="show-box">
      <div v-for="(item, index) of list" :key="index">
        <CountUp :num="item.value" />
        <span class="unit">{{ index === 0 ? '人' : '‰' }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getNaturalGrowth } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'Single',
  data() {
    return {
      list: [
        {
          name: '单身男性',
          value: 0,
        },
        {
          name: '单身女性',
          value: 0,
        },
      ],
    };
  },
  components: {},
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getNaturalGrowth()
        .request()
        .then((json) => {
          this.list[0].value = json.zrzzrks || 0;
          this.list[1].value = +(json.zrzzl * 100).toFixed(2) || 0;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.single {
  position: absolute;
  right: 125px;
  top: 162px;
  width: 835px;
  height: 585px;
  .show-box {
    position: absolute;
    left: 0;
    top: 100px;
    width: 800px;
    height: 420px;
    > div {
      width: 800px;
      height: 198px;
      color: #fff;
      .count-up {
        margin-left: 415px;
        top: 50px;
        font-size: 75px;
      }
      .unit {
        position: relative;
        top: 50px;
        font-size: 35px;
      }
      &:first-child {
        background: url('./img/male.png');
      }
      &:last-child {
        margin-top: 17px;
        background: url('./img/female.png');
      }
    }
  }
}
</style>
