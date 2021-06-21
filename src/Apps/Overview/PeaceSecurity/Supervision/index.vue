<template>
  <div class="supervision">
    <BaseTitle title="监察执法" />
    <div class="show-box">
      <div
        v-for="(item, index) of list"
        :key="index">
        <div class="year">
          <CountUp :num="item.year" />
          <div>全年</div>
        </div>
        <div class="month">
          <CountUp :num="item.month" />
          <div>本月</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLawOper } from '@/api/Overview/PeaceSecurity/api';
export default {
  name: 'Supervision',
  data() {
    return {
      list: [
        {
          name: '执法次数',
          year: 0,
          month: 0,
        },
        {
          name: '出动人次',
          year: 0,
          month: 0,
        },
        {
          name: '建成企业',
          year: 0,
          month: 0,
        },
        {
          name: '完成笔录',
          year: 0,
          month: 0,
        },
      ],
    };
  },
  components: {
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getLawOper().request().then((json) => {
        this.list.forEach((item) => {
          json.forEach((item1) => {
            if (item.name === item1.zflx) {
              item.year = item1.qncs || 0;
              item.month = item1.bycs || 0;
            }
          });
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.supervision {
  position: absolute;
  left: 157px;
  top: 262px;
  width: 835px;
  height: 535px;
  .show-box {
    position: absolute;
    top: 100px;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    width: 784px;
    height: 326px;
    // background-color: rgba(0, 255, 255, 0.2);
    >div {
      width: 50%;
      height: 50%;
      color: #fff;
      >div {
        display: inline-block;
        margin-top: 35px;
        .count-up {
          font-size: 48px;
        }
        >div {
          font-size: 21px;
          color: rgba(255, 255, 255, 0.6);
        }
      }
      .year {
        margin-left: 190px;
      }
      .month {
        margin-left: 20px;
      }
      &:nth-child(1) {
        background: url('./img/bg-1.png') no-repeat;
      }
      &:nth-child(2) {
        background: url('./img/bg-2.png') no-repeat;
      }
      &:nth-child(3) {
        background: url('./img/bg-3.png') no-repeat;
      }
      &:nth-child(4) {
        background: url('./img/bg-4.png') no-repeat;
      }
    }
  }
}
</style>
