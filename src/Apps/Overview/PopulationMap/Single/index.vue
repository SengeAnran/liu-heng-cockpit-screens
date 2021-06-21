<template>
  <div class="single">
    <BaseTitle title="户籍人口婚龄单身比" />
    <div class="show-box">
      <div v-for="(item, index) of list" :key="index">
        <CountUp  :num="item.value" />
        <span class="unit"> 万人</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getMarriedSingle } from '@/api/Overview/PopulationMap/api';
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
  components: {
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getMarriedSingle().request().then((json) => {
        this.list[0].value = json.dsman || 0;
        this.list[1].value = json.dsfemale || 0;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.single {
  position: absolute;
  right: 125px;
  top: 262px;
  width: 835px;
  height: 535px;
  .show-box {
    position: absolute;
    left: 0;
    top: 85px;
    width: 800px;
    height: 420px;
    >div {
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
        font-size: 25px;
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
