<template>
  <div class="wrapper">
    <div class="bgBox"></div>
    <transition name="slide" appear>
      <div class="left-wrapper">
        <SamllTitle :name="CommunityOverview" />
        <div class="hehua-box">
          <div class="hehua-box-left">
            <div class="img-item">
              <img :src="contain1.img" alt="" />
            </div>
            <div class="hehua-text">
              <h4>{{ contain1.title }}</h4>
              <p>{{ contain1.content }}</p>
            </div>
          </div>
          <div class="hehua-box-right">
            <showList :dataList="contain3 && contain3.length > 0 ? contain3 : []" />
            <showList :dataList="contain2 && contain2.length > 0 ? contain2 : []" />
          </div>
        </div>
        <div class="proportion-wrapper">
          <div>
            <Proportion name="男女性别比" :dataList="manAwomenList" />
          </div>
          <div>
            <Proportion name="民族比例" :dataList="nationList" />
          </div>
        </div>
        <!-- 年龄分布 + 学历分布 -->
        <div class="third-wrapper">
          <div class="third-wrapper-base">
            <SamllTitle :name="ageName" />
            <BarCharts
              style="height: 35rem; width: 100%"
              :xAxisData="ageData.xData"
              :yAxisData="ageData.yData"
              :bgColor="ageData.bgColor"
            />
          </div>
          <div class="third-wrapper-base">
            <SamllTitle :name="educationName" />
            <BarCharts
              style="height: 35rem; width: 100%"
              :xAxisData="educationData.xData"
              :yAxisData="educationData.yData"
              :bgColor="educationData.bgColor"
            />
          </div>
        </div>
      </div>
    </transition>
    <div class="center-wrapper">
      <Map @changePlace="changePlace" />
    </div>
    <transition name="slide1" appear>
      <div class="right-wrapper">
        <div>
          <SamllTitle name="居民情况" />
          <pie-charts style="height: 35rem; width: 100%" :pieData="residentInfo" />
          <SamllTitle name="五类老人" />
          <TableList style="width: 100%; height: 19.7rem" :datalist="oldManInfo" />
          <SamllTitle name="村民信息" />
          <TableList style="width: 100%; height: 19.7rem" :datalist="villagerInfo" fontColor="rgba(219, 248, 119, 1)" />
        </div>
        <div>
          <SamllTitle name="乡村规划" />
          <RadarCharts
            style="height: 45rem; width: 100%"
            :indicatorData="indicatorData"
            :dataList="indicatorDataList"
          />
          <SamllTitle name="村民用水用电趋势" />
          <LineCharts
            style="height: 52rem; width: 100%"
            :xData="waterXData"
            :yData1="waterYData1"
            :yData2="waterYData2"
          />
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
/**
 *
 */
import SamllTitle from './Comps/SamllTitle';
import Proportion from './Comps/Proportion';
import showList from './Comps/ShowList';
import BarCharts from './Comps/BarCharts';
import PieCharts from './Comps/PieCharts';
import TableList from './Comps/TableList';
import RadarCharts from './Comps/RadarCharts';
import LineCharts from './Comps/LineCharts';
import Map from './Comps/newMap/index';
import {
  getCommunityInfo,
  getAgeDistribution,
  getEduDistribution,
  getResidentInfo,
  getOldPeople,
  getVillagerInfo,
  getPlanning,
  getWaterElectTrend,
  getBottomInfo,
} from '@/api/Charm/DigitCounty';

export default {
  components: {
    SamllTitle,
    Proportion,
    showList,
    BarCharts,
    PieCharts,
    TableList,
    RadarCharts,
    LineCharts,
    Map,
  },
  data() {
    return {
      defaultName: '五星村',
      CommunityOverview: '社区概述',
      nationList: [], // 民族比例
      manAwomenList: [], // 男女性别比
      contain1: {
        // 社区概述-荷花小区
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3228549874,2173006364&fm=26&gp=0.jpg',
        title: '',
        content: '',
      },
      contain2: [
        // 社区概述-社区人口+镇宅住区+小区数量+住宅单元数
        {
          img: require('@/assets/images/Charm/icon-charm-1.png'),
          count: 348,
          name: '镇宅住区',
          unit: '幢',
        },
        {
          img: require('@/assets/images/Charm/icon-charm-2.png'),
          count: 543,
          name: '住宅单元数',
          unit: '个',
        },
      ],
      contain3: [
        {
          img: require('@/assets/images/Charm/icon-charm-3.png'),
          count: 1749,
          name: '社区人口',
          unit: '人',
        },
        {
          img: require('@/assets/images/Charm/icon-charm-4.png'),
          count: 54,
          name: '小区数量',
          unit: '个',
        },
      ],
      ageName: '年龄分布',
      ageData: {
        xData: [],
        yData: [],
        bgColor: [
          { offset: 0, color: 'rgba(117, 248, 195, 1)' },
          { offset: 0.98, color: 'rgba(185, 251, 224, 1)' },
          { offset: 0.98, color: '#fff' },
          { offset: 1, color: '#fff' },
        ],
      },
      educationName: '学历分布',
      educationData: {
        xData: [],
        yData: [],
        bgColor: [
          { offset: 0, color: 'rgba(248, 243, 117, 1)' },
          { offset: 0.98, color: 'rgba(255, 164, 64, 1)' },
          { offset: 0.99, color: '#fff' },
          { offset: 1, color: '#fff' },
        ],
      },
      oldManInfo: [
        { name: '高龄老人', value: 0, unit: '人' },
        { name: '残疾老人', value: 0, unit: '人' },
        { name: '困难老人', value: 0, unit: '人' },
        { name: '空巢老人', value: 0, unit: '人' },
        { name: '孤寡老人', value: 0, unit: '人' },
      ], // 五类老人
      villagerInfo: [
        { name: '低保人员', value: 0, unit: '人' },
        { name: '残障人员', value: 0, unit: '人' },
        { name: '退伍军人', value: 0, unit: '人' },
        { name: '留守儿童', value: 0, unit: '人' },
        { name: '烈士子女', value: 0, unit: '人' },
      ], // 村民信息
      residentInfo: [
        { value: 0, name: '中共党员', unit: '人' },
        { value: 0, name: '共青团员', unit: '人' },
        { value: 0, name: '群众', unit: '人' },
      ],
      indicatorData: [
        { name: '耕地', value: 0, unit: 'km²', max: 0 },
        { name: '林地', value: 0, unit: 'km²', max: 0 },
        { name: '建设用地', value: 0, unit: 'km²', max: 0 },
        { name: '水域', value: 0, unit: 'km²', max: 0 },
        { name: '其他农用地', value: 0, unit: 'km²', max: 0 },
      ],
      indicatorDataList: [],
      waterXData: [],
      waterYData1: [],
      waterYData2: [],
    };
  },
  methods: {
    changePlace(name) {
      // console.log(name);
      this.initData({ name: name });
    },
    initData(data) {
      this.getBottomInfo(data);
      this.getCommunityInfoData(data);
      this.getAgeDistributionData(data);
      this.getEduDistributionData(data);
      this.getResidentInfoData();
      this.getOldPeopleData(data);
      this.getVillagerInfoData();
      this.getPlanningData();
      this.getWaterElectTrendData();
    },

    async getCommunityInfoData(data) {
      const result = await getCommunityInfo(data).request();
      if (result) {
        // 男女比例 + 民族比例
        this.manAwomenList = result.sex;
        this.nationList = result.nation;

        this.contain1.title = result.sqmc;
        this.contain1.content = result.sqjs;
        this.contain2[0].count = result.zzzqs; // 镇宅住区数
        this.contain2[1].count = result.zzdys; // 住宅单元数
        this.contain3[0].count = result.sqrks; // 社区人口
        this.contain3[1].count = result.xqsl; // 小区数量
      }
    },
    async getAgeDistributionData(data) {
      const result = await getAgeDistribution(data).request();
      if (result) {
        this.ageData.xData = result.map((i) => i.rs);
        this.ageData.yData = result.map((i) => i.nld);
      }
    },
    async getBottomInfo(data) {
      const result = await getBottomInfo(data).request();
      if (result) {
        // this.$store.dispatch('digitCounty/achangeIndicator', { ...result });
        this.$store.commit('digitCounty/changeIndicator', { ...result });
      }
    },
    async getEduDistributionData(data) {
      const result = await getEduDistribution(data).request();
      if (result) {
        this.educationData.xData = result.map((i) => i.rs);
        this.educationData.yData = result.map((i) => i.xl);
      }
    },
    async getOldPeopleData(data) {
      const result = await getOldPeople(data).request();
      if (result) {
        this.oldManInfo[0].value = result.gllrs;
        this.oldManInfo[1].value = result.cjlrs;
        this.oldManInfo[2].value = result.knlrs;
        this.oldManInfo[3].value = result.kclrs;
        this.oldManInfo[4].value = result.gglrs;
      }
    },
    async getVillagerInfoData() {
      const result = await getVillagerInfo().request();
      if (result) {
        console.log(result);
        this.villagerInfo[0].value = result.dbrys;
        this.villagerInfo[1].value = result.czrys;
        this.villagerInfo[2].value = result.twjrs;
        this.villagerInfo[3].value = result.lsets;
        this.villagerInfo[4].value = result.lszns;
      }
    },
    async getResidentInfoData() {
      const result = await getResidentInfo().request();
      if (result) {
        this.residentInfo[0].value = result[0].zgdyrs;
        this.residentInfo[1].value = result[0].gqtyrs;
        this.residentInfo[2].value = result[0].qzrs;
      }
    },
    async getPlanningData() {
      const result = await getPlanning().request();
      if (result) {
        this.indicatorData[0].value = result.gdmj;
        this.indicatorData[0].max = result.gdmj + 1000;
        this.indicatorData[1].value = result.ldmj;
        this.indicatorData[1].max = result.ldmj + 1000;
        this.indicatorData[2].value = result.jsydmj;
        this.indicatorData[2].max = result.jsydmj + 1000;
        this.indicatorData[3].value = result.symj;
        this.indicatorData[3].max = result.symj + 1000;
        this.indicatorData[4].value = result.qtnydmj;
        this.indicatorData[4].max = result.qtnydmj + 1000;
        this.indicatorDataList = this.indicatorData.map((i) => i.value);
      }
    },
    async getWaterElectTrendData() {
      const result = await getWaterElectTrend().request();
      if (result) {
        this.waterXData = result.map((i) => i.yf);
        this.waterYData1 = result.map((i) => i.ydl);
        this.waterYData2 = result.map((i) => i.ysl);
      }
    },
  },
  mounted() {
    const requestdata = {
      name: this.defaultName,
    };

    this.initData(requestdata);
  },
};
</script>
<style lang="scss" scoped>
@import url('../../../transform.css');
* {
  padding: 0;
  margin: 0;
}
.wrapper {
  position: relative;
  .bgBox {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 2070px;
    z-index: 6;
    pointer-events: none;
    background-size: 100% 100%;
    background: url('./Comps/Map/img/mask_bg.png') no-repeat;
  }
  .left-wrapper {
    position: absolute;
    width: 160rem;
    left: 25rem;
    top: 13rem;
    z-index: 10;
    .hehua-box {
      display: flex;
      color: white;
      margin-top: 2rem;
      .hehua-box-left {
        width: 80.5rem;
        background: linear-gradient(180deg, rgba(22, 40, 47, 0.4), rgba(16, 31, 37, 0.4));
        border: 0.1px solid rgba(168, 247, 237, 0.2);
        border-radius: 1rem;
        padding: 1rem 0 2rem 1.6rem;
        display: flex;
        .img-item {
          width: 46.3rem;
          height: 28rem;
          border-radius: 1rem;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .hehua-text {
          flex: 1;
          margin-left: 2.8rem;
          padding-right: 3.5rem;
          h4 {
            font-size: 4.8rem;
            color: white;
            padding-top: 2.2rem;
          }
          p {
            font-size: 2.4rem;
            color: rgba(255, 255, 255, 0.5);
            line-height: 4.8rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }
        }
      }
      .hehua-box-right {
        display: flex;
        margin-left: 4.2rem;
      }
    }
    .proportion-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .third-wrapper {
      display: flex;
      justify-content: space-between;
      & .third-wrapper-base {
        width: 80.3rem;
        height: 250px;
      }
    }
  }
  .right-wrapper {
    position: absolute;
    width: 160rem;
    right: 25rem;
    top: 13rem;
    display: flex;
    z-index: 10;
    justify-content: space-between;
    & > div {
      width: 76rem;
    }
  }
}
</style>
