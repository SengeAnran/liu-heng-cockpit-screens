import Container from '@/components/Container';

export default [
  {
    path: '/overview',
    name: '六横总览',
    component: Container,
    children: [
      {
        path: 'city-evolution',
        name: '城市变迁',
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
        name: '教育一张图',
        component: () => import('@/Apps/Overview/CityEvolution'),
      },
      {
        path: 'medical',
        name: '医疗一张图',
        component: () => import('@/Apps/Overview/CityEvolution'),
      },
      {
        path: 'traffic',
        name: '交通一张图',
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
];
