<template>
  <div class="indicator">
    <div class="item">
      <span class="name" style="color: #93ECF4;">交通指数</span>
      <span class="data">
        <span class="value">
          {{ traffic }}
        </span>
        <span class="time" style="color: #93ECF4;">截至：{{ date }}</span>
      </span>
    </div>
    <div class="item">
      <span class="name" style="color: #B3B9F9">拥堵指数</span>
      <span class="data">
        <span class="value">
          {{ crowd }}
        </span>
        <span class="time" style="color: #B3B9F9">截至：{{ date }}</span>
      </span>
    </div>
  </div>
</template>
<script>
import trafficAPI from '@/api/Overview/Traffic';

export default {
  data() {
    return {
      traffic: 95,
      crowd: 23,
      date: '2021.03',
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await trafficAPI.trafficeInfo();
      // console.log(data);
      this.traffic = data?.[0]?.jtzs;
      this.crowd = data?.[0]?.ydzs;
      this.date = data?.[0]?.sjd;
    },
  },
};
</script>
<style lang="scss" scoped>
.indicator {
  height: 45rem;
  border: 1px solid transparent;
  .item {
    height: 15.8rem;
    color: #fff;
    background: linear-gradient(180deg, rgba(22, 40, 47, 0.2), rgba(16, 31, 37, 0.2));
    border: 1px solid rgba(168, 247, 237, 0.05);
    border-radius: 1rem;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    &:nth-child(1) {
      .name {
        background: url('./icon/traffic.png') no-repeat;
        background-position: center center;
      }
    }
    &:nth-child(2) {
      .name {
        background: url('./icon/crowd.png') no-repeat;
        background-position: center center;
      }
    }
    .name {
      width: 31rem;
      height: 12.5rem;
      background: linear-gradient(180deg, rgba(22, 40, 47, 0.5), rgba(16, 31, 37, 0.5));
      border: 1px solid rgba(168, 247, 237, 0.1);
      border-radius: 1rem;
      font-size: 2.4rem;
      font-family: SourceHanSansCN;
      margin-left: 1.5rem;
      text-align: center;
      line-height: 17rem;
    }
    .data {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 18rem;
      .value {
        font-size: 5.4rem;
        font-family: DINPro;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 5rem;
        .unit {
          font-size: 0.4em;
          font-family: Source Han Sans CN;
          font-weight: bold;
        }
      }
      .time {
        font-size: 2.1rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        // line-height: 0.2rem;
      }
    }
  }
}
</style>
