<template>
  <div class="box">
    <div class="box-item" v-for="(item, index) in dataList" :key="index">
      <div class="box-left">
        <img :src="item.imgUrl" :alt="item.name">
        <div class="item-name">{{ item.name }}</div>
      </div>
      <div class="box-right" :style="{color: item.valueColor}">
        <div>
          <digital :loop="index === 0 ? loop: loop2" :endNum="item.value || 0" :data="item.data" :config="item.config"></digital>
<!--          {{ item.value }}-->
<!--          <span>{{ item.unit }}</span>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default:() => {},
    }
  },
  data() {
    return {
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
      loop2: {
        // 是否开启数值循环
        loop1: true,
        // 多久循环一次
        time: 10000,
        // 循环几次
        count: 99999,
        // 精确的小数位数
        decimals: 2,
        // 是否开启四舍五入 类型(0是不做什么取值操作,1去掉小数部分,2.向上取整,3.下取整,4.四舍五入)
        round: 0,
        decimal: '.',
        // 整数 分割器
        separator: ',',
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  margin-top: 16px;
  .box-item {
    margin-bottom: 22px;
    width: 800px;
    height: 189px;
    background: url("../img/sj_bg.png") 100% 100% no-repeat;
    display: flex;
    .box-left {
      width: 268px;
      height: 157px;
      margin: 16px;
      text-align: center;
      img {
        margin-top: 20px;
      }
      .item-name {
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #FFFFFF;
      }
    }
    .box-right {
      width: 500px;
      font-size: 64px;
      font-family: DINPro;
      font-weight: 500;
      text-align: center;
      display: flex;
      justify-content: space-around;
      line-height: 175px;
      //text-justify:  ;
      span {
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #FFFFFF;
        margin-left: 17px;
      }

    }
  }
}

</style>
