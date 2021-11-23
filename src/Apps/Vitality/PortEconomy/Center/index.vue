<template>
  <div class="center-webview">
    <div>
      <div class="preview"></div>
      <div class="mask"></div>
<!--      <div class="img_bg">-->
<!--          <div class="item" v-for="item in dataList" :key="item">-->
<!--            <div class="content">{{item.content}}</div>-->
<!--            <div class="name">{{item.name}}</div>-->
<!--          </div>-->
<!--      </div>-->
      <chart-map v-if="!threeDMap"/>
      <div class="main-map" v-if="threeDMap">
        <!--      <iframe src="http://60.163.192.206:8000/srit3d/default.html" width="100%" height="100%"></iframe>-->
        <ThreeDMap
          showChinaOutLine
          Global
          :dataList="this.threeDDataList"
          :flyingLineList="this.flyingLineList"
          :tipTemplate="this.tipTemplate"
          :title="title"
          :Scale="Scale"
        />
      </div>
      <div class="switch">
        <div class="button" :class="{ active: !threeDMap }" @click="changeMap(2)">卫星地图</div>
        <div class="button" :class="{ active: threeDMap }" @click="changeMap(3)">3D地图</div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartMap from './map';
import { getPortDetail } from '@/api/Vitality/PortEconomy/api';
import {
  getLocationInfo,
} from '@/api/IndexItem';
export default {
  components: {
    ChartMap,
  },
  data() {
    return {
      threeDMap: false,
      dataList: [
        {
          name: '宁波舟山港 六横港区',
          content: '舟山港（Zhoushan Port），是中国浙江省舟山市港口，位于中国长江三角洲和东部沿海要冲，背靠上海、杭州、宁波等大中城市 ，是长江三角洲综合运输网的重要节点。',
        },
        {
          name: '上海港 吴淞码头',
          content: '上海港（Shanghai Port），是中国上海市港口，位于中国大陆海岸线中部、长江入海口处，前通中国南北沿海和世界大洋，后贯长江流域和江浙皖内河、太湖流域。',
        },
        {
          name: '广州港 虎门港区',
          content: '广州港（Guangzhou Port），是中国广东省广州市港口，地处珠江入海口和珠江三角洲地区中心地带，濒临南海，毗邻香港和澳门，东江、西江、北江在此汇流入海。',
        },
        {
          name: '美国长滩港',
          content: '相比邻港洛杉矶的交通拥堵状况， 长滩在这方面的问题较少。 长滩港口管理局约翰.佩伯说：“长滩集装箱吞吐量增加的推动力是美国不断增长的消费需求和中国日益提升的制造能力。',
        },
        {
          name: '美国西雅图港',
          content: '位于美国（全称：美利坚合众国THE UNITED STATES OF AMERICA）西北部华盛顿（WASHINGTON）洲西部沿海普吉特（PUGET）湾的东岸，濒临太平洋西海岸的胡安德富卡（JUAN DE FUCA）海峡的东南侧，是美国第二大集装箱港，也是美国距离远东最近的港口。',
        },
        {
          name: '美国洛杉矶港',
          content: '位于美国（全称：美利坚合众国THE UNITED STATES OF AMERICA）西南部加利福尼亚（CALIFORNIA）州西南沿海圣佩德罗（SAN PEDRO）湾的顶端。濒临太平洋的东侧，是美国第一大集装箱港。',
        },
        {
          name: '新加坡港',
          content: '港口位于新加坡南部的沿海，西临马六甲海峡（Straits of Malacca）的东南侧，南临新加坡海峡的北侧。是亚太地区最二大的港口，也是世界最大的集装箱港口之一。',
        },
      ],

      threeDDataList: [],
      flyingLineList: [],
      tipTemplate: {},
      title: '规上企业',
      Scale: 37.7,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    changeMap(type) {
      if (type === 3) {
        this.threeDMap = true;
      } else {
        this.threeDMap = false;
      }
    },
    async getData() {
      const res2 = await getLocationInfo({ type: '港口名称' }).request();
      const res = await getPortDetail().request();
      // console.log(res);
      this.initThreeDData(res);
      this.initThreeDData2(res2);
    },
    initThreeDData(data) {
      // console.log(data)
      if (data) {
        const endPoints = [];
        data.forEach((item, index) => {
          endPoints.push([item.lng, item.lat]);
        });
        // console.log(endPoints);
        this.flyingLineList.push({
          startPoint: [122.153209, 29.749349],
          endPoints: endPoints,
        });
      }
      console.log(this.flyingLineList);
    },
    initThreeDData2(data) {
      console.log(data);
      if (data) {
        this.Scale = data.length > 1 ? 1.3 : 37.7;
        this.threeDDataList = data.map((item, index) => {
          // console.log(item.geoCoord);
          // console.log(JSON.parse(item.geoCoord));
          const MapLngLat = JSON.parse(item.geoCoord);
          console.log(MapLngLat);
          let listItem = {};
          let tipTemplates = {};
          if (item.popupList) {
            item.popupList.forEach((item2) => {
              listItem[item2.title] = item2.value;
              tipTemplates[item2.title] = item2.title;
            });
          }
          if (index === 0) {
            this.tipTemplate = {
              '港口名称': '港口名称',
              ...tipTemplates,
            };
          }
          return {
            x: MapLngLat[0],
            y: MapLngLat[1],
            z: 0,
            港口名称: item.locationName,
            ...listItem,
          };
        });
      }
      console.log(this.threeDDataList);
    },
  },
};
</script>
<style lang="scss" scoped>
.center-webview {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  & > div {
    flex: 1;
    position: relative;
  }
}

.preview {
  width: 100%;
  height: 100%;
  background: url(../images/map_mask.png) no-repeat top center;
  background-size: 5740px auto;
  position: absolute;
  z-index: 11;
  pointer-events: none;
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 207rem;
  background: url(../images/mask.png) no-repeat center bottom;
  background-size: 100% 100%;
  z-index: 1;
  pointer-events: none;
}
.main-map {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 135rem;
}
.switch {
  width: 274px;
  height: 360px;
  position: absolute;
  top: 120rem;
  right: 200rem;
  display: flex;
  justify-content: space-around;
  z-index: 1000;
  .button {
    width: 114px;
    height: 44px;
    font-size: 24px;
    line-height: 44px;
    text-align: center;
    color: #82e2e4;
    cursor: pointer;
    background: url('./img/mmexport.jpg') no-repeat;
    &.active {
      color: white;
      background: url('./img/mmexport1.jpg') no-repeat;
    }
  }
}
.img_bg{
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 135rem;
  background: url("./img/bg_03.png") 100% 100% no-repeat;
  //background: url(./img/bg_01.png) no-repeat center bottom;
  background-size: 100% 100%;
  //background: #3de7c9;
  .item{
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    //background: red;
    display: block;
    cursor: pointer;
    &:hover {
      .content {
        display: block;
        z-index: 2;
      }
      .name {
        z-index: 2;
      }
    }
    &:nth-child(1) {
      top: 62rem;
      left: 365rem;
    }
    &:nth-child(2) {
      top: 59.5rem;
      left: 364.5rem;
    }
    &:nth-child(3) {
      top: 67rem;
      left: 359.5rem;
    }
    &:nth-child(4) {
      top: 57rem;
      left: 211rem;
    }
    &:nth-child(5) {
      top: 45.6rem;
      left: 209rem;
    }
    &:nth-child(6) {
      top: 58rem;
      left: 211rem;
    }
    &:nth-child(7) {
      top: 85.2rem;
      left: 353.5rem;
    }
    .content {
      display: none;
      background: rgba(9,23,55,.2);
      position: absolute;
      border-radius: 3rem;
      top: -14rem;
      left: -20rem;
      width: 40rem;
      height: 10rem;
      padding: 1rem;
      font-size: 18px;
      color: white;
    }
    .name {
      background: rgba(9, 23, 55, 0.67);
      position: absolute;
      border-radius: 1rem;
      top: 3rem;
      left: -8rem;
      min-width: 16rem;
      white-space: nowrap;
      //height: 4rem;
      padding: 1rem;
      font-size: 18px;
      color: white;
      text-align: center;
    }
  }
}
</style>
