import Container from '@/components/Container';
import ThirdPage from '@/components/ThirdPage';
import BgImg from '@/components/BgImg';

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
            { name: '陆地面积', value: 140, unit: '平方公里' },
            { name: '行政区划 ', value: 654, unit: '个村' },
          ],
        },
      },
      {
        path: 'population',
        name: '人口一张图',
        component: () => import('@/Apps/Overview/PopulationMap'),
        meta: {
          indicator: [
            { name: '户籍人口', value: 62824, unit: '人' },
            { name: '流动人口', value: 40991, unit: '人' },
            { name: '人口密度 ', value: 449, unit: '人/平方公里' },
          ],
        },
      },
      {
        path: 'construction',
        name: '平安建设',
        component: BgImg,
        props: {
          name: 'overview-construction.jpg',
        },
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
        component: BgImg,
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
            { name: '医院数量', value: 5, unit: '个' },
            { name: '医生数量', value: 3352, unit: '人' },
            { name: '护士数量', value: 424, unit: '人' },
          ],
        },
      },
      {
        path: 'traffic',
        name: '交通畅行',
        component: BgImg,
        props: {
          name: 'overview-traffic.jpg',
        },
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
            { name: '发明专利数量', value: 28, unit: '项' },
            { name: '外观设计专利', value: 58, unit: '项' },
            { name: '实用新型 ', value: 58, unit: '项' },
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
            { name: '人均GDP', value: 18.11, unit: '万元' },
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
      url: 'http://60.163.192.206:8000/h5app_liuheng/views/liuheng/views/sanfang.html',
      width: 5760,
      height: 1620,
    },
  },
  {
    path: '/city-manage',
    name: '城市管理',
    component: ThirdPage,
    props: {
      url: 'http://60.163.192.206:8000/h5app_liuheng/views/liuheng/views/cityManage.html',
      width: 5760,
      height: 1620,
    },
  },
  {
    path: '/safety',
    name: '平安六横',
    component: ThirdPage,
    props: {
      url: 'http://60.163.192.206:8000/h5app_liuheng/views/liuheng/views/safeLiuheng.html',
      width: 5760,
      height: 1620,
    },
  },
  {
    path: '/production',
    name: '安全生产',
    component: ThirdPage,
    props: {
      url: 'http://60.163.192.206:8000/h5app_liuheng/views/liuheng/views/safeProduction.html',
      width: 5760,
      height: 1620,
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
        component: BgImg,
        props: {
          name: 'overview-city-evolution.jpg',
        },
        meta: {
          indicator: [
            { name: 'GDP总量    ', value: 4320, unit: '万' },
            { name: '企业工业数  ', value: 429, unit: '家' },
            { name: '劳动力资源数', value: 41586, unit: '人' },
          ],
        },
      },
      {
        path: 'port-economy;',
        name: '港口经济',
        component: BgImg,
        props: {
          name: 'overview-population.jpg',
        },
        meta: {
          indicator: [
            { name: '港口货物吞吐量', value: 8112, unit: '万吨' },
            { name: '外贸进出口额', value: 13.3, unit: '亿美元' },
            { name: '到位市外资金', value: 12.26, unit: '亿元' },
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
        component: BgImg,
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
        component: BgImg,
        props: {
          name: 'overview-population.jpg',
        },
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
        component: BgImg,
        props: {
          name: 'overview-population.jpg',
        },
        meta: {
          indicator: [
            { name: '本月事件', value: 100, unit: '件' },
            { name: '本周事件', value: 30, unit: '件' },
            { name: '舆情评论总数', value: 32456, unit: '个' },
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
        component: () => import(/* webpackChunkName: "charm" */ '@/views/Charm/PartyConstruction'),
        meta: {
          indicator: [
            { name: '正式党员数量', value: 100, unit: '人' },
            { name: '月劳动竞赛次数', value: 3, unit: '次' },
            { name: '月工会维权总数', value: 100, unit: '件' },
          ],
        },
      },
      {
        path: 'digit-county',
        name: '数字乡社',
        component: BgImg,
        props: {
          name: 'overview-population.jpg',
        },
        meta: {
          indicator: [
            { name: '社区人口', value: 62824, unit: '人' },
            { name: '社区劳动力资源', value: 40991, unit: '人' },
            { name: '弱势群体人数', value: 449, unit: '人' },
          ],
        },
      },
    ],
  },
];
