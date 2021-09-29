<template>
  <div>
    <div class="banli">
      <div class="flex">
        <div class="item">
          <img src="" alt="" />
          <div class="name">当前等待人数</div>
        </div>
        <div class="item1">
          <digital :loop="loop" :endNum="11 || 0" :data="data" :config="config"></digital>
        </div>
        <div class="item">
          <img src="" alt="" />
          <div class="name1">今日办理量</div>
        </div>
        <div class="item1">
          <digital :loop="loop" :endNum="51 || 0" :data="data" :config="config1"></digital>
        </div>
      </div>
      <div class="flex">
        <div class="item">
          <img src="" alt="" />
          <div class="name2">本周办理量</div>
        </div>
        <div class="item1">
          <digital :loop="loop" :endNum="409 || 0" :data="data" :config="config2"></digital>
        </div>
        <div class="item">
          <img src="" alt="" />
          <div class="name3">月度办理量</div>
        </div>
        <div class="item1">
          <digital :loop="loop" :endNum="2653 || 0" :data="data" :config="config3"></digital>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
      config1: {
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
      config2: {
        content: {
          fontSize: '5rem',
          fontFamily: 'DINPro',
          color: '#6EDF93',
        },
        unit: {
          fontSize: '2rem',
          color: '#6EDF93',
        },
      },
      config3: {
        content: {
          fontSize: '5rem',
          fontFamily: 'DINPro',
          color: '#99FFFF',
        },
        unit: {
          fontSize: '2rem',
          color: '#99FFFF',
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.banli {
  width: 799.7px;
  //   border: 1px saddlebrown solid;
}
.item {
  width: 188px;
  height: 178px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #443a3a 100%);
  border-radius: 8px;
  margin-top: 30px;
  .name {
    margin-top: 30px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
  }
  .name1 {
    margin-top: 30px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #dfb966;
    text-align: center;
  }
  .name2 {
    margin-top: 30px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #6edf93;
    text-align: center;
  }
  .name3 {
    margin-top: 30px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #dfb966;
    text-align: center;
  }
}
.item1 {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #443a3a 100%);
  width: 188px;
  height: 178px;
  border-radius: 8px;
  line-height: 178px;
  text-align: center;
  margin-top: 30px;
  .name {
    margin-top: 30px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #99ffff;
    text-align: center;
  }
}
</style>