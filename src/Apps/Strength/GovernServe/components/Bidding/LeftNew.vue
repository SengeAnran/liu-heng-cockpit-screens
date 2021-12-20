<template>
  <div class="left">
    <div>
      <div style="margin-bottom: 36px">
        <BaseTitle title="工程建设" :width="800" />
        <BoxItem :data-list="dataList[0].dataList"></BoxItem>
      </div>
      <div>
        <BaseTitle title="产权交易" :width="800" />
        <BoxItem :data-list="dataList[1].dataList"></BoxItem>
      </div>
    </div>
    <div>
      <div style="margin-bottom: 36px">
        <BaseTitle title="政府采购" :width="800" />
        <BoxItem :data-list="dataList[2].dataList"></BoxItem>
      </div>
      <div>
        <BaseTitle title="“应招必招、应进必进”达成率" :width="800" />
        <AchievementRate/>
      </div>
    </div>
  </div>
</template>

<script>
import BoxItem from './LeftNewItem/BoxItem';
import AchievementRate from "./LeftNewItem/AchievementRate";
import {
  getBiddingShow,
} from '@/api/Strength/GovernServe/api';
export default {
  name: 'ProjectManageLeft',
  components: { BoxItem, AchievementRate },
  data() {
    return {
      dataList: [
        {
          name: '工程建设',
          dataList: [
            {
              name: '年项目数量',
              value: '00',
              valueColor: '#63CEB3',
              unit: '个',
              imgUrl: require('./img/icon_xm01.png'),
              config: {
                content: {
                  fontSize: '6.4rem',
                  fontFamily: 'DINPro',
                  color: '#63CEB3',
                },
                unit: {
                  fontSize: '30px',
                  color: '#ffffff',
                  marginLeft: '17px',
                },
              },
              data: {
                content: 1000,
                unit: '个',
              },
            },
            {
              name: '项目总金额',
              value: '0000.00',
              valueColor: '#63CEB3',
              unit: '万元',
              imgUrl: require('./img/icon_mn01.png'),
              config: {
                content: {
                  fontSize: '6.4rem',
                  fontFamily: 'DINPro',
                  color: '#63CEB3',
                },
                unit: {
                  fontSize: '30px',
                  color: '#ffffff',
                  marginLeft: '17px',
                },
              },
              data: {
                content: 1000,
                unit: '万元',
              },
            }
          ]
        },
        {
          name: '产权交易',
          dataList: [
            {
              name: '年项目数量',
              value: '00',
              valueColor: '#7CD8DB',
              unit: '个',
              imgUrl: require('./img/icon_xm03.png'),
              config: {
                content: {
                  fontSize: '6.4rem',
                  fontFamily: 'DINPro',
                  color: '#63CEB3',
                },
                unit: {
                  fontSize: '30px',
                  color: '#ffffff',
                  marginLeft: '17px',
                },
              },
              data: {
                content: 1000,
                unit: '个',
              },
            },
            {
              name: '项目总金额',
              value: '0000.00',
              valueColor: '#E38680',
              unit: '万元',
              imgUrl: require('./img/icon_mn03.png'),
              config: {
                content: {
                  fontSize: '6.4rem',
                  fontFamily: 'DINPro',
                  color: '#E38680',
                },
                unit: {
                  fontSize: '30px',
                  color: '#ffffff',
                  marginLeft: '17px',
                },
              },
              data: {
                content: 1000,
                unit: '万元',
              },
            }
          ]
        },
        {
          name: '政府采购',
          dataList: [
            {
              name: '年项目数',
              value: '00',
              valueColor: '#6FA7EB',
              unit: '个',
              imgUrl: require('./img/icon_xm02.png'),
              config: {
                content: {
                  fontSize: '6.4rem',
                  fontFamily: 'DINPro',
                  color: '#6FA7EB',
                },
                unit: {
                  fontSize: '30px',
                  color: '#ffffff',
                  marginLeft: '17px',
                },
              },
              data: {
                content: 1000,
                unit: '个',
              },
            },
            {
              name: '项目总金额',
              value: '0000.00',
              valueColor: '#BD7BEC',
              unit: '万元',
              imgUrl: require('./img/icon_mn02.png'),
              config: {
                content: {
                  fontSize: '6.4rem',
                  fontFamily: 'DINPro',
                  color: '#BD7BEC',
                },
                unit: {
                  fontSize: '30px',
                  color: '#ffffff',
                  marginLeft: '17px',
                },
              },
              data: {
                content: 1000,
                unit: '万元',
              },
            }
          ]
        },
      ],
      data: {
        content: 1000,
        // unit: '人',
      },
      loop: {
        // 是否开启数值循环
        loop1: true,
        // 多久循环一次
        time: 10000,
        // 循环几次
        count: 99999,
        // 精确的小数位数
        decimals: 0,
        // 是否开启四舍五入 类型(0是不做什么取值操作,1去掉小数部分,2.向上取整,3.下取整,4.四舍五入)
        round: 1,
        decimal: '.',
        // 整数 分割器
        separator: ',',
      },
      config: {
        content: {
          fontSize: '5rem',
          fontFamily: 'DINPro',
          color: '#6AD1F7',
        },
        unit: {
          fontSize: '2rem',
          color: '#6AD1F7',
        },
      },
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getBiddingShow()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.dataList[0].dataList[0].value = json[0].item.nxmsl;
          this.dataList[0].dataList[1].value = Number(json[0].item.xmzje).toFixed(2);
          this.dataList[1].dataList[0].value = json[1].item.nxmsl;
          this.dataList[1].dataList[1].value = Number(json[1].item.xmzje).toFixed(2);
          this.dataList[2].dataList[0].value = json[2].item.nxmsl;
          this.dataList[2].dataList[1].value = Number(json[2].item.xmzje).toFixed(2);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
$main-font: 24px;
.font-color {
  text-decoration: none;
  background-image: linear-gradient(to bottom, #fff 0%, #26c4bf 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.left {
  position: absolute;
  display: flex;
  top: 200px;
  left: 200px;
  width: 1650px;
  height: 1027px;
  font-size: 24px;
  color: #fff;
  z-index: 999;
}
</style>
