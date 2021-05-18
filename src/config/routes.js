import Container from '@/components/Container';

export default [
  {
    path: '/overview',
    name: '六横总览',
    component: Container,
    children: [
      {
        path: 'city-evolution',
        name: '历史变迁',
        component: () => import('@/Apps/Overview/CityEvolution'),
      },
      {
        path: 'population',
        name: '人口一张图',
        component: () => import('@/Apps/Overview/CityEvolution'),
      },
      {
        path: 'construction',
        name: '平安建设',
        component: () => import('@/Apps/Overview/CityEvolution'),
      },
      {
        path: 'education',
        name: '民生教育',
        component: () => import('@/Apps/Overview/CityEvolution'),
      },
      {
        path: 'medical',
        name: '民生医疗',
        component: () => import('@/Apps/Overview/CityEvolution'),
      },
      {
        path: 'traffic',
        name: '交通畅行',
        component: () => import('@/Apps/Overview/CityEvolution'),
      },
      {
        path: 'innovation',
        name: '创新转型',
        component: () => import('@/Apps/Overview/CityEvolution'),
      },
      {
        path: 'data-analysis',
        name: '数据分析',
        component: () => import('@/Apps/Overview/CityEvolution'),
      },
    ],
  },
  {
    path: '/emergency',
    name: '三防应急',
  },
  {
    path: '/city-manage',
    name: '城市管理',
  },
  {
    path: '/safety',
    name: '平安六横',
  },
  {
    path: '/production',
    name: '安全生产',
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
