<template>
  <div class="table-wrapper" ref="chartEle">
    <div class="t-header">
      <div class="tr">
        <div class="item">时间</div>
        <div class="item">班次</div>
        <div class="item">客运量（人次）</div>
        <div class="item">里程（公里）</div>
      </div>
    </div>
    <div class="t-body">
      <div class="tr" v-for="item in list" :key="item.name">
        <div class="item">{{ item.sj }}</div>
        <div class="item">{{ item.bc }}</div>
        <div class="item">{{ item.kyl }}</div>
        <div class="item">{{ item.lc }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import trafficAPI from '@/api/Overview/Traffic';

export default {
  data() {
    return {
      list: [
        { sj: '2020', bc: 139358, kyl: 724892, lc: 1568661 },
        { sj: '2021.01', bc: 11470, kyl: 52696, lc: 116366 },
        { sj: '2021.02', bc: 12012, kyl: 37217, lc: 104626 },
        { sj: '2021.03', bc: 13299, kyl: 51686, lc: 131484 },
        { sj: '2021.04', bc: 12870, kyl: 80265, lc: 133066 },
        { sj: '2021.05', bc: 13299, kyl: 75320, lc: 132348 },
        { sj: '2021.06', bc: 9438, kyl: 24720, lc: 96025 },
      ],
    };
  },
  mounted() {
    // this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await trafficAPI.illegalInfo();
      // console.log(data);
      this.list = data;
      // this.traffic = data?.[0]?.jtzs;
      // this.crowd = data?.[0]?.ydzs;
      // this.date = data?.[0]?.sjd;
    },
  },
};
</script>
<style lang="scss" scoped>
.table-wrapper {
  height: 42rem;
  color: #fff;
  margin-top: 2rem;
  .tr {
    display: flex;
    align-items: center;
    font-size: 2.4rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #FFFFFF;
    height: 6.5rem;
    background: url('./bg.png') no-repeat;
    background-size: 100% 100%;
    margin-bottom: 1.5rem;
    .item {
      box-sizing: border-box;
      padding-left: 2rem;
    }
    .item:nth-child(1) {
      width: 23%;
    }
    .item:nth-child(2) {
      width: 24%;
    }
    .item:nth-child(3) {
      width: 26%;
    }
    .item:nth-child(4) {
      width: 27%;
    }
  }
  .t-body {
    height: 31rem;
    overflow: auto;
    .item {
      flex: none;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #AECACA;
    }
    .item:nth-child(1) {
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      font-style: italic;
      color: #59DBE6;
    }
    .item:nth-child(2) {
      width: 24%;
    }
    .item:nth-child(3) {
      width: 26%;
    }
    .item:nth-child(4) {
      width: 27%;
    }
    // .item:nth-child(5) {
    //   width: 15%;
    //   font-size: 24px;
    //   font-family: Source Han Sans CN;
    //   font-weight: 500;
    //   color: #ED7F64;
    // }
  }
}
</style>
