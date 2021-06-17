<template>
  <div class="PatentList">
    <div class="sub-title">专利数量</div>
    <div class="container">
      <div :key="index" v-for="(item,index) in listData">
        <div class="name">
          <p>{{item.title}}</p>
          <p>{{item.subTitle}}</p>
        </div>
        <div class="number">
          <p>{{addZero(item.number)}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [
        {
          title: '发明',
          subTitle: '专利',
          number: 6,
        },
        {
          title: '外观设计',
          subTitle: '专利',
          number: 66,
        },
        {
          title: '实用',
          subTitle: '新型',
          number: 66,
        },
      ],
    };
  },
  methods: {
    addZero(num) {
      return num < 10 ? '0' + num : num;
    },
  },
};
</script>

<style lang="scss" scoped>
.PatentList{
  margin-bottom: 30px;
}
.sub-title {
  font-size: 24px;
  line-height: 24px;
  min-height: 24px;
  color: #fff;
  margin-bottom: 20px;
}
.container {
  height: 124px;
  display: flex;
  justify-content: space-between;
  & > div {
    width: 242px;
    display: flex;
    & > div {
      flex: 1;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 2%, rgba(255, 255, 255, 0.08));
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        margin: 0;
        font-size: 24px;
        line-height: 36px;
        color: #fff;
        &:nth-child(2) {
          color: rgba(153, 255, 255, 1);
        }
      }
    }
    .number {
      overflow: hidden;
      p {
        color: #fff;
        font-size: 48px;
        letter-spacing: 4px;
      }
    }
  }
}
</style>
