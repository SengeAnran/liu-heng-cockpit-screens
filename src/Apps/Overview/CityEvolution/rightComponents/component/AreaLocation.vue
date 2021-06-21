<template>
  <div class="area_location">
    <BaseTitle title="市域面积分布情况" :width='720' />
    <div class="item_wrapper">
      <div class="item">
        <div class="title">
          全镇面积
        </div>
        <div class="count">
          <CountUp  :num="sqmj.qzmj" />
        </div>
        <div class="unit">
          平方千米
        </div>
      </div>
      <div class="item">
        <div class="title">
          行政辖区面积
        </div>
        <div class="count administration_title">
          <CountUp  :num="sqmj.xqmj" />
        </div>
        <div class="unit administration_unit">
          平方千米
        </div>
      </div>
      <div class="item">
        <div class="title">
          海域面积
        </div>
        <div class="count seal_title">
          <CountUp  :num="sqmj.hymj" />
        </div>
        <div class="unit seal_unit">
          平方千米
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from '../../components/BaseTitle';
export default {
  name: 'CityEvolution',
  components: {
    BaseTitle,
  },
  props: {
    sqmj: {
      type: Object,
      default: {},
    },
  },
};
</script>
<style lang="scss" scoped>
.area_location {
  position: absolute;
  width: 840px;
  height: 350px;
  top: 0;
  left: 0;
  padding-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  .item_wrapper {
    margin-top: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .item {
      height: 226px;
      width: 250px;
      background: url('../../images/aera_bg.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      .title {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translate(-50%, 0);
        height: 80px;
        line-height: 80px;
        text-align: center;
        width: 210px;
        font-size: 35px;
        color: white;
      }
      .count {
        position: absolute;
        height: 60px;
        line-height: 60px;
        text-align: center;
        width: 210px;
        top: 105px;
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
        top: 170px;
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
