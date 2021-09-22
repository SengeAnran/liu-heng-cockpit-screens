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
          name: '邬家红绿灯监控',
          date: new Date(),
          id: 0,
          url: '33090305011321460328',
        },
        {
          name: '世大梅线与六横路叉口监控位',
          date: new Date(),
          id: 1,
          url: '33090305741324711954',
        },
      ],
      videoList2: [
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
