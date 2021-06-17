<template>
  <div class="IndustryField">
    <div class="sub-title">申报产业领域 Top5</div>
    <div class="chart-wrap">
      <div class="bar-wrap" :key="index" v-for="(item,index) in chartList">
        <div class="bg">
          <div class="name" :class="{opacity: item.percent > 0}">{{item.name}}</div>
          <div class="num" :style="{width:`${item.percent}%`}">
            <i v-if="item.percent > 0" class="white"></i>
            <i v-if="item.percent > 0" class="number">{{item.num}}</i>
          </div>
        </div>
        <div class="percent">
          <span>{{item.percent}}</span>%
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
          name: 'Top1 高端装备',
          num: 999,
          percent: 0,
        },
        {
          name: 'Top2 新材料',
          num: 777,
          percent: 0,
        },
        {
          name: 'Top3 数字经济',
          num: 555,
          percent: 0,
        },
        {
          name: 'Top4 数字经济',
          num: 333,
          percent: 0,
        },
        {
          name: 'Top5 数字经济',
          num: 111,
          percent: 0,
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      const _arr = [90, 80, 70, 60, 50];
      _arr.forEach((item, index) => {
        this.chartList[index].percent = item;
      });
    }, 0);
  },
  methods: {},
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
    transition: all 2s ease;
    position: relative;
    .white {
      display: block;
      width: 10px;
      height: 100%;
      position: absolute;
      right: 0;
      background: linear-gradient(90deg, rgba(92, 111, 255, 1) 10%, #fff);
    }
    .number{
      line-height: 28px;
      font-style: normal;
      color:#fff;
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
    transition-delay: .4s;
    opacity: 0;
    &.opacity {
      opacity: 1;
    }
  }
  .percent {
    width: 120px;
    height: 26px;
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
    }
  }
}
</style>
