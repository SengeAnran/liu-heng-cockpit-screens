<template>
  <div class="table-wrapper" ref="chartEle">
    <div class="t-header">
      <div class="tr">
        <div class="item">车牌</div>
        <div class="item">时间</div>
        <div class="item">路段</div>
        <div class="item">监控</div>
        <div class="item">分析情况</div>
      </div>
    </div>
    <div class="t-body">
      <div class="tr" v-for="item in list" :key="item.name">
        <div class="item">{{ item.cp }}</div>
        <div class="item">{{ item.sj }}</div>
        <div class="item">{{ item.ccld }}</div>
        <div class="item">{{ item.dwbh }}</div>
        <div class="item">{{ item.fxqk }}</div>
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
        // { cp: '浙A22222', sj: '2021.03.07', ccld: '六横', dwbh: 'NO.656', fxqk: '预警' },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await trafficAPI.illegalInfo();
      console.log(data);
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
      width: 16%;
    }
    .item:nth-child(4) {
      width: 18%;
    }
    .item:nth-child(5) {
      width: 15%;
    }
  }
  .t-body {
    height: 32rem;
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
      width: 16%;
    }
    .item:nth-child(4) {
      width: 18%;
    }
    .item:nth-child(5) {
      width: 15%;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #ED7F64;
    }
  }
}
</style>
