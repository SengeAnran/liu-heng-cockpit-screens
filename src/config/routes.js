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
        component: BgImg,
        props: {
          name: 'overview-city-evolution.jpg',
        },
      },
      {
        path: 'population',
        name: '人口一张图',
        component: BgImg,
        props: {
          name: 'overview-population.jpg',
        },
      },
      {
        path: 'construction',
        name: '平安建设',
        component: BgImg,
        props: {
          name: 'overview-construction.jpg',
        },
      },
      {
        path: 'education',
        name: '民生教育',
        component: BgImg,
        props: {
          name: 'overview-education.jpg',
        },
      },
      {
        path: 'medical',
        name: '民生医疗',
        component: BgImg,
        props: {
          name: 'overview-medical.jpg',
        },
      },
      {
        path: 'traffic',
        name: '交通畅行',
        component: BgImg,
        props: {
          name: 'overview-traffic.jpg',
        },
      },
      {
        path: 'innovation',
        name: '创新转型',
        component: BgImg,
        props: {
          name: 'overview-innovation.jpg',
        },
      },
      {
        path: 'data-analysis',
        name: '数据分析',
        component: BgImg,
        props: {
          name: 'overview-data-analysis.jpg',
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
  },
  {
    path: '/strength',
    name: '实力六横',
  },
  {
    path: '/charm',
    name: '魅力六横',
  },
];
