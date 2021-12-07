<template>
  <div>
    <div class="table">
      <div>
        <div class="table-title">
          <div v-for="item in list" :key="item" class="title-item">{{ item }}</div>
        </div>
        <div class="table-body">
          <div class="table-body-item" v-for="item in list1" :key="item">
            <div style="margin-left: 10px">{{ item.content }}</div>
            <div>{{ item.number }}</div>
            <div>{{ item.name }}</div>
            <div>{{ item.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHandlingList } from '@/api/Strength/GovernServe/api';
export default {
  data() {
    return {
      list: ['事务名称', '排队号', '姓名', '取号时间'],
      list1: [
        {
          content: '非现场违法处理',
          number: 'BA011',
          name: '刘*艳',
          time: '10：39：42',
        },
        {
          content: '非现场违法处理',
          number: 'BA010',
          name: '周*',
          time: '10:26:20',
        },
        {
          content: '综合受理',
          number: 'IB005',
          name: '叶*',
          time: '10：25：26',
        },
        {
          content: '民政、社保、医保',
          number: 'MS007',
          name: '傅*君',
          time: '10:20:04',
        },
      ],
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getHandlingList()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.list1 = json.map((item) => {
            return {
              content: item.swmc,
              number: item.pdh,
              name: item.xm,
              time: item.qhsj,
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
  height: 370px;
  border-radius: 14px;

  overflow: auto;
  .table-body-item {
    display: flex;
    background: url('../img/list-bg.png') no-repeat 100% 100%;
    margin-top: 10px;
    div {
      // padding: 10px;
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
