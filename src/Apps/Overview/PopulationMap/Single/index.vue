<template>
  <div class="single">
    <BaseTitle title="自然增长情况" />
    <div class="show-box">
      <div v-for="(item, index) of list" :key="index" class="digital">
        <digital
          :loop="loop"
          :endNum="item.value || 0"
          :data="index === 0 ? data : data1"
          :config="index === 0 ? config : config"
        ></digital>
      </div>
    </div>
  </div>
</template>
<script>
import { getNaturalGrowth } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'Single',
  data() {
    return {
      list: [
        {
          name: '单身男性',
          value: 0,
        },
        {
          name: '单身女性',
          value: 0,
        },
      ],
      data: {
        content: 1000,
        unit: '人',
      },
      data1: {
        content: 1000,
        unit: '%',
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
    };
  },
  components: {},
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getNaturalGrowth()
        .request()
        .then((json) => {
          this.list[0].value = json.zrzzrks || 0;
          this.list[1].value = +(json.zrzzl * 100).toFixed(2) || 0;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.single {
  position: absolute;
  right: 125px;
  top: 162px;
  width: 835px;
  height: 585px;
  .show-box {
    position: absolute;
    left: 0;
    top: 100px;
    width: 800px;
    height: 420px;
    > div {
      width: 800px;
      height: 198px;
      color: #fff;

      &:first-child {
        background: url('./img/male.png');
      }
      &:last-child {
        margin-top: 17px;
        background: url('./img/female.png');
      }
    }
    .digital {
      border: 1px saddlebrown solid;
      text-align: center;
      line-height: 180px;
    }
  }
}
</style>
