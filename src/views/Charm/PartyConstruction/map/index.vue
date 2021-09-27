<template>
  <div class="map_wrapper">
    <div class="mask"></div>
    <div class="main-map" ref="map"></div>
    <div class="map-legend">
      <p class="legend-title">党群建设图例</p>
      <ul class="legend-list">
        <li v-for="(item, index) in legendList" :key="index" @click="selectLegend(item)">
          <div class="main-label-wrap">
            <span class="select-rect">
              <span class="selected-inner" v-show="currentLegend === item.value"></span>
            </span>
            {{ item.label }}
          </div>
          <ul v-if="item.children" class="legend-children-list">
            <li v-for="(item2, index2) in item.children" :key="index2" @click="selectLegend(item2)">
              <div class="main-label-wrap">
                <span class="select-rect">
                  <span class="selected-inner" v-show="currentLegend === item.value"></span>
                </span>
                {{ item2.label }}
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import './mark.scss';
import { partyConstruct, getCameraPosition } from '@/api/Charm/PartyConstruction';
import AMap from 'AMap';
export default {
  name: 'CityEvolution',
  components: {},
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      map: null,
      mapLayer: null,
      markerLayer: null,
      mapDom: null,
      currentLegend: 1,
      legendList: [
        { value: 1, label: '党组织' },
        { value: 2, label: '群团阵地' },
        {
          value: 3,
          label: '新时代站所',
          children: [
            { value: 4, label: '文化礼堂' },
            { value: 5, label: '综合文化站' },
          ],
        },
      ],
      dataList: [
        {
          name: '舟山市普陀区六横镇委员会',
          type: '礼堂',
          address: '舟山市普陀区六横镇三八路1号',
          lat: 29.745315,
          lng: 122.122129,
        },
        {
          name: '舟山市普陀区六横镇峧头新村总支部委员会',
          type: '党总支',
          address: '舟山市普陀区六横镇峧头新村坦岙中央路2号',
          lat: 29.738513,
          lng: 122.119297,
        },
        {
          name: '舟山市普陀区六横镇洋山新村总支部委员会',
          type: '党总支',
          address: '中共舟山市普陀区六横镇洋山新村邵家水潭跟路53号',
          lat: 29.745253,
          lng: 122.122191,
        },
        {
          name: '舟山市普陀区六横镇龙山新村总支部委员会',
          type: '党总支',
          address: '舟山市普陀区六横镇龙山小沙浦唐家路2号',
          lat: 29.771938,
          lng: 122.100936,
        },

        {
          name: '舟山市普陀区六横镇嵩山村总支部委员会',
          type: '党总支',
          address: '舟山市普陀区六横镇嵩山村半塘路73号',
          lat: 29.736793,
          lng: 122.097961,
        },
        {
          name: '舟山市普陀区六横镇和润村总支部委员会',
          type: '党总支',
          address: '舟山市普陀区六横镇和润村原百蕾厂房',
          lat: 29.739475,
          lng: 122.085191,
        },
        {
          name: '舟山市普陀区六横镇小郭巨村党总支',
          type: '党总支',
          address: '舟山市普陀区六横镇小郭巨村',
          lat: 29.729691,
          lng: 122.07055,
        },
        {
          name: '舟山市普陀区六横镇双屿港村党总支',
          type: '党总支',
          address: '舟山市普陀区六横镇双屿港村涨起港路6号',
          lat: 29.745132,
          lng: 122.071268,
        },
        {
          name: '舟山市普陀区六横镇双塘新村总支部委员会',
          type: '党总支',
          address: '舟山市普陀区六横镇张家塘街道上张家塘7号',
          lat: 29.721536,
          lng: 122.144487,
        },
        {
          name: '舟山市普陀区六横镇张家塘新村总支部委员会',
          type: '党总支',
          address: '舟山市普陀区六横镇张家塘新村',
          lat: 29.724202,
          lng: 122.14559,
        },
        {
          name: '舟山市普陀区六横镇青联村总支部委员会',
          type: '党总支',
          address: '舟山市普陀区六横镇青联村王家庙跟岙25号',
          lat: 29.720383,
          lng: 122.139215,
        },
        {
          name: '舟山市普陀区六横镇青山村党总支',
          type: '党总支',
          address: '舟山市普陀区六横镇青沙村仰天外山咀12号',
          lat: 29.703315,
          lng: 122.127145,
        },
        {
          name: '舟山市普陀区六横镇岑夏村总支部委员会',
          type: '党总支',
          address: '舟山市普陀区六横镇岑夏村庙前102号',
          lat: 29.729014,
          lng: 122.127736,
        },
        {
          name: '舟山市普陀区六横镇平峧村总支部委员会',
          type: '党总支',
          address: '六横镇平峧支出村外平峧55号',
          lat: 29.719541,
          lng: 122.1681,
        },
        {
          name: '舟山市普陀区六横镇杜庄村党总支',
          type: '党总支',
          address: '舟山市普陀区六横镇杜庄村仁房4号',
          lat: 29.696382,
          lng: 122.140591,
        },
        {
          name: '舟山市普陀区六横镇小湖村党总支',
          type: '党总支',
          address: '舟山市普陀区六横镇小湖村西边57号',
          lat: 29.675471,
          lng: 122.14265,
        },
        {
          name: '舟山市普陀区六横镇苍洞村党总支部委员会',
          type: '党总支',
          address: '舟山市普陀区六横镇苍洞村',
          lat: 29.680297,
          lng: 122.164266,
        },
        {
          name: '舟山市普陀区六横镇礁潭新村总支部委员会',
          type: '党总支',
          address: '舟山市普陀区六横镇礁潭新村西厂51号',
          lat: 29.701243,
          lng: 122.163758,
        },
        {
          name: '舟山市普陀区六横镇台门总支部委员会',
          type: '党总支',
          address: '舟山市普陀区六横镇台门镇府南路11号',
          lat: 29.696972,
          lng: 122.197714,
        },
        {
          name: '舟山市普陀区六横镇田岙村总支部委员会',
          type: '党总支',
          address: '舟山市普陀区六横镇田岙村里胡家67号',
          lat: 29.681351,
          lng: 122.17951,
        },
        {
          name: '舟山市普陀区六横镇悬山村党总支',
          type: '党总支',
          address: '舟山市普陀区六横镇悬山村村民委员会',
          lat: 29.696683,
          lng: 122.197694,
        },
        {
          name: '舟山市普陀区六横镇佛渡村党总支',
          type: '党总支',
          address: '佛渡村道头咀双屿路1号',
          lat: 29.742948,
          lng: 122.034904,
        },
        {
          name: '舟山市普陀区六横镇蟑螂山社区总支部委员会',
          type: '党总支',
          address: '六横镇蟑螂山荷花小区30幢1号',
          lat: 29.749973,
          lng: 122.116741,
        },
        {
          name: '舟山市普陀区六横镇新民社区总支部委员会',
          type: '党总支',
          address: '舟山市普陀区六横镇台门台兴路109号',
          lat: 29.697554,
          lng: 122.194207,
        },
        {
          name: '舟山群岛新区六横管理委员会城市管理局党总支',
          type: '党总支',
          address: '舟山市普陀区六横镇六横城管局',
          lat: 29.742272,
          lng: 122.130001,
        },
        {
          name: '舟山市龙山船厂有限公司党委',
          type: '党委',
          address: '浙江省舟山市普陀区六横镇沙岙',
          lat: 29.772583,
          lng: 122.078943,
        },
        {
          name: '鑫亚船舶修造有限公司党委',
          type: '党委',
          address: '浙江省舟山市普陀区六横镇东浪咀',
          lat: 29.790001,
          lng: 122.12013,
        },
      ],
      wenhualitang: [
        {
          name: '大沙岙文化礼堂',
          type: '礼堂',
          address: '六横镇佛渡村大沙岙',
          lat: 29.738199,
          lng: 122.030864,
        },
        {
          name: '佛东文化礼堂',
          type: '礼堂',
          address: '六横镇佛渡村佛东文化礼堂',
          lat: 29.752646,
          lng: 122.042047,
        },
        {
          name: '杜庄文化礼堂',
          type: '礼堂',
          address: '六横镇杜庄村仁房4号',
          lat: 29.696382,
          lng: 122.140591,
        },
        {
          name: '梅峙文化礼堂',
          type: '礼堂',
          address: '六横镇梅峙村梅峙东139号',
          lat: 29.718975,
          lng: 122.164489,
        },
        {
          name: '清港文化礼堂',
          type: '礼堂',
          address: '六横镇青联村清港新农村123号',
          lat: 29.717001,
          lng: 122.138697,
        },
      ],
      lastDetailMarker: null,
      shujudataList: [],
    };
  },
  // eslint-disable-next-line space-before-function-paren
  mounted() {
    this.initMap();
    this.renderMarker();
    this.getPosition();

    this.wenhualitang.forEach((item) => {
      const obj = {
        type: 'Feature',
        properties: {
          name: item.name,
          type: item.type,
          address: item.address,
        },
        geometry: {
          type: 'Point',
          coordinates: [item.lng, item.lat],
        },
      };
      this.shujudataList.push(obj);
    });
    console.log(this.shujudataList, '12312312');
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    getPosition() {
      const data = {
        auth: {
          serviceId: 'ff590480a17548d4b3dae8d5790b013a', // 数据开放服务Id
          subServiceId: '93471aa24c7c4f4393786f2512d8c54e', // 数据开放订阅服务Id
          // signature: localStorage.autograph, // 请求参数签名
          signatureVersion: '2.0', // 当前使用的签名版本
          timestamp: new Date().getTime(), // 请求的时间戳
        }, // 认证参数
        size: 100,
        includeColumns: true,
        params: [],
      };
      getCameraPosition(data).then((res) => {
        // console.log(res);
      });
    },
    // eslint-disable-next-line space-before-function-paren
    selectLegend(item) {
      this.currentLegend = item.value;
    },
    // eslint-disable-next-line space-before-function-paren
    initMap() {
      this.mapDom = this.$refs.map;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 14.8,
        zooms: [3, 16],
        center: [122.187672, 29.69669],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
    },
    async renderMarker() {
      for (let index = 0; index < this.dataList.length; index++) {
        const element = this.dataList[index];
        const content = `
        <div class="marker-content ${element.type}">
          <div class="catalog-content">
            <h3 class="title">${element.name}</h3>
          </div>
        </div>`;
        const marker = new AMap.Marker({
          position: [element.lng, element.lat],
          content: content,
        });
        marker.setMap(this.map);
        marker.on('click', (e) => {
          this.handleMarkerClick(e, element);
        });
      }
    },

    handleMarkerClick(ev, element) {
      console.log(ev, element);
      this.clearLastMarkerDetail();
      const marker = ev.target;
      const feature = marker.getExtData();
      const content = this.detailTemplate(feature.properties, element);
      marker.setzIndex(1000);
      marker.setContent(content);
      this.lastDetailMarker = marker;
      this.lastDetailMarker.type = this.selected;
    },
    clearLastMarkerDetail() {
      if (!this.lastDetailMarker) {
        return;
      }
      const feature = this.lastDetailMarker.getExtData();
      this.lastDetailMarker.setzIndex(100);
      const content = this.markerTemplate(feature.properties);
      this.lastDetailMarker.setContent(content);
      this.lastDetailMarker = null;
    },
    // eslint-disable-next-line space-before-function-paren
    detailTemplate(e, item) {
      return `
        <div class="marker-detail-content2">
          <div class="detail-content">
            <h3 class="title">${item.name}</h3>
            <div class="desc-row">
              <p class="sub-title">支部地址：</p>
              <div class="desc-content">
               ${item.address}
              </div>
            </div>
          </div>
        </div>
        `;
    },
    // eslint-disable-next-line space-before-function-paren
    markerTemplate(data) {
      return `
        <div class="marker-content">
          <div class="catalog-content">
            <h3 class="title">六横党支部</h3>
          </div>
        </div>
        `;
    },
  },
};
</script>
<style lang="scss">
@import './mark.scss';
</style>
<style lang="scss" scoped>
.map_wrapper {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  .mask {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 2070px;
    z-index: 6;
    pointer-events: none;
    background-size: 100% 100%;
    background: url('./img/mask_bg.png') no-repeat;
  }
  .main-map {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 135rem;
  }
  .map-legend {
    position: absolute;
    z-index: 10;
    top: 90.6rem;
    right: 37%;
    width: 27.4rem;
    // height: 28.2rem;
    height: auto;
    background: url('./img/legend-bg.png') no-repeat 0 0;
    box-sizing: border-box;
    background-size: 100% 100%;
    color: #fff;
    padding: 3rem;
    .legend-title {
      margin: 0;
      font-size: 3.1rem;
    }
    .legend-list {
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 2.6rem;
      line-height: 2.2;
      li {
        .main-label-wrap {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
      }
      .legend-children-list {
        list-style: none;
        padding-left: 2rem;
      }
      .select-rect {
        display: inline-block;
        width: 3rem;
        height: 3rem;
        box-sizing: border-box;
        margin-right: 1.2rem;
        border: 0.3rem solid #9bfcfd;
        border-radius: 0.4rem;
        padding: 0.2rem;
        line-height: 0;
        .selected-inner {
          display: inline-block;
          width: 100%;
          height: 100%;
          background: #fdef8e;
          border-radius: 0.4rem;
        }
      }
    }
  }
}
</style>
