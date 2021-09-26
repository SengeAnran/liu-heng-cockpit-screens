<template>
  <div class="left">
    <div>
      <div>
        <BaseTitle title="办理量信息" :width="800" />
        <banli></banli>
      </div>
      <div style="margin-top: 65px">
        <BaseTitle title="办理量信息" :width="800" />
        <Banlixinxi></Banlixinxi>
      </div>
    </div>
    <div>
      <div>
        <BaseTitle title="办理量趋势" :width="800" />
        <banliqushi></banliqushi>
      </div>
      <div style="margin-top: 30px">
        <BaseTitle title="服务总满意度" :width="800" />
        <Zhanbifenxi></Zhanbifenxi>
      </div>
    </div>
  </div>
</template>

<script>
import Banli from './LeftNewItem/banli';
import Banliqushi from './LeftNewItem/banliqushi';
import Zhanbifenxi from './LeftNewItem/zhanbifenxi';
import Banlixinxi from './LeftNewItem/banlixinxi';
// import {
//   getRealtimeBooking,
//   getAppointmentAnalysis,
//   getBookingTrend,
//   getRealtimeReservationDetails,
// } from '@/api/Strength/GovernServe/api';
export default {
  name: 'ProjectManageLeft',
  components: { Banli, Banliqushi, Zhanbifenxi, Banlixinxi },
  data() {
    return {
      data: {
        content: 1000,
        // unit: '人',
      },
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
        round: 1,
        decimal: '.',
        // 整数 分割器
        separator: ',',
      },
      config: {
        content: {
          fontSize: '5rem',
          fontFamily: 'DINPro',
          color: '#6AD1F7',
        },
        unit: {
          fontSize: '2rem',
          color: '#6AD1F7',
        },
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
$main-font: 24px;
.font-color {
  text-decoration: none;
  background-image: linear-gradient(to bottom, #fff 0%, #26c4bf 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.left {
  position: absolute;
  display: flex;
  top: 200px;
  left: 200px;
  width: 1650px;
  height: 1027px;
  font-size: 24px;
  color: #fff;
  z-index: 999;
}
</style>
