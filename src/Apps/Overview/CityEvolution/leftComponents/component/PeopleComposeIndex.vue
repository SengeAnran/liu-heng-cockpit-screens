<template>
  <div class="people_compose">
    <BaseTitle title="人口组成情况-指标" :width='720' />
    <div class="item_wrapper">
      <div class="item">
        <img class="img" src="../../images/people_num.png">
        <div class="title">
          户籍人口数量
        </div>
        <div class="count_wrapper">
          <CountUp  :num="item.hjrksl" />
          <span class="unit">人</span>
        </div>
      </div>
      <div class="item">
        <img class="img" src="../../images/children_num.png">
        <div class="title">
          新生儿出生数量
        </div>
        <div class="count_wrapper children">
          <CountUp  :num="item.xscssl" />
          <span class="unit">人</span>
        </div>
      </div>
      <div class="item">
        <img class="img" src="../../images/dead_num.png">
        <div class="title">
          人口死亡数量
        </div>
        <div class="count_wrapper dead">
          <CountUp  :num="item.rkswsl" />
          <span class="unit">人</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from '../../components/BaseTitle';
import { getPoputionForm } from '@/api/Overview/CityEvolution/api';
export default {
  name: 'CityEvolution',
  components: {
    BaseTitle,
  },
  data() {
    return {
      item: {
        hjrksl: 10345,
        xscssl: 34,
        rkswsl: 12,
      },
    };
  },
  mounted() {
    this.getPopulationTarget();
  },
  methods: {
    getPopulationTarget() {
      getPoputionForm().request().then((res) => {
        this.item = res;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.people_compose {
  position: absolute;
  width: 840px;
  height: 550px;
  top: 0;
  left: 850px;
  padding-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  .item_wrapper {
    margin-top: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .item {
      height: 413px;
      width: 250px;
      background: url('../../images/item_bg.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      .img {
        position: absolute;
        top: 75px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      .title {
        position: absolute;
        top: 142px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 120px;
        font-size: 30px;
        text-align: center;
        color: white;
      }
      .count_wrapper {
        position: absolute;
        bottom: 40px;
        height: 60px;
        line-height: 60px;
        font-size: 60px;
        font-weight: bolder;
        width: 250px;
        color: #66CCFF;
        text-align: center;
        padding-left: 5px;
        font-family: DIN;
        .unit {
          font-size: 30px;
          color: #59DBE6;
          position: relative;
          right: 0px;
          top: -2px;
        }
      }
      .children {
        color: #31EABC;
        .unit {
          color: #31EABC;
        }
      }
      .dead {
        color: #ED7F64;
        .unit {
          color: #ED7F64;
        }
      }
    }
  }
}
</style>
