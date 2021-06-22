<template>
  <div class="LivableIsland">
    <secondary-title name="宜居之岛" isLarge />
    <div class="container">
      <div>
        <div>
          <div class="name">
            <p>人口</p>
          </div>
          <div class="content">
            <p>
              2019年底六横户籍人口
              <span>{{rkxx.hjrk}}人</span>
            </p>
            <p>
              人口密度
              <span>{{rkxx.rkmd}}人/平安公里</span>
            </p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>地理位置</p>
          </div>
          <div class="content">
            <p>
              地理位置
              <span>北纬{{rkxx.lng}}'~{{rkxx.lng1}}'，东经{{rkxx.lat}}'~{{rkxx.lat1}}'。</span>
            </p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>区域总面积</p>
          </div>
          <div class="content">
            <p>
              全镇总面积约
              <span>{{qyxx.qyzmj}}平方公里</span>，其中陆地面积
              <span>{{qyxx.ldmj}} 平方公里</span>，东西长约
              <span>{{qyxx.dxcd}}公里</span>，南北宽约
              <span>{{qyxx.nbcd}}公里</span>。
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="name">
            <p>行政区域</p>
          </div>
          <div class="content">
            <p>
              <span>{{qyxx.sqczs}}个</span> 村（社区）
            </p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>气候</p>
          </div>
          <div class="content">
            <p>
              全年降雨量
              <span>{{qh.njyl}}毫米，</span>
            </p>
            <p>
              年平均气温
              <span>{{qh.npjqw}} ℃。</span>
            </p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>岛屿情况</p>
          </div>
          <div class="content">
            <p>
              大小岛屿
              <span>{{dyqk.dys}}个</span>,有人居住岛屿
              <span>{{dyqk.rjdys}}个</span>
            </p>
            <p>
              海岸线长约
              <span>{{dyqk.rjdyhaxcd}}公里</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
import { getGoodLivingInfo } from '@/api/Overview/DataAnalysis/api';
export default {
  components: {
    SecondaryTitle,
  },
  data() {
    return {
      rkxx: {
        hjrk: 0,
        rkmd: 0,
      },
      qyxx: {
        dxcd: 0,
        lat: 0,
        lat1: 0,
        ldmj: 0,
        lng: 0,
        lng1: 0,
        nbcd: 0,
        qyzmj: 0,
        sqczs: 0,
      },
      qh: {
        njyl: 0,
        npjqw: 0,
      },
      dyqk: {
        dys: 0,
        rjdyhaxcd: 0,
        rjdys: 0,
      },
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getGoodLivingInfo()
        .request()
        .then((json) => {
          const { rkxx, qyxx, qh, dyqk } = json;
          this.rkxx = rkxx;
          this.qyxx = qyxx;
          this.qh = qh;
          this.dyqk = dyqk;
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
      p {
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
