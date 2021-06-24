<template>
  <div class="PierSituation">
    <div :key="index" v-for="(item,index) in dataList">
      <div class="icon-wrap">
        <p>{{item.name}}</p>
        <p>
          <ICountUp :endVal="item.num" />
          <span>万吨</span>
        </p>
      </div>
      <div class="num-wrap">
        <div :class="{decrease:item.type===1}">同比{{` ${item.type===0?'增加':'减少'}${item.percent}%`}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from '../components/ICountUp';
import { terminalHandlingSituation } from '@/api/Vitality/PortEconomy/api';
export default {
  data() {
    return {
      dataList: [
        {
          name: '货物吞吐量',
          num: 0,
          type: 0,
          percent: 0,
        },
        {
          name: '集装箱吞吐量',
          num: 0,
          type: 1,
          percent: 0,
        },
      ],
    };
  },
  components: {
    ICountUp,
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      terminalHandlingSituation().request().then((json) => {
        const { hwttl, jzxttl, qnhwttl, qnjzxttl } = json[0];
        this.dataList[0].num = hwttl;
        this.dataList[0].type = hwttl > qnhwttl ? 0 : 1;
        this.dataList[0].percent = (Math.abs(hwttl - qnhwttl) / qnhwttl * 100).toFixed(2);
        this.dataList[1].num = jzxttl;
        this.dataList[1].type = jzxttl > qnjzxttl ? 0 : 1;
        this.dataList[1].percent = (Math.abs(jzxttl - qnjzxttl) / qnjzxttl * 100).toFixed(2);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.PierSituation {
  flex-direction: row !important;
  justify-content: space-between;
  & > div {
    box-sizing: border-box;
    width: 380px;
    height: 100%;
    background: linear-gradient(180deg, rgba(22, 40, 47, 0.3), rgba(16, 31, 37, 0.3));
    border: 1px solid rgba(168, 247, 237, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 16px 16px 0;
    &:nth-child(1) {
      .icon-wrap {
        background: url('../images/icon_0.png') no-repeat center top 83px / 79px 78px;
        p {
          &:nth-child(2) {
            font-weight: bold;
            color: #66ccff;
            span {
              font-weight: normal;
              color: #59dbe6;
            }
          }
        }
      }
    }
    &:nth-child(2) {
      .icon-wrap {
        background: url('../images/icon_1.png') no-repeat center top 83px / 79px 78px;
        p {
          &:nth-child(2) {
            font-weight: bold;
            color: #31eabc;
            span {
              font-weight: normal;
            }
          }
        }
      }
    }
    .icon-wrap {
      height: 305px;
      min-height: 305px;
      background: linear-gradient(180deg, rgba(22, 40, 47, 0.3), rgba(16, 31, 37, 0.3));
      border: 1px solid rgba(168, 247, 237, 0.1);
      border-radius: 10px;
      padding-top: 144px;
      box-sizing: border-box;
      p {
        margin: 0;
        font-size: 30px;
        line-height: 30px;
        color: #fff;
        text-align: center;
        display: flex;
        justify-content: center;
        &:nth-child(2) {
          margin-top: 40px;
          span {
            font-size: 26px;
            line-height: 42px;
            margin-left: 7px;
          }
        }
      }
    }
    .num-wrap {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      line-height: 24px;
      & > div {
        color: #ff7e64;
        &.decrease {
          color: #59dbe6;
        }
      }
    }
  }
}
</style>
