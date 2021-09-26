<template>
  <div class="right-1">
    <!-- <Title>道路监控</Title> -->
    <Monitor :videoList="videoList1" />
  </div>
</template>

<script>
import Monitor from '../../../Overview/Traffic/components/Monitor';
export default {
  components: {
    Monitor,
  },
  data() {
    return {
      videoList1: [
        {
          name: '长途客运站监控位',
          date: new Date(),
          id: 0,
          url: '33090305141323030002',
        },
        {
          name: '世大梅线与六横路叉口监控位',
          date: new Date(),
          id: 1,
          url: '33090305741324711954',
        },
        {
          name: '邬家红绿灯监控',
          date: new Date(),
          id: 2,
          url: '33090305011321460328',
        },
        {
          name: '养殖场2',
          date: new Date(),
          id: 3,
          url: '33090305001310432625',
        },
        {
          name: '养殖场1',
          date: new Date(),
          id: 4,
          url: '33090305001310387370',
        },
        {
          name: '沙岙码头售票厅',
          date: new Date(),
          id: 5,
          url: '33090305001310344996',
        },
        {
          name: '大脉坑十字路口1',
          date: new Date(),
          id: 6,
          url: '33090305001310195053',
        },
        {
          name: '大脉坑十字路口3',
          date: new Date(),
          id: 7,
          url: '33090305001310990655',
        },
        {
          name: '大脉坑十字路口2',
          date: new Date(),
          id: 8,
          url: '33090305001310977240',
        },
        {
          name: '万金路口2',
          date: new Date(),
          id: 9,
          url: '33090305001310254207',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.right-1 {
  // border: 1px solid;
  position: absolute;
  top: 6.4rem;
  right: 85rem;
  width: 80rem;
  height: 42rem;
}
</style>