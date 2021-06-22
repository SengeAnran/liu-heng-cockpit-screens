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
          <p>
            <ICountUp :endVal="item.number" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from '../components/ICountUp';
import { getPatentNum } from '@/api/Overview/Innovation/api';
export default {
  components: {
    ICountUp,
  },
  data() {
    return {
      listData: [
        {
          title: '发明',
          subTitle: '专利',
          number: 0,
        },
        {
          title: '外观设计',
          subTitle: '专利',
          number: 0,
        },
        {
          title: '实用',
          subTitle: '新型',
          number: 0,
        },
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getPatentNum().request().then((json) => {
        const { fmzlsl, wgsjzlsl, syxxzlsl } = json;
        this.listData[0].number = fmzlsl;
        this.listData[1].number = wgsjzlsl;
        this.listData[2].number = syxxzlsl;
      });
    },
    addZero(num) {
      return num < 10 ? '0' + num : num;
    },
  },
};
</script>

<style lang="scss" scoped>
.PatentList {
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
        padding-left: 6px;
        color: #fff;
        font-size: 40px;
      }
    }
  }
}
</style>
