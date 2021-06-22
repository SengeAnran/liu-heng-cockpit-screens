<template>
  <div class="StruggleIsland">
    <secondary-title name="奋斗之岛" isLarge/>
    <div class="container">
      <div>
        <div>
          <div class="name">
            <p>户籍人数 <span>{{rkxx.hjrs}}人</span></p>
          </div>
          <div class="content">
            <p>男性人数 <span>{{rkxx.brs}}个</span></p>
            <p>女性人数 <span>{{rkxx.grs}}个</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>劳动力资源数 <span>{{ldlxx.ldlrs}}人</span></p>
          </div>
          <div class="content">
            <p>男性人数 <span>{{ldlxx.brs}}个</span></p>
            <p>女性人数 <span>{{ldlxx.grs}}个</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>财政供给人员 <span>{{czgjxxTotal}}人</span></p>
          </div>
          <div class="content">
            <p>公务员 <span>{{czgjxx[0].rs}}个</span>，事业编制 <span>{{czgjxx[1].rs}}个</span></p>
            <p>其他人员 <span>{{czgjxx[2].rs}}个</span></p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="name">
            <p>规模工业企业水</p>
            <p>及能源消耗情况</p>
          </div>
          <div class="content">
           <p>水 <span>{{nyxhqk[0].xhl}}万吨</span></p>
           <p>原煤 <span>{{nyxhqk[1].xhl}}吨</span></p>
           <p>焦炭 <span>{{nyxhqk[2].xhl}}吨</span></p>
           <p>汽油 <span>{{nyxhqk[3].xhl}}吨</span></p>
           <p>煤油 <span>{{nyxhqk[4].xhl}}吨</span></p>
           <p>柴油 <span>{{nyxhqk[5].xhl}}吨</span></p>
           <p>液化石油气 <span>{{nyxhqk[6].xhl}}吨</span></p>
           <p>天然气 <span>{{nyxhqk[7].xhl}}立方米</span></p>
           <p>电 <span>{{nyxhqk[8].xhl}}万度</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
import { getFight } from '@/api/Overview/DataAnalysis/api';
export default {
  components: {
    SecondaryTitle,
  },
  data() {
    return {
      rkxx: {
        brs: 0,
        grs: 0,
        hjrs: 0,
      },
      ldlxx: {
        brs: 0,
        grs: 0,
        ldlrs: 0,
      },
      czgjxx: [
        { czryfl: '公务员', rs: 0 },
        { czryfl: '事业编制', rs: 0 },
        { czryfl: '其他人员', rs: 0 },
      ],
      czgjxxTotal: 0,
      nyxhqk: [
        { nyfl: '水', xhl: 0 },
        { nyfl: '原煤', xhl: 0 },
        { nyfl: '焦煤', xhl: 0 },
        { nyfl: '汽油', xhl: 0 },
        { nyfl: '煤油', xhl: 0 },
        { nyfl: '柴油', xhl: 0 },
        { nyfl: '液化石油气', xhl: 0 },
        { nyfl: '天然气', xhl: 0 },
        { nyfl: '电', xhl: 0 },
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getFight()
        .request()
        .then((json) => {
          const { rkxx, ldlxx, czgjxx, nyxhqk } = json;
          this.rkxx = rkxx;

          this.ldlxx = ldlxx;

          this.czgjxx.map((item) => {
            const data = czgjxx.filter((obj) => obj.czryfl === item.czryfl);
            item.rs = data[0].rs;
          });
          this.czgjxxTotal = this.czgjxx.map((item) => item.rs).reduce((n, m) => n + m);

          this.nyxhqk.map((item) => {
            const data = nyxhqk.filter((obj) => obj.nyfl === item.nyfl);
            item.xhl = data[0].xhl;
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
    &:nth-child(2n){
      & > div{
        height: 406px;
        margin-bottom: 0;
      }
      .name{
        height: 366px;
        background-image: url(../images/card_bg_2.png);
      }
    }
    & > div {
      height: 120px;
      background: rgba(23, 41, 69, 0.25);
      border: 1px solid rgba(168, 243, 246, 0.1);
      display: flex;
      align-items: center;
      padding: 0 20px;
      &:nth-child(-n + 2) {
        margin-bottom: 25px;
      }
    }
    .name {
      width: 361px;
      min-width: 361px;
      height: 80px;
      text-align: center;
      margin-right: 38px;
      background: url(../images/card_bg_0.png) no-repeat center / cover;
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
