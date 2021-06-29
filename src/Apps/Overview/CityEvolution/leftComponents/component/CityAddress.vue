<template>
  <div class="area_location">
    <BaseTitle title="市域面积分布情况" :width='720' />
    <div class="item_wrapper">
      <div class="item">
        <div class="title">
          全镇面积
        </div>
        <div class="count">
          <CountUp  :num="sqmj.qzmj || 0" />
        </div>
        <div class="unit">
          平方千米
        </div>
      </div>
      <div class="item">
        <div class="title">
          陆地面积
        </div>
        <div class="count administration_title">
          <CountUp  :num="sqmj.xzsqmj || 0" />
        </div>
        <div class="unit administration_unit">
          平方千米
        </div>
      </div>
      <div class="item">
        <div class="title">
          人口密度
        </div>
        <div class="count seal_title">
          <CountUp  :num="sqmj.rkmd || 0" />
        </div>
        <div class="unit seal_unit">
          人/平方千米
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from '../../components/BaseTitle';
import { getAreaDistribution } from '@/api/Overview/CityEvolution/api';
export default {
  name: 'CityEvolution',
  components: {
    BaseTitle,
  },
  data() {
    return {
      sqmj: {},
    };
  },
  mounted() {
    this.getAreaInfo();
  },
  methods: {
    getAreaInfo() {
      getAreaDistribution().request().then((res) => {
        this.sqmj = res;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.area_location {
  position: absolute;
  width: 840px;
  height: 550px;
  top: 0;
  left: 0;
  padding-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  .item_wrapper {
    height: 420px;
    margin-top: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .item {
      height: 400px;
      width: 250px;
      background: url('../../images/address_bg.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      .title {
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translate(-50%, 0);
        height: 80px;
        line-height: 80px;
        text-align: center;
        width: 210px;
        font-size: 35px;
        color: white;
        background: url('../../images/address_title.png') no-repeat;
        background-size: 100% 100%;
      }
      .count {
        position: absolute;
        height: 60px;
        line-height: 60px;
        text-align: center;
        width: 210px;
        top: 175px;
        left: 50%;
        font-size: 60px;
        transform: translate(-50%, 0);
        color: #66CCFF;
      }
      .unit {
        position: absolute;
        height: 40px;
        line-height: 40px;
        width: 250px;
        text-align: center;
        top: 290px;
        left: 50%;
        font-size: 30px;
        transform: translate(-50%, 0);
        color: #59DBE6;
      }
      .administration_title {
        color: #31EABC;
      }
      .administration_unit {
        color: #31EABC;
      }
      .seal_title {
        color: #ED7F64;
      }
      .seal_unit {
        color: #ED7F64;
      }
    }
  }
}
</style>
