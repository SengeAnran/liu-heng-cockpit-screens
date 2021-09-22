<template>
  <div class="school_mange">
    <div class="wrapper">
      <div v-for="(item, index) in list" :key="index">
        <div class="title">
          {{ item.name }}
        </div>
        <div class="title_wrapper">
          <div class="first_count" v-for="(ite, ind) in item.arr" :key="ind">
            <div class="count">
              <!-- <CountUp :num="ite.sl" /> -->
              <digital :loop="loop" :endNum="ite.sl || 0" :data="data" :config="config"></digital>
            </div>
            <div class="count_title">{{ ite.dx }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSchoolStatistics } from '@/api/Overview/Education/api';
export default {
  name: 'LeftComponents',
  components: {},
  data() {
    return {
      list: [],
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
          fontSize: '6rem',
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
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getSchoolStatistics()
        .request()
        .then((res) => {
          const kindergartenObj = {
            name: '幼儿园',
            arr: [],
          };
          const primaryObj = {
            name: '小学',
            arr: [],
          };
          const juniorSchoolObj = {
            name: '初中',
            arr: [],
          };
          const heightSchoolObj = {
            name: '高中',
            arr: [],
          };
          res.forEach((item) => {
            if (item.xj === '幼儿园') {
              kindergartenObj.arr.push(item);
            } else if (item.xj === '小学') {
              primaryObj.arr.push(item);
            } else if (item.xj === '初中') {
              juniorSchoolObj.arr.push(item);
            } else if (item.xj === '高中') {
              heightSchoolObj.arr.push(item);
            }
          });
          this.list = [kindergartenObj, primaryObj, juniorSchoolObj, heightSchoolObj];
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.school_mange {
  position: absolute;
  width: 1700px;
  height: 190px;
  position: absolute;
  top: 80px;
  left: 0;
  padding: 0 35px;
  // background: red;
  box-sizing: border-box;
  .wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      width: 360px;
      height: 150px;
      display: flex;
      .title {
        flex: 1;
        height: 100%;
        font-size: 26px;
        text-align: center;
        line-height: 150px;
        color: white;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.1));
      }
      .title_wrapper {
        flex: 2;
        height: 100%;
        display: flex;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.1));
        .first_count {
          flex: 1;
          .count {
            height: 120px;
            line-height: 120px;
            font-size: 45px;
            text-align: center;
            color: white;
          }
          .count_title {
            font-size: 24px;
            text-align: center;
            color: white;
            position: relative;
            top: -30px;
          }
        }
      }
    }
  }
}
</style>
