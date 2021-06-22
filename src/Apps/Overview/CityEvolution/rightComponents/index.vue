<template>
  <div class="right_component">
    <AreaLocation :sqmj='sqmj'/>
    <CommunityArea
      :areaAddress='areaAddress'
      :xAxisData='xAxisData'
    />
    <AverageValue
      :lineData='lineData'
      :xAxisData='xAxisData'
    />
    <CycleCharts
      :buildingAreaData='buildingAreaData'
      :areaAddressData='areaAddressData'
      :oceanAddressData='oceanAddressData'
    />
  </div>
</template>

<script>
import AreaLocation from './component/AreaLocation'; // 市域面积
import CommunityArea from './component/CommunityArea';
import AverageValue from './component/AverageValue';
import CycleCharts from './component/CycleCharts'; // 三个圆环图
import { getAreaInfo, getCommunityInfo } from '@/api/Overview/CityEvolution/api';
export default {
  name: 'RightComponents',
  components: {
    AreaLocation,
    CommunityArea,
    AverageValue,
    CycleCharts,
  },
  data() {
    return {
      // 圆环的三个面积分布
      buildingAreaData: [],
      areaAddressData: [],
      oceanAddressData: [],
      // 市域面积分布
      sqmj: {},
      // 亩均产值
      lineData: [],
      // 面积分布
      areaAddress: [],
      // xAxisData
      xAxisData: [],
    };
  },
  mounted() {
    this.getAreaInfo();
    this.getCommunityInfo();
  },
  methods: {
    getAreaInfo() {
      getAreaInfo().request().then((res) => {
        const { hyfb, sqmj, zlmj } = res;
        hyfb.forEach((item) => {
          item.name = item.hydm;
          item.value = item.hymj;
        });
        zlmj.forEach((item) => {
          item.name = item.zl;
          item.value = item.zlmj;
        });
        this.oceanAddressData = hyfb; // 海域面积，圆环
        this.areaAddressData = zlmj; // 面积分布，圆环
        // sqmj 市域面积分布
        this.sqmj = sqmj;
      });
    },
    getCommunityInfo() { // 社区信息
      getCommunityInfo().request().then((res) => {
        res.forEach((item) => {
          this.lineData.push(item.sqmjc);
          this.areaAddress.push(item.sqmj);
          this.xAxisData.push(item.sqmc);
          this.buildingAreaData.push({
            name: item.sqmc,
            value: item.sqmj,
          });
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.right_component {
  position: absolute;
  width: 1700px;
  height: 1100px;
  top: 240px;
  right: 140px;
  z-index: 100;
}
</style>
