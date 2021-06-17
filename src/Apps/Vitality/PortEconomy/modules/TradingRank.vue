<template>
  <div class="TradingRank">
    <div class="chart-wrap">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartList: [
        {
          name: 'Top1 宁波',
          num: 999,
          percent: 0,
        },
        {
          name: 'Top2 温州',
          num: 777,
          percent: 0,
        },
        {
          name: 'Top3 台州',
          num: 555,
          percent: 0,
        },
        {
          name: 'Top4 厦门',
          num: 333,
          percent: 0,
        },
        {
          name: 'Top5 深圳',
          num: 111,
          percent: 0,
        },
        {
          name: 'Top6 广州',
          num: 999,
          percent: 0,
        },
        {
          name: 'Top7 南京',
          num: 777,
          percent: 0,
        },
        {
          name: 'Top8 苏州',
          num: 555,
          percent: 0,
        },
        {
          name: 'Top9 上海',
          num: 333,
          percent: 0,
        },
        {
          name: 'Top10 杭州',
          num: 111,
          percent: 0,
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      const _arr = [90, 85, 80, 75, 70, 65, 60, 55, 50, 45];
      _arr.forEach((item, index) => {
        this.chartList[index].percent = item;
      });
    }, 0);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.TradingRank {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
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
  height: 46px;
  margin-bottom: 47px;
  display: flex;
  align-items: center;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  .bg {
    // margin-left: 20px;
    height: 46px;
    flex: 1;
    background-color: rgba(158, 158, 158, 0.2);
  }
  .num {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg,transparent 10%, rgba(35, 41, 87, 1) 30%, rgba(92, 111, 255, 1));
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
    transition-delay: .4s;
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
