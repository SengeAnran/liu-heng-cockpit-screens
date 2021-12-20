<template>
  <div class="content">
    <div class="content-top">
      <div class="box-left">
        <img src="../img/zbqk.png" alt="">
<!--        <div class="">招标情况</div>-->
      </div>
      <div class="box-right">
        <div class="item item-left">
          <div class="item-top">
            <span class="number">3548</span>
            <span class="unit">个</span>
          </div>
          <div class="item-name">应招必招项目</div>
        </div>
        <div class="line"></div>
        <div class="item item-right">
          <div class="item-top">
            <span class="number">780</span>
            <span class="unit">个</span>
          </div>
          <div class="item-name">公开招标项目</div>
        </div>
      </div>
    </div>
    <div class="content-bottom">
      <div class="box-top">
        <img src="../img/icon_66.png" alt="">
        <span class="title">公开招标项目占比</span>
      </div>
      <div class="box-bottom">
        <div class="left">
          <div class="tip" :style="{left: (left) + '%' }">
            <div class="value">{{ data.nxmsl }}</div>
            <div class="icon">
            </div>
          </div>
          <div class="percent-box">
            <div class="percent" :style="{left: '-' + (100-left) + '%' }"></div>
          </div>
        </div>
        <div class="right">{{data.rate}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAchievementRate } from '@/api/Strength/GovernServe/api';
export default {
  data() {
    return {
      data: {},
      left: 0,
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getAchievementRate()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.data = json;
          this.left = parseFloat(json.rate);

          console.log(this.left);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 21px;
  .content-top {
    width: 800px;
    height: 155px;
    background: linear-gradient(90deg, rgba(129, 157, 186, 0) 15%,rgba(129, 157, 186, 0.4),rgba(129, 157, 186, 0));
    display: flex;
    margin-bottom: 19px;
    .box-left {
      margin: 18px;
    }
    .box-right {
      width: 692px;
      display: flex;
      justify-content: space-around;
      .item {
        text-align: center;
        margin-top: 30px;
        .item-top {
          font-size: 48px;
          font-family: DIN Medium;
          font-weight: 400;
          .unit {
            margin-left: 8px;
            font-size: 22px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #FFFFFF !important;
            line-height: 22px;
          }
        }
        .item-name {
          font-size: 23px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 50px;
          opacity: 0.5;
        }
      }
      .line {
        width: 1px;
        height: 56px;
        border: 1px solid #FFFFFF;
        margin-top: 60px;
      }
      .item-left {
        .item-top {
          .number {
            text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.24);
            background: linear-gradient(180deg, #FFFFFF 0%, #5FA4F7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

        }
      }
      .item-right {
        .item-top {
          .number {
            text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.24);
            background: linear-gradient(180deg, #FFFFFF 0%, #F3AC77 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
  }
  .content-bottom {
    width: 803px;
    height: 220px;
    background: url("../img/zb_bg.png") 100% 100% no-repeat;
    .box-top {
      //box-sizing: border-box;
      padding-top: 39px;
      margin-left: 45px;
      display: flex;
      img {
        margin-top: 10px;
        margin-right: 15px;
        width: 27px;
        height: 27px;
      }
      .title {
        font-size: 28px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #F0F5F7;
      }
    }
    .box-bottom {
      display: flex;
      margin-top: 43px;
      margin-left: 39px;
      .left {
        position: relative;
        width: 581px;
        height: 44px;
        border: 1px solid;
        border-color: rgba(255, 255, 255, 0.29);
        background: url("../img/zx_bg.png") 100% 100% no-repeat;
        .tip {
          position: absolute;
          top: -50px;
          text-align: center;
          .value {
            font-size: 24px;
            font-family: DINPro;
            font-weight: 500;
            color: #F3B37A;
          }
          .icon {
            margin-left: auto;
            margin-right: auto;
            width: 13px;
            height: 9px;
            background: url("../img/down.png") 100% 100% no-repeat;

            img {
              width: 13px;
              height: 9px;
              overflow: hidden;
              object-fit: fill;
            }
          }
        }
        .percent-box {
          margin-top: 14px;
          margin-left: 17px;
          position: relative;
          overflow: hidden;
          width: 540px;
          height: 14px;
          .percent {
            position: absolute;
            width: 540px;
            height: 14px;
            background: url("../img/zx.png") 100% 100% no-repeat;
          }
        }
      }
      .right {
        font-size: 48px;
        font-family: DIN Alternate;
        font-weight: bold;
        color: #EFA67E;
        margin-left: 29px;
      }
    }
  }
}
</style>
