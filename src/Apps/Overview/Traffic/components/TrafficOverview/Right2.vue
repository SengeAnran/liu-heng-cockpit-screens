<template>
  <div class="right-2">
    <Title>道路监控</Title>
    <Monitor :videoList="videoList1" />
    <Title>道路监控</Title>
    <Monitor :videoList="videoList2" />
  </div>
</template>
<script>
import Title from './Title';
import Monitor from '../Monitor';
// import Table from './Table';

export default {
  components: {
    Title,
    Monitor,
    // Table,
  },
  data() {
    return {
      videoList1: [
        {
          name: '大岙码头监控位',
          date: new Date(),
          id: 0,
          url: '33090305741324711954',
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
          name: '危险品企业监控',
          date: new Date(),
          id: 0,
          url: '33090462081310237534',
        },
        {
          name: '邬家红绿灯监控',
          date: new Date(),
          id: 1,
          url: '33090305011321460328',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.right-2 {
  position: absolute;
  top: 26.4rem;
  right: 16rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
