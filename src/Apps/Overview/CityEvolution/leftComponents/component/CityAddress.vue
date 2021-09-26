<template>
  <div class="area_location">
    <BaseTitle title="市域面积分布情况" :width="720" />
    <div class="item_wrapper">
      <div class="item">
        <img class="img" src="../../images/city/city-quanzhen.png" />
        <div class="title">全镇面积</div>
        <div class="count_wrapper">
          <digital :loop="loop" :endNum="sqmj.qzmj || 0" :data="data" :config="config"></digital>
        </div>
      </div>
      <div class="item">
        <img class="img" src="../../images/city/city-ludi.png" />
        <div class="title">陆地面积</div>
        <div class="count_wrapper">
          <digital :loop="loop" :endNum="sqmj.xzsqmj || 0" :data="data" :config="config1"></digital>
        </div>
      </div>
      <div class="item">
        <img class="img" src="../../images/city/city-renkou.png" />
        <div class="title">人口密度</div>
        <div class="count_wrapper">
          <digital :loop="loop" :endNum="sqmj.xzsqmj || 0" :data="data1" :config="config2"></digital>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from '../../components/BaseTitle';
import { getAreaDistribution } from '@/api/Overview/CityEvolution/api';

// import Digital from '../../../../../components/digital/Digital.vue';
export default {
  name: 'CityEvolution',
  components: {
    BaseTitle,
  },
  data() {
    return {
      sqmj: {},
      data: {
        content: 1000,
        unit: 'k㎡',
      },
      data1: {
        content: 1000,
        unit: 'k㎡/人',
      },
      loop: {
        // 是否开启数值循环
        loop1: true,
        // 多久循环一次
        time: 10000,
        // 循环几次
        count: 99999,
        // 精确的小数位数
        decimals: 2,
        // 是否开启四舍五入 类型(0是不做什么取值操作,1去掉小数部分,2.向上取整,3.下取整,4.四舍五入)
        round: 1,
        decimal: '.',
        // 整数 分割器
        separator: ',',
      },
      config: {
        content: {
          fontSize: '6rem',
          fontFamily: 'DINPro',
          color: '#6AD1F7',
        },
        unit: { fontSize: '2rem' },
      },
      config1: {
        content: {
          fontSize: '6rem',
          fontFamily: 'DINPro',
          color: '#47D6AA',
        },
        unit: { fontSize: '2rem' },
      },
      config2: {
        content: {
          fontSize: '6rem',
          fontFamily: 'DINPro',
          color: '#DF7B7A',
        },
        unit: { fontSize: '2rem', color: '#DF7B7A' },
      },
    };
  },
  mounted() {
    this.getAreaInfo();
  },
  methods: {
    getAreaInfo() {
      getAreaDistribution()
        .request()
        .then((res) => {
          this.sqmj = res;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.area_location {
  position: absolute;
  width: 840px;
  height: 550px;
  top: 0;
  left: 0;
  padding-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  .item_wrapper {
    margin-top: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .item {
      height: 413px;
      width: 250px;
      background: url('../../images/item_bg.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      .img {
        position: absolute;
        top: 75px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      .title {
        position: absolute;
        top: 142px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 120px;
        font-size: 30px;
        text-align: center;
        color: white;
      }
      .count_wrapper {
        position: absolute;
        bottom: 40px;
        height: 60px;
        line-height: 60px;
        font-size: 60px;
        font-weight: bolder;
        width: 250px;
        color: #66ccff;
        text-align: center;
        padding-left: 5px;
        font-family: DIN;
        .unit {
          font-size: 30px;
          color: #59dbe6;
          position: relative;
          right: 0px;
          top: -2px;
        }
      }
      .children {
        color: #31eabc;
        .unit {
          color: #31eabc;
        }
      }
      .dead {
        color: #ed7f64;
        .unit {
          color: #ed7f64;
        }
      }
    }
  }
}
</style>
