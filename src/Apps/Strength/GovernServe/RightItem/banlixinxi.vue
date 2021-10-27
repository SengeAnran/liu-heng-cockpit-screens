<template>
  <div>
    <div class="table">
      <div>
        <div class="table-title">
          <div v-for="item in list" :key="item" class="title-item">{{ item }}</div>
        </div>
        <div class="table-body">
          <div class="table-body-item" v-for="(item, index) in list1" :key="item">
            <div>{{ index + 1 }}</div>
            <div>{{ item.content }}</div>
            <div>{{ item.number }}</div>
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMonthlyHandling } from '@/api/Strength/GovernServe/api';
export default {
  data() {
    return {
      list: ['排序', '办事项', '受理量', '满意度'],
      list1: [
        {
          content: '非现场违法处理',
          number: '321',
          name: '100%',
        },
        {
          content: '综合受理',
          number: '382',
          name: '100%',
        },
        {
          content: '公安综合',
          number: '304',
          name: '100%',
        },
        {
          content: '水务综合',
          number: '444',
          name: '100%',
        },
        {
          content: '电力综合',
          number: '22',
          name: '100%',
        },
        {
          content: '宅基地审批',
          number: '7',
          name: '100%',
        },
        {
          content: '交通管理',
          number: '1',
          name: '100%',
        },
        {
          content: '城市管理',
          number: '18',
          name: '100%',
        },
        {
          content: '婚姻登记',
          number: '31',
          name: '100%',
        },
      ],
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getMonthlyHandling()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.list1 = json.map((item) => {
            return {
              content: item.bsx,
              number: item.sll,
              name: item.myd,
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
  width: 799px;
  height: 75px;
  border-image: linear-gradient(0deg, #ffffff) 10 10;
  background: linear-gradient(0deg, #5d5d5d 0%, #535353 99%);
  opacity: 0.8;
  border-radius: 14px;
  display: flex;
  background: url('../img/list-bg.png') no-repeat 100% 100%;
  .title-item {
    width: 180px;
    text-align: center;
    line-height: 75px;
  }
}
.table-body {
  height: 970px;
  border-radius: 14px;

  overflow: auto;
  .table-body-item {
    display: flex;
    background: url('../img/list-bg.png') no-repeat 100% 100%;
    margin-top: 10px;
    div {
      margin-left: 10px;
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
