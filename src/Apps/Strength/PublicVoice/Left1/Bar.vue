<template>
  <div class="bar">
    <div class="bar-item" :key="index" v-for="(item,index) in list">
      <div class="bar-bg">
        <div class="value" :style="{ width:`${item.percent}%` }">
          {{item.value}}
        </div>
      </div>
      <div class="name" :class="{opacity: item.percent > 0}">Top{{ index + 1}} {{item.name}}</div>
      <div class="percent">
        {{item.percent}}<span class="unit">%</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: '微博',
          value: 92,
          percent: 90,
        },
        {
          name: '微信',
          value: 87,
          percent: 70,
        },
        {
          name: '贴吧',
          value: 63,
          percent: 66,
        },
        {
          name: '今日头条',
          value: 18,
          percent: 62,
        },
        {
          name: '天天快报',
          value: 21,
          percent: 60,
        },
      ],
    };
  },
  mounted() {
    this.setValue(this.list);
  },
  methods: {
    setValue(data) {
      this.list = data.map((d) => ({ ...d, percent: 0 }));
      setTimeout(() => {
        this.list = data;
      }, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.bar {
  // outline: 1px solid red;
  margin-top: 2.4rem;
  .bar-item {
    // outline: 1px solid red;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 3.8rem;
    .bar-bg {
      background: rgba(158, 158, 158, 0.2);
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      left: 10%;
      right: 10%;
      height: 2.6rem;
      .value {
        background: linear-gradient(90deg, #5c6fff37 10%, #5C6FFF 100%);
        height: 100%;
        line-height: 2.6rem;
        text-align: right;
        padding: 0 1rem;
        font-size: 2.6rem;
        font-family: DIN;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
        position: relative;
        min-width: 20%;
        transition: width 1s;
        &::after {
          position: absolute;
          top: 0;
          content: ' ';
          width: 1rem;
          height: 100%;
          right: 0;
          background: linear-gradient(90deg, rgba(92, 111, 255, 1) 10%, #fff);
        }
      }
    }
    .name {
      font-size: 2.6rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #FFF;
      opacity: 0.8;
    }
    .percent {
      font-size: 3.6rem;
      font-family: DIN;
      font-weight: 400;
      color: #FFF;
      opacity: 0.8;
      .unit {
        font-size: 2.4rem;
        font-family: Source Han Sans SC;
        font-weight: 500;
      }
    }
  }
}
</style>
