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
      url1: '33090305141323030002',
      url2: '33090462081310237534',
      videoList1: [
        {
          name: '沙岙红绿灯监控位',
          date: new Date(),
          id: 0,
          url: '33090305141323030002',
        },
        {
          name: '世大梅线与六横路叉口监控位',
          date: new Date(),
          id: 1,
          url: '33090462081310237534',
        },
      ],
      videoList2: [
        {
          name: '台门台台线终点叉口监控位',
          date: new Date(),
          id: 0,
          url: '33090462081310237534',
        },
        // {
        //   name: '邬家红绿灯监控',
        //   date: new Date(),
        //   id: 1,
        //   url: '33090305141323030002',
        // },
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
