import Container from '@/components/Container';
import ThirdPage from '@/components/ThirdPage';
// import BgImg from '@/components/BgImg';

export default [
  {
    path: '/overview',
    name: '六横总览',
    component: Container,
    redirect: 'overview/city-evolution',
    children: [
      {
        path: 'city-evolution',
        name: '历史变迁',
        component: () => import('@/Apps/Overview/CityEvolution'),
        meta: {
          indicator: [
            { name: '全镇面积', value: 654, unit: '平方公里' },
            { name: '陆地面积', value: 145.5, unit: '平方公里' }, // 140
            { name: '海洋面积 ', value: 514, unit: '平方公里' },
          ],
        },
      },
      {
        path: 'population',
        name: '人口一张图',
        component: () => import('@/Apps/Overview/PopulationMap'),
        meta: {
          indicator: [
            { name: '户籍人口', value: 62161, unit: '人' }, // 62824
            { name: '出生人口', value: 298, unit: '人' },
            { name: '人口增长率 ', value: -0.44, unit: '%' },
          ],
        },
      },
      {
        path: 'construction',
        name: '平安建设',
        component: () => import('@/Apps/Overview/PeaceSecurity'),
        meta: {
          indicator: [
            { name: '执法次数', value: 1000, unit: '次' },
            { name: '流动人口', value: 2000, unit: '次' },
            { name: '人口密度 ', value: 449, unit: '人/平方公里' },
          ],
        },
      },
      {
        path: 'education',
        name: '民生教育',
        component: () => import('@/Apps/Overview/Education'),
        props: {
          name: 'overview-education.jpg',
        },
        meta: {
          indicator: [
            { name: '学校数量', value: 5, unit: '个' },
            { name: '在校学生数', value: 3352, unit: '人' },
            { name: '专任教师数 ', value: 424, unit: '人' },
          ],
        },
      },
      {
        path: 'medical',
        name: '民生医疗',
        // component: BgImg,
        component: () => import('@/Apps/Overview/Medical'),
        props: {
          name: 'overview-medical.jpg',
        },
        meta: {
          indicator: [
            { name: '医院数量', value: 2, unit: '个' },
            { name: '医生数量', value: 176, unit: '人' },
            { name: '卫技人员', value: 282, unit: '人' },
          ],
        },
      },
      {
        path: 'traffic',
        name: '交通畅行',
        component: () => import('@/Apps/Overview/Traffic'),
        meta: {
          indicator: [
            { name: '全年码头客运量', value: 100, unit: '万人' },
            { name: '全年公交客运量', value: 20, unit: '万人' },
            { name: '全年出租客运量 ', value: 30, unit: '万人' },
          ],
        },
      },
      {
        path: 'innovation',
        name: '创新转型',
        component: () => import('@/Apps/Overview/Innovation'),
        meta: {
          indicator: [
            { name: '发明专利数量', value: 5, unit: '项' },
            { name: '外观设计专利', value: 3, unit: '项' },
            { name: '实用新型 ', value: 35, unit: '项' },
          ],
        },
      },
      {
        path: 'data-analysis',
        name: '数据分析',
        component: () => import('@/Apps/Overview/DataAnalysis'),
        meta: {
          indicator: [
            { name: '三产结构比例', value: '7.4:56.8:35.8', unit: '' },
            { name: '人均GDP', value: 18.1111, unit: '万元' },
            { name: '年全镇财政收入', value: 12.93, unit: '亿元' },
          ],
        },
      },
    ],
  },
  {
    path: '/emergency',
    name: '三防应急',
    component: ThirdPage,
    props: {
      url: 'http://10.80.17.147:9091/h5app_liuheng/views/liuheng/views/sanfang.html',
      width: 5760,
      height: 1350,
    },
  },
  {
    path: '/city-manage',
    name: '城市管理',
    component: ThirdPage,
    props: {
      url: 'http://10.80.17.147:9091/h5app_liuheng/views/liuheng/views/cityManage.html',
      width: 5760,
      height: 1350,
    },
  },
  {
    path: '/safety',
    name: '平安六横',
    component: ThirdPage,
    props: {
      url: 'http://10.80.17.147:9091/h5app_liuheng/views/liuheng/views/safeLiuheng.html',
      width: 5760,
      height: 1350,
    },
  },
  {
    path: '/production',
    name: '安全生产',
    component: ThirdPage,
    props: {
      url: 'http://10.80.17.147:9091/h5app_liuheng/views/liuheng/views/safeProduction.html',
      width: 5760,
      height: 1350,
    },
  },
  {
    path: '/vitality',
    name: '活力六横',
    component: Container,
    redirect: 'vitality/economic-dev',
    children: [
      {
        path: 'economic-dev',
        name: '经济发展',
        component: () => import('@/Apps/Vitality/EconomicDev'),
        meta: {
          indicator: [
            { name: '工业生产总值', value: 4320, unit: '万' },
            { name: '企业工业数  ', value: 429, unit: '家' },
            { name: '渔农业总产值', value: 41586, unit: '万' },
          ],
        },
      },
      {
        path: 'port-economy',
        name: '港口经济',
        component: () => import('@/Apps/Vitality/PortEconomy'),
        meta: {
          indicator: [
            { name: '货运船舶运力', value: 8324.4, unit: '万吨' },
            { name: '外贸进出口总额', value: 13.3, unit: '亿美元' },
            { name: '港口总货运量', value: 8200.1, unit: '万吨' },
          ],
        },
      },
    ],
  },
  {
    path: '/strength',
    name: '实力六横',
    component: Container,
    redirect: 'strength/govern-serve',
    children: [
      {
        path: 'govern-serve',
        name: '政务服务',
        component: () => import('@/Apps/Strength/GovernServe'),
        props: {
          name: 'overview-city-evolution.jpg',
        },
        meta: {
          indicator: [
            { name: '今日办理量', value: 11, unit: '' },
            { name: '本周办理量', value: 571, unit: '' },
            { name: '本月办理量', value: 838, unit: '' },
          ],
        },
      },
      {
        path: 'project-manage',
        name: '项目管理',
        component: () => import('@/Apps/Strength/ProjectManage'),
        props: {
          // name: 'overview-population.jpg',
        },
        meta: {
          indicator: [
            { name: '已实现融资项目', value: 100, unit: '个' },
            { name: '已实现融资量', value: 1000, unit: '万' },
            { name: '项目总数', value: 320, unit: '个' },
          ],
        },
      },
      {
        path: 'environment',
        name: '环保专题',
        component: () => import('@/Apps/Strength/Environmental'),
        meta: {
          indicator: [
            { name: 'AQI      ', value: 20, unit: '' },
            { name: 'PM2.5指数', value: 23, unit: 'ug/m3' },
            { name: '污染源头', value: 100, unit: '个' },
          ],
        },
      },
      {
        path: 'public-voice',
        name: '舆情分析',
        component: () => import('@/Apps/Strength/PublicVoice'),
        meta: {
          indicator: [
            { name: '本月事件', value: 346, unit: '件' },
            { name: '正面', value: 106, unit: '件' },
            { name: '负面', value: 8, unit: '件' },
          ],
        },
      },
    ],
  },
  {
    path: '/charm',
    name: '魅力六横',
    component: Container,
    redirect: 'charm/party-construction',
    children: [
      {
        path: 'party-construction',
        name: '党群建设',
        component: () => import('@/views/Charm/PartyConstruction'),
        meta: {
          indicator: [
            { name: '正式党员数量', value: 275, unit: '人' },
            { name: '预备党员', value: 27, unit: '人' },
            { name: '发展党员', value: 0, unit: '人' },
          ],
        },
      },
      {
        path: 'digit-county',
        name: '数字乡社',
        component: () => import('@/views/Charm/DigitCounty'),
        // component: BgImg,
        props: {
          name: 'overview-population.jpg',
        },
        meta: {
          indicator: [
            { name: '社区人口', value: 1274, unit: '人' },
            { name: '社区劳动力资源', value: 856, unit: '人' },
            { name: '弱势群体人数', value: 0, unit: '人' },
          ],
        },
      },
    ],
  },
];
