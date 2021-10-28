<template>
  <div>
    <Map>
      <AGeoJSON v-if="activeItem === '长途客运'" key="bus-points" :source="point" :geoStyle="{ marker: busStyle }">
        <template v-slot:popup="feature">
          <PointPopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON
        v-if="activeItem === '危险品运输企业'"
        key="bus-points"
        :source="point"
        :geoStyle="{ marker: weixianStyle }"
      >
        <template v-slot:popup="feature">
          <PointPopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON
        v-if="activeItem === '二类维修厂'"
        key="bus-points"
        :source="point"
        :geoStyle="{ marker: qixiuStyle }"
      >
        <template v-slot:popup="feature">
          <PointPopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON v-if="activeItem === '码头'" key="wharf-points" :source="point" :geoStyle="{ marker: wharfStyle }">
        <template v-slot:popup="feature">
          <PointPopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON v-if="activeItem === '岛屿'" key="island-points" :source="point" :geoStyle="{ marker: islandStyle }">
        <template v-slot:popup="feature">
          <PointPopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON
        v-if="activeItem === '隧道'"
        key="island-points"
        :source="tunnel"
        :geoStyle="{ polyline: { strokeColor: 'rgb(0, 255, 124)' } }"
      >
        <template v-slot:popup="feature">
          <LinePopup :feature="feature" />
        </template>
      </AGeoJSON>
      <template v-if="activeItem === '县道'">
        <AGeoJSON key="line1" :source="line[3]" :geoStyle="{ polyline: { strokeColor: 'rgb(135, 227, 0)' } }">
          <template v-slot:popup="feature">
            <LinePopup :feature="feature" />
          </template>
        </AGeoJSON>
        <AGeoJSON key="line2" :source="line[2]" :geoStyle="{ polyline: { strokeColor: 'rgb(255, 203, 0)' } }">
          <template v-slot:popup="feature">
            <LinePopup :feature="feature" />
          </template>
        </AGeoJSON>
        <AGeoJSON key="line3" :source="line[1]" :geoStyle="{ polyline: { strokeColor: 'rgb(255, 75, 215)' } }">
          <template v-slot:popup="feature">
            <LinePopup :feature="feature" />
          </template>
        </AGeoJSON>
        <AGeoJSON key="line4" :source="line[0]" :geoStyle="{ polyline: { strokeColor: 'rgb(0, 125, 255)' } }">
          <template v-slot:popup="feature">
            <LinePopup :feature="feature" />
          </template>
        </AGeoJSON>
      </template>
<!--      <template v-if="activeItem === '县道'">-->
<!--        <AGeoJSON key="line1" :source="line" :geoStyle="{ polyline: { strokeColor: 'rgb(135, 227, 0)' } }">-->
<!--          <template v-slot:popup="feature">-->
<!--            <LinePopup :feature="feature" />-->
<!--          </template>-->
<!--        </AGeoJSON>-->
<!--      </template>-->
    </Map>
    <div class="map-legend">
      <h3>交通运营图例</h3>
      <ul>
        <li v-for="item in list" :key="item" @click="selectMark(item)" :class="{ active: activeItem === item }">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Map from '@/components/AMap';
import AGeoJSON from '@/components/AMap/AGeoJSON';
import PointPopup from './PointPopup';
import LinePopup from './LinePopup';
import line1 from './line1.json';
import line2 from './line2.json';
import line3 from './line3.json';
import line4 from './line4.json';
import tunnel from './tunnel.json';
// import { wharf, busStation, island, weixian, qixiuchang } from './data';
import {
  getLocationList,
  getLocationInfo,
} from '@/api/IndexItem';
export default {
  data() {
    const list = [
      '岛屿',
      '码头',
      '长途客运',
      '县道',
      '危险品运输企业',
      '二类维修厂',
    ];
    return {
      list,
      activeItem: '',
      activeItem1: list[0],
      point: {},
      // wharf: Object.freeze(wharf),
      // busStation: Object.freeze(busStation),
      // island: Object.freeze(island),
      // weixian: Object.freeze(weixian),
      // qixiuchang: Object.freeze(qixiuchang),
      line1: Object.freeze(line1),
      line2: Object.freeze(line2),
      line3: Object.freeze(line3),
      line4: Object.freeze(line4),
      tunnel: Object.freeze(tunnel),
      wharfStyle: Object.freeze({
        content: '<div style="width: 6rem; height: 6rem;" class="wharf-point-afhwa"></div>',
      }),
      busStyle: Object.freeze({
        content: '<div style="width: 6rem; height: 6rem;" class="bus-point-afhwa"></div>',
      }),
      weixianStyle: Object.freeze({
        content: '<div style="width: 6rem; height: 6rem;" class="weixian"></div>',
      }),
      qixiuStyle: Object.freeze({
        content: '<div style="width: 6rem; height: 6rem;" class="qixiu"></div>',
      }),
      islandStyle: Object.freeze({
        content: '<div style="width: 6rem; height: 6rem;" class="island-point-afhwa"></div>',
      }),
    };
  },
  mounted() {
    this.getClassDate();
    // this.selectMark('岛屿', 0);
    // this.getData(this.activeItem);
  },
  methods: {
    // 获得图例弹窗数
    async getClassDate() {
      const res = await getLocationList({ type: '交通概况' }).request();
      this.list = res;
      this.selectMark(res[0], 0);
    },
    selectMark(item, index) {
      this.activeItem1 = item;
      this.getData(item);
    },
    async getData(item1) {
      const res = await getLocationInfo({ type: item1 }).request();
      const data = {
        type: 'FeatureCollection',
        features: [],
      };
      res.map((item) => {
        data.features.push({
          type: 'Feature',
          properties: {
            name: item.locationName,
            content: item.popupList[0] && item.popupList.length === 1 ? item.popupList[0].value : '',
            listData: item.popupList[0] && item.popupList.length > 1 ? item.popupList : '',
          },
          geometry: {
            type: item.geoType,
            coordinates: JSON.parse(item.geoCoord),
          },
        });
      });
      // console.log(data);
      switch (this.activeItem1) {
        case '岛屿': {
          this.point = data;
          break;
        }
        case '码头': {
          this.point = data;
          break;
        }
        case '长途客运': {
          this.point = data;
          break;
        }
        case '县道': {
          let line = [];
          res.map((item) => {
            line.push({
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {
                    name: item.locationName,
                    content: item.popupList[0] ? item.popupList[0].value : '',
                  },
                  geometry: {
                    type: item.geoType,
                    coordinates: JSON.parse(item.geoCoord),
                  },
                },
              ],
            });
          });
          this.line = line;
          break;
        }
        case '危险品运输企业': {
          this.point = data;
          break;
        }
        default: this.point = data;
      }
      console.log(data);
      this.activeItem = item1;
      // console.log(this.line);
      // this.markDown();
    },
  },
  components: {
    Map,
    // Line1,
    AGeoJSON,
    LinePopup,
    PointPopup,
  },
};
</script>
<style lang="scss" scoped>
.map-legend {
  width: 27.4rem;
  height: 44.1rem;
  position: absolute;
  left: 332rem;
  top: 88rem;
  background: url('./img/legend.png') no-repeat;
  background-size: 100% 100%;
  padding-left: 4.2rem;
  h3 {
    margin: 3rem 0 0 0;
    color: #fff;
    font-size: 2.8rem;
    font-family: Source Han Sans CN;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    height: 6rem;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 5rem;
    font-size: 2.6rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    cursor: pointer;
    &.active {
      &::before {
        background: #fdef8e;
        background-clip: content-box;
      }
    }
    &::before {
      position: absolute;
      left: 0;
      box-sizing: border-box;
      content: ' ';
      width: 2.7rem;
      height: 2.7rem;
      padding: 0.3rem;
      border-radius: 0.4rem;
      border: 0.3rem solid #9bfcfd;
      background: rgba(155, 252, 253, 0.3);
    }
  }
}
</style>
<style lang="scss">
.wharf-point-afhwa {
  background: url('./img/mt.png') no-repeat;
  background-size: 100% 100%;
}
.bus-point-afhwa {
  background: url('./img/bus.png') no-repeat;
  background-size: 100% 100%;
}
.weixian {
  background: url('./img/weixian.png') no-repeat;
  background-size: 100% 100%;
}
.qixiu {
  background: url('./img/qixiu.png') no-repeat;
  background-size: 100% 100%;
}
.island-point-afhwa {
  background: url('./img/island.png') no-repeat;
  background-size: 100% 100%;
}
</style>
