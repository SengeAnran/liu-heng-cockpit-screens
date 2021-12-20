<template>
  <div>
    <div class="table">
      <div>
        <div class="table-title">
          <div v-for="item in list" :key="item" class="title-item">{{ item }}</div>
        </div>
        <div class="table-body">
          <div class="table-body-item" v-for="(item, index) in list1" :key="item">
            <div>{{ item.project }}</div>
            <div>{{ item.type }}</div>
            <div>{{ item.company }}</div>
            <div>{{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAchievementList } from '@/api/Strength/GovernServe/api';
export default {
  data() {
    return {
      list: ['项目名称', '交易方式', '建设单位', '中标价 (万元)'],
      list1: [
        {
          project: '六横大岙客运码头场地改造工程候船楼室内装修工程',
          type: '公开招标',
          company: '舟山水六横港城建设开发有限公司',
          price: '2206.86',
        },
        {
          project: '2021年郭巨码头疏浚工程',
          type: '公开招标',
          company: '舟山水六横港城建设开发有限公司',
          price: '2206.86',
        },
        {
          project: '佛渡岛路灯建设工程',
          type: '公开招标',
          company: '舟山水六横港城建设开发有限公司',
          price: '1061.4225',
        },
        {
          project: '六横大岙客运码头场地改造工程候船楼室内装修工程',
          type: '公开招标',
          company: '舟山水六横港城建设开发有限公司',
          price: '2206.86',
        },
        {
          project: '六横大岙客运码头场地改造工程候船楼室内装修工程',
          type: '公开招标',
          company: '舟山水六横港城建设开发有限公司',
          price: '2206.86',
        },
        {
          project: '六横大岙客运码头场地改造工程候船楼室内装修工程',
          type: '公开招标',
          company: '六横镇人民政府7',
          price: '2206.86',
        },
        {
          project: '六横大岙客运码头场地改造工程候船楼室内装修工程',
          type: '交通管理',
          company: '舟山水六横港城建设开发有限公司',
          price: '2206.86',
        },
        {
          project: '六横大岙客运码头场地改造工程候船楼室内装修工程',
          type: '公开招标',
          company: '舟山水六横港城建设开发有限公司',
          price: '2206.86',
        },
        {
          project: '六横大岙客运码头场地改造工程候船楼室内装修工程',
          type: '公开招标',
          company: '舟山水六横港城建设开发有限公司',
          price: '2206.86',
        },
        {
          project: '六横大岙客运码头场地改造工程候船楼室内装修工程',
          type: '公开招标',
          company: '舟山水六横港城建设开发有限公司',
          price: '2206.86',
        },
      ],
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getAchievementList()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.list1 = json.map((item) => {
            return {
              project: item.xmmc,
              type: item.jyfs,
              company: item.jsdw,
              price: item.zbj,
            };
          });
        });
    },
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
  margin-top: 30px;
  width: 1650px;
  height: 75px;
  border-image: linear-gradient(0deg, #ffffff) 10 10;
  background: linear-gradient(0deg, #5d5d5d 0%, #535353 99%);
  opacity: 0.8;
  border-radius: 14px;
  display: flex;
  background: url('../img/jck_bg.png') no-repeat 100% 100%;
  justify-content: space-around;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #FFFFFF;
  .title-item {
    text-align: left;
    line-height: 75px;
    &:first-child {
      width: 600px;
    }
    &:nth-child(2) {
      width: 100px;
    }
    &:nth-child(3) {
      width: 400px;
    }
    &:last-child {
      width: 200px;
      text-align: right;
    }
  }
}
.table-body {
  height: 970px;
  border-radius: 14px;
  overflow: auto;
  .table-body-item {
    display: flex;
    background: url('../img/jck_bg.png') no-repeat 100% 100%;
    margin-top: 10px;
    justify-content: space-around;
    font-size: 24px;
    font-weight: 500;
    div {
      //margin-left: 10px;
      //width: 180px;
      text-align: left;
      line-height: 75px;
      //color: #59dbe6;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:first-child {
        width: 600px;
        color: #FFFFFF;
      }
      &:nth-child(2) {
        width: 100px;
        color: #EEA08A;
      }
      &:nth-child(3) {
        width: 400px;
        color: #AECACA;
      }
      &:last-child {
        width: 200px;
        text-align: right;
        font-size: 32px;
        font-family: DINPro;
        font-weight: 500;
        color: #9BFFFF;
      }
    }
  }
  .table-body-item :hover {
    cursor: pointer;
  }
}
</style>
