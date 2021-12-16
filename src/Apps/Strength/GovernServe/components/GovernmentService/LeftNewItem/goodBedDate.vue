<template>
<div class="content">
  <div class="item" v-for="(item, index) in dataList" :key="index">
    <div class="item-top">
      <img :src="item.imgUrl" :alt="item.name"/>
      <div class="item-name">{{ item.name }}</div>
    </div>
    <div class="item-bottom" :style="{color: item.color}">
      <digital :loop="loop" :endNum="item.value || 0" :data="item.data" :config="item.config"></digital>
<!--      {{ item.value }}-->
      <span v-if="item.unit">{{item.unit}}</span>
    </div>
  </div>
</div>
</template>

<script>
import { getGoodReview } from '@/api/Strength/GovernServe/api';
export default {
  name: 'goodBedDate',
  data() {
    return {
      dataList: [
        {
          name: '评价总数',
          value: 1000,
          imgUrl: require('./img/icon_pj.png'),
          color: '#5E98E0',
          unit: '',
          config: {
            content: {
              fontSize: '5rem',
              fontFamily: 'DINPro',
              color: '5E98E0',
            },
            unit: {
              fontSize: '2rem',
              color: '5E98E0',
            },
          },
          data: {
            content: 1000,
            // unit: '人',
          },
        },
        {
          name: '好评数量',
          value: 1000,
          imgUrl: require('./img/icon_hp.png'),
          color: '#D9B177',
          unit: '',
          config: {
            content: {
              fontSize: '5rem',
              fontFamily: 'DINPro',
              color: '#DFB966',
            },
            unit: {
              fontSize: '2rem',
              color: '#DFB966',
            },
          },
          data: {
            content: 1000,
            // unit: '人',
          },
        },
        {
          name: '好评率',
          value: 99.99,
          imgUrl: require('./img/icon_qs.png'),
          color: '#89E6E3',
          // unit: '%',
          config: {
            content: {
              fontSize: '5rem',
              fontFamily: 'DINPro',
              color: '#89E6E3',
            },
            unit: {
              fontSize: '2rem',
              color: '#89E6E3',
            },
          },
          data: {
            content: 1000,
            unit: '%',
          },
        },
      ],
      loop: {
        // 是否开启数值循环
        loop1: true,
        // 多久循环一次
        time: 10000,
        // 循环几次
        count: 99999,
        // 精确的小数位数
        decimals: 0,
        // 是否开启四舍五入 类型(0是不做什么取值操作,1去掉小数部分,2.向上取整,3.下取整,4.四舍五入)
        round: 0,
        decimal: '.',
        // 整数 分割器
        separator: ',',
      },
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getGoodReview()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.dataList[0].value = json.pjzs;
          this.dataList[1].value = json.hpsl;
          this.dataList[2].value = (json.hpl * 100).toFixed(2);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 16px;
  width: 786px;
  display: flex;
  justify-content: space-between;
  .item {
    //box-sizing: border-box;
    width: 249px;
    height: 365px;
    background: url("./img/sj_bg2.png") 100% 100% no-repeat;
    display: flex;
    flex-direction: column;
    //margin: 19px;
    .item-top {
      text-align: center;
      flex: 1.2;
      img {
        margin-top: 60px;
      }
      .item-name {
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #FFFFFF;
      }
    }
    .item-bottom {
      padding-top: 60px;
      text-align: center;
      flex: 1;
      font-size: 56px;
      font-family: DINPro;
      font-weight: 500;
      span {
        font-size: 36px;
      }
    }
  }
}

</style>
