<template>
  <div class="right-1">
    <Title>道路监控</Title>
    <Monitor :videoList="videoList1" />
    <Title>道路监控</Title>
    <Monitor :videoList="videoList2" />
  </div>
</template>
<script>
import Title from './Title';
import Monitor from '../Monitor';

export default {
  components: {
    Monitor,
    Title,
  },
  data() {
    return {
      videoList1: [
        {
          name: '裕顺废品收购站',
          date: new Date(),
          id: 0,
          url: 'f68b6d0d764d4d17bb2c4b1b2d596622',
        },
        {
          name: '恒舟废品收购站',
          date: new Date(),
          id: 1,
          url: 'bd9e6ebea4af4c8699b7167d2571dcfb',
        },
        {
          name: '君兴废品回收站旁',
          date: new Date(),
          id: 2,
          url: '6aa7113fc76e43c1b6972e6f8dd04d57',
        },
        {
          name: '建材市场边废品收购站',
          date: new Date(),
          id: 3,
          url: '863306213a7945caabf6daea8151b361',
        },
        {
          name: '大岙村38号废品收购站',
          date: new Date(),
          id: 4,
          url: '3cd14a1b05c14c25abb99cf6c080fb66',
        },
        {
          name: '小湖渔业村废品收购站',
          date: new Date(),
          id: 5,
          url: 'd7b877fb5b1545e4a5d65daf963c4c9a',
        },
        {
          name: '里湾废品收购站',
          date: new Date(),
          id: 6,
          url: '622b03d1092d44d48c528462294a543d',
        },
        {
          name: '张家塘废品收购站',
          date: new Date(),
          id: 7,
          url: 'bade28f4e7044f3a849694d44746e5a5',
        },
        {
          name: '利君废品收购站',
          date: new Date(),
          id: 8,
          url: '3cbc1047fdd04f49817a4e6d474651cb',
        },
        {
          name: '海运重工斜对面废品收购站',
          date: new Date(),
          id: 9,
          url: '9a1585ef2fa54243bab8fa741e030dba',
        },
      ],
      videoList2: [
        {
          name: '养殖场2',
          date: new Date(),
          id: 3,
          url: '19242b90ce854e5ba7a106f55cdfb3fe',
        },
        {
          name: '养殖场1',
          date: new Date(),
          id: 4,
          url: '2f7af3aa2dce41e090752336b201ffe2',
        },
        {
          name: '沙岙码头售票厅',
          date: new Date(),
          id: 5,
          url: 'c055afdeba9647a9b0338248c550dae1',
        },
        {
          name: '大脉坑十字路口1',
          date: new Date(),
          id: 6,
          url: '964fd61785864517859dba2fdfa59108',
        },
        {
          name: '大脉坑十字路口3',
          date: new Date(),
          id: 7,
          url: '4b81d8af5438494b99d64fc18a2825e2',
        },
        {
          name: '大脉坑十字路口2',
          date: new Date(),
          id: 8,
          url: 'c053cd79589743faa64e81ba9e90f09e',
        },
        {
          name: '万金路口2',
          date: new Date(),
          id: 9,
          url: '9da4f0e776244e3989706b0103c93402',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.right-1 {
  position: absolute;
  top: 20.4rem;
  right: 100rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
