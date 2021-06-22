<template>
  <div class="IndustryField">
    <div class="sub-title">申报产业领域 Top{{ chartList.length }}</div>
    <div class="chart-wrap">
      <div class="bar-wrap" :key="index" v-for="(item,index) in chartList">
        <div class="bg">
          <div class="name" :class="{opacity: item.percent > 0}">{{`Top${index+1} ${item.cylymc}`}}</div>
          <div class="num" :style="{width:`${item.percent}%`}">
            <i v-if="item.percent > 0" class="white"></i>
            <i v-if="item.percent > 0" class="number">{{item.sl}}</i>
          </div>
        </div>
        <div class="percent">
          <span>
            <ICountUp :endVal="item.percent" :options="options" />
          </span>%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from '../components/ICountUp';
import { getIndustrialField } from '@/api/Overview/Innovation/api';
export default {
  components: {
    ICountUp,
  },
  data() {
    return {
      chartList: [],
      options: {
        useEasing: true,
        useGrouping: true,
        duration: 1,
        separator: '',
        decimal: '.',
        prefix: '',
        suffix: '',
        decimalPlaces: 2,
      },
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getIndustrialField()
        .request()
        .then((json) => {
          this.chartList = json;
          setTimeout(() => {
            const numArr = json.map((item) => item.sl);
            const total = numArr.reduce((prev, cur) => {
              return prev + cur;
            });
            this.chartList.map((item) => {
              item.percent = Number(((item.sl / total) * 100).toFixed(2));
            });
            this.$forceUpdate();
          }, 0);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.IndustryField {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.sub-title {
  font-size: 24px;
  line-height: 24px;
  min-height: 24px;
  color: #fff;
  margin-bottom: 25px;
}
.chart-wrap {
  flex: 1;
}
.bar-wrap {
  height: 30px;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  .bg {
    margin-left: 80px;
    height: 26px;
    flex: 1;
    background-color: rgba(158, 158, 158, 0.2);
  }
  .num {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, rgba(35, 41, 87, 1) 30%, rgba(92, 111, 255, 1));
    transition: all 1s ease;
    position: relative;
    .white {
      display: block;
      width: 10px;
      height: 100%;
      position: absolute;
      right: 0;
      background: linear-gradient(90deg, rgba(92, 111, 255, 1) 10%, #fff);
    }
    .number {
      line-height: 26px;
      font-style: normal;
      color: #fff;
      font-size: 20px;
      position: absolute;
      top: 0;
      right: 10px;
    }
  }
  .name {
    height: 30px;
    line-height: 30px;
    font-size: 24px;
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
    height: 36px;
    min-width: 120px;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.8);
    text-align: right;
    line-height: 26px;
    font-size: 18px;
    span {
      line-height: 40px;
      font-size: 30px;
      margin-right: 2px;
      & > div {
        display: inline;
        font-size: 32px;
      }
    }
  }
}
</style>
