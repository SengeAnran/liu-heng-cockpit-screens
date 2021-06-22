<template>
  <div class="right">
    <Title>评论列表</Title>
    <div class="comment-list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="name">
          <span>{{ item.name }}</span>
        </div>
        <div class="desc">
          <span class="date">{{ item.date }}</span>
          <span class="content" :title="item.content">
            {{ item.content.length > 70 ? item.content.slice(0, 70) + '...' : item.content }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from './Title';
export default {
  data() {
    return {
      list: Array.from({ length: 8 }).map((d) => ({
        name: '王果冻',
        date: '2012.03.22  12:22',
        content: '建筑钢材价格先涨后跌，整体偏强运行库存继续下降，钢厂强势挺价，商家成本直线上升，下游终端用户由于资金成本不断上升，采购较为谨慎，部分工地已经停工。建筑钢材价格先涨后跌，整体偏强运行库存继续下降，钢厂强势挺价，商家成本直线上升，下游终端用户由于资金成本不断上升，采购较为谨慎，部分工地已经停工。',
      })),
    };
  },
  components: {
    Title,
  },
};
</script>
<style lang="scss" scoped>
.right {
  position: absolute;
  top: 26rem;
  right: 16rem;
  width: 165rem;
  // outline: 1px solid red;
  .comment-list {
    // outline: 1px solid red;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 95rem;
    overflow: auto;
    .item {
      width: 80rem;
      height: 23rem;
      background: linear-gradient(180deg, rgba(22, 40, 47, 0.3), rgba(16, 31, 37, 0.3));
      border: 1px solid rgba(168, 247, 237, 0.07);
      border-radius: 1rem;
      margin-bottom: 0.6rem;
      display: flex;
      .name {
        width: 16.8rem;
        height: 19.5rem;
        margin: 1.6rem;
        flex: none;
        box-sizing: border-box;
        background: linear-gradient(180deg, rgba(22, 40, 47, 0.8), rgba(16, 31, 37, 0.8));
        border: 1px solid rgba(168, 247, 237, 0.2);
        border-radius: 10px;
        text-align: center;
        padding-top: 11rem;
        span {
          font-size: 2.4rem;
          font-family: Source Han Sans CN;
          font-weight: 500;
          background: linear-gradient(180deg, #fff 0%, #99FFFF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .desc {
        margin-left: 1rem;
        color: #FFFFFF;
        margin-right: 2rem;
        .date {
          font-size: 2.4rem;
          font-family: DIN;
          font-weight: 500;
          display: flex;
          margin-top: 4.5rem;
          margin-bottom: 1rem;
        }
        .content {
          font-size: 2rem;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
