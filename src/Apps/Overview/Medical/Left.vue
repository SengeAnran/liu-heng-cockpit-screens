<template>
  <div class="Medical-Left">
    <BaseTitle title="医疗资源情况"
               :width="1650" />
    <div class="flex">
      <div class="left-left">
        <div class="sub-title">医院数量</div>
        <div class="flex desc">
          <div class="flex"
               v-for="item in descList"
               :key="item.label">
            <div class="label">{{item.label||'全区'}}</div>
            <div class="desc-count flex">
              <div>
                <div class="count">{{item.count1}}</div>
                <span>公办</span>
              </div>
              <div>
                <div class="count">{{item.count2}}</div>
                <span>民办</span>
              </div>
            </div>
          </div>
        </div>
        <div class="sub-title "
             style="padding:20px 0">医务人员数量分布</div>
        <div class="chart">1</div>
        <div class="chart">2</div>
      </div>
      <div class="left-right">
        <div class="sub-title">医师数量分析</div>
        <div class="flex desc-doc">
          <div class="flex"
               v-for="(item,i) in docList"
               :key="`doc-type-${i}`">
            <div class="label">{{item.type}}<br />医师</div>
            <div class="count">{{item.count}}</div>
          </div>
        </div>
        <div class="sub-title "
             style="padding:20px 0">截至2020年，医务人数增加230人</div>
        <div class="chart"><LineChart :line-data="lineData"/></div>
        <div class="chart">2</div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from './components/BaseTitle';
import LineChart from './components/LineChart';
export default {
  name: 'MedicalLeft',
  components: { BaseTitle, LineChart },
  data() {
    return {
      descList: [
        {
          label: '全区',
          count1: 12,
          count2: 1,
        },
        {
          label: '建成区',
          count1: 12,
          count2: 1,
        },
      ],
      docList: [
        {
          type: '初级',
          count: 89,
        },
        {
          type: '主治',
          count: 89,
        },
        {
          type: '副主任',
          count: 89,
        },
        {
          type: '主任',
          count: 89,
        },
      ],
      lineData: {
        title: '',
        name1: '医务人员数量分布',
        lineColor11: 'rgba(89, 219, 230, 1)',
        areaColor11: 'rgba(89, 219, 230, 1)',
        areaColor12: 'rgba(89, 219, 230, .3)',
        xData: ['1.20', '1.21', '1.22', '1.23', '1.24', '1.25', '1.26', '1.27', '1.28', '1.29'],
        data1: [1, 3, 5, 6, 8, 9, 12, 33, 12, 55],
      },
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
}
.Medical-Left {
  width: 1650px;
  height: 977px;
  position: absolute;
  top: 263px;
  left: 160px;
  .left-left,
  .left-right {
    width: 50%;
    margin-top: 63px;
    margin-right: 22px;
    .chart{
      width: 100%;
      height: 332px;
    }
  }
  .sub-title {
    padding: 26px 0;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 500;
  }
  .count {
    font-size: 48px;
    font-family: DIN;
    font-weight: 500;
  }
  .left-left {
    .desc {
      text-align: center;
      > div {
        width: 382px;
        height: 123px;
        text-align: center;
        margin-right: 39px;
      }
      .label {
        width: 158px;
        font-size: 30px;
        line-height: 123px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #fff;
        background: url('./images/hos-bg.png') no-repeat 100% 100%;
        background-image: -webkit-linear-gradient(bottom, rgba(92, 207, 207, 1), rgba(225, 255, 255, 1));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .desc-count {
        width: 223px;
        background: url('./images/hos-bg.png') no-repeat 100% 100%;
        > div {
          width: 50%;
        }
        span {
          font-size: 22px;
          color: rgba(225, 255, 255, 0.5);
        }
      }
    }
  }
  .left-right {
    .desc-doc {
      text-align: center;
      > div {
        height: 123px;
        width: 202px;
        background: url('./images/doc-bg.png') no-repeat 100% 100%;
        .label {
          width: 98px;
          font-size: 24px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
          background: -webkit-linear-gradient(bottom, rgba(92, 207, 207, 1), rgba(225, 255, 255, 1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          vertical-align: middle;
          transform: translateY(30px);
        }
        .count {
          width: 104px;
          line-height: 123px;
        }
      }
    }
  }
}
</style>
