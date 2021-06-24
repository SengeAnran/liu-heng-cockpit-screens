<template>
  <div class="chart-wrap" v-if="chartList.length>0">
    <div class="bar-wrap" :key="index" v-for="(item,index) in chartList">
      <div class="bg">
        <div class="name" :class="{opacity: item.percent > 0}">{{item.name}}</div>
        <div class="num" :style="{width:`${item.percent}%`}">
          <i v-if="item.percent > 0" class="white"></i>
        </div>
      </div>
      <div class="percent">
        <span>{{item.percent}}</span>吨
      </div>
    </div>
  </div>
</template>

<script>
import { tradeVolumeOfMajorCitiesRanked } from '@/api/Vitality/PortEconomy/api';
export default {
  data() {
    return {
      chartList: [],
    };
  },
  mounted() {
    tradeVolumeOfMajorCitiesRanked()
      .request()
      .then((json) => {
        console.log(json);
        const total = json.map((item) => item.mye).reduce((m, n) => m + n);
        json.map((item) => {
          item.name = item.csmc;
          item.num = item.mye;
          item.percent = ((item.mye / total) * 100).toFixed(2);
        });
        this.chartList = json;
        console.log(this.chartList);
      });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.sub-title {
  font-size: 24px;
  line-height: 24px;
  min-height: 24px;
  color: #fff;
  margin-bottom: 25px;
}
.chart-wrap {
  flex: 1;
  margin-top: 30px;
}
.bar-wrap {
  height: 46px;
  margin-bottom: 47px;
  display: flex;
  align-items: center;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  .bg {
    height: 46px;
    flex: 1;
    background-color: rgba(158, 158, 158, 0.2);
  }
  .num {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, transparent 10%, rgba(35, 41, 87, 1) 30%, rgba(92, 111, 255, 1));
    transition: all 2s ease;
    position: relative;
    .white {
      display: block;
      width: 40px;
      height: 100%;
      position: absolute;
      right: 0;
      background: linear-gradient(90deg, rgba(92, 111, 255, 1) 10%, #fff);
    }
  }
  .name {
    height: 46px;
    line-height: 46px;
    font-size: 24px;
    text-indent: 6px;
    color: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    transition: all 2s ease;
    transition-delay: 0.4s;
    opacity: 0;
    &.opacity {
      opacity: 1;
    }
  }
  .percent {
    width: 120px;
    height: 46px;
    min-width: 120px;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.8);
    text-align: right;
    line-height: 26px;
    font-size: 24px;
    span {
      line-height: 40px;
      font-size: 30px;
      margin-right: 2px;
    }
  }
}
</style>
