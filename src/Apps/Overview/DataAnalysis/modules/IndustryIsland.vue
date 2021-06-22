<template>
  <div class="IndustryIsland">
    <secondary-title name="产业之岛" isLarge />
    <div class="container">
      <div>
        <div>
          <div class="name">
            <p>主要农作物面积</p>
          </div>
          <div class="content">
            <p>经济作物播种面积 <span>{{zynzwmj.jjzwbzmj}}亩</span></p>
            <p>油料播种面积 <span>{{zynzwmj.ylbzmj}}亩</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>主要农作物产量</p>
          </div>
          <div class="content">
            <p>油料产量 <span>{{zynzwcl[0].cl}}吨</span>，棉花产量 <span>{{zynzwcl[1].cl}}吨</span></p>
            <p>蔬菜产量 <span>{{zynzwcl[2].cl}}吨</span>，水果产量 <span>{{zynzwcl[3].cl}}吨</span></p>
            <p>果用瓜产量 <span>{{zynzwcl[4].cl}}吨</span>，茶叶产量 <span>{{zynzwcl[5].cl}}吨</span></p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="name">
            <p>农牧业生产情况</p>
          </div>
          <div class="content">
            <p>猪年末存栏 <span>{{nmyscqk[0].nmcls}}头</span>，牛年末存栏 <span>{{nmyscqk[1].nmcls}}头</span></p>
            <p>羊年末存栏 <span>{{nmyscqk[2].nmcls}}只</span>，家禽年末存栏 <span>{{nmyscqk[3].nmcls}}只</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>主要农作物产量</p>
          </div>
          <div class="content">
            <p>猪肉产量 <span>{{nmycl[0].cl}}吨</span>，禽肉产量 <span>{{nmycl[1].cl}}吨</span></p>
            <p>羊肉产量 <span>{{nmycl[2].cl}}吨</span>，禽蛋产量 <span>{{nmycl[3].cl}}吨</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
import { getIndustry } from '@/api/Overview/DataAnalysis/api';
export default {
  components: {
    SecondaryTitle,
  },
  data() {
    return {
      zynzwmj: {
        jjzwbzmj: 0,
        ylbzmj: 0,
      },
      zynzwcl: [
        { nzwfl: '油料', cl: 0 },
        { nzwfl: '棉花', cl: 0 },
        { nzwfl: '蔬菜', cl: 0 },
        { nzwfl: '水果', cl: 0 },
        { nzwfl: '果用瓜', cl: 0 },
        { nzwfl: '茶叶', cl: 0 },
      ],
      nmyscqk: [
        { nmyfl: '猪', nmcls: 0 },
        { nmyfl: '牛', nmcls: 0 },
        { nmyfl: '羊', nmcls: 0 },
        { nmyfl: '家禽', nmcls: 0 },
      ],
      nmycl: [
        { nmyfl: '猪肉', cl: 0 },
        { nmyfl: '禽肉', cl: 0 },
        { nmyfl: '羊肉', cl: 0 },
        { nmyfl: '禽蛋', cl: 0 },
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getIndustry()
        .request()
        .then((json) => {
          const { zynzwmj, zynzwcl, nmyscqk, nmycl } = json;
          this.zynzwmj = zynzwmj;

          this.zynzwcl.map((item) => {
            const data = zynzwcl.filter((obj) => obj.nzwfl === item.nzwfl);
            item.cl = data[0].cl;
          });

          this.nmyscqk.map((item) => {
            const data = nmyscqk.filter((obj) => obj.nmyfl === item.nmyfl);
            item.nmcls = data[0].nmcls;
          });

          this.nmycl.map((item) => {
            const data = nmycl.filter((obj) => obj.nmyfl === item.nmyfl);
            item.cl = data[0].cl;
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  & > div {
    box-sizing: border-box;
    width: calc(50% - 24px);
    flex: 1;
    &:nth-child(2n + 1) {
      margin-right: 48px;
    }
    & > div {
      height: 190px;
      background: rgba(23, 41, 69, 0.25);
      border: 1px solid rgba(168, 243, 246, 0.1);
      display: flex;
      align-items: center;
      padding: 0 20px;
      &:nth-child(-n + 1) {
        margin-bottom: 30px;
      }
    }
    .name {
      width: 361px;
      min-width: 361px;
      height: 150px;
      text-align: center;
      margin-right: 38px;
      background: url(../images/card_bg_1.png) no-repeat center / cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p{
        margin: 0;
        font-size: 30px;
        line-height: 40px;
        font-weight: bold;
        color: #fff;
      }
      span {
        color: rgba(128, 255, 255, 1);
        font-weight: bold;
      }
    }
    .content {
      flex: 1;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        margin: 0;
        font-size: 18px;
        line-height: 32px;
        color: #fff;
        span {
          color: rgba(128, 255, 255, 1);
          font-weight: bold;
        }
      }
    }
  }
}
</style>
