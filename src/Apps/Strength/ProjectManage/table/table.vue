<template>
  <div>
    <div class="table">
      <div>
        <div class="table-digital">
          <div style="margin-top: 30px">
            <span class="title"> 项目总数（个） </span>
            <digital :loop="loop" :endNum="12452 || 0" :data="data" :config="config"></digital>
          </div>
        </div>
        <div class="table-digital">
          <div style="margin-top: 30px">
            <span class="title"> 项目总数（亿） </span>
            <digital :loop="loop" :endNum="321 || 0" :data="data" :config="config"></digital>
          </div>
        </div>
      </div>
      <div>
        <div class="table-title">
          <div v-for="item in list" :key="item" class="title-item">{{ item }}</div>
        </div>
        <div class="table-body">
          <div class="table-body-item" v-for="item in list1" :key="item">
            <div>{{ item.name }}</div>
            <div>{{ item.suoshu }}</div>
            <div>{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
          fontSize: '4rem',
          fontFamily: 'DINPro',
          color: '#ffffff',
        },
        unit: {
          fontSize: '2rem',
          color: '#6AD1F7',
        },
      },
      list: ['项目名称', '牵头单位', '累计完成投资额'],
      list1: [
        {
          name: '六横智慧海项目',
          suoshu: '六横管委会',
          value: '7000万元',
        },

        {
          name: '六横智慧海项目',
          suoshu: '六横管委会',
          value: '7000万元',
        },
        {
          name: '六横智慧海项目',
          suoshu: '六横管委会',
          value: '7000万元',
        },
        {
          name: '六横智慧海项目',
          suoshu: '六横管委会',
          value: '7000万元',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: flex;
}
.table-digital {
  width: 200px;
  height: 150px;
  background: linear-gradient(180deg, rgba(22, 40, 47, 0.8), rgba(16, 31, 37, 0.8));
  border: 1px solid rgba(168, 247, 237, 0.2);
  opacity: 0.65;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
  .title {
    font-size: 18px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: #78d2ff;
  }
}
.table-title {
  width: 583px;
  height: 75px;
  border: 1px solid;
  border-image: linear-gradient(0deg, #ffffff) 10 10;
  background: linear-gradient(0deg, #5d5d5d 0%, #535353 99%);
  opacity: 0.8;
  border-radius: 14px;
  margin-left: 40px;
  display: flex;
  background: url('../images/list-mainpro-bg.png') no-repeat 100% 100%;
  .title-item {
    width: 180px;
    text-align: center;
    line-height: 75px;
  }
}
.table-body {
  height: 270px;
  //   border: 1px solid;
  margin-left: 30px;
  border-radius: 14px;
  margin-left: 40px;
  overflow: auto;
  .table-body-item {
    display: flex;
    background: url('../images/list-mainpro-bg.png') no-repeat 100% 100%;
    div {
      width: 180px;
      text-align: center;
      line-height: 75px;
      color: #59dbe6;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .table-body-item :hover {
    cursor: pointer;
  }
}
</style>