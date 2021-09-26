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
        {
          name: '积峙路口2',
          date: new Date(),
          id: 2,
          url: '33090305001310806361',
        },
        {
          name: '积峙路口1',
          date: new Date(),
          id: 3,
          url: '33090305001310837996',
        },
        {
          name: '上长途路口2',
          date: new Date(),
          id: 4,
          url: '33090305001310275678',
        },
        {
          name: '上长途路口1',
          date: new Date(),
          id: 5,
          url: '33090305001310465037',
        },
        {
          name: '金田水产转角处',
          date: new Date(),
          id: 6,
          url: '33090305001310889242',
        },
        {
          name: '田岙避风塘',
          date: new Date(),
          id: 7,
          url: '33090305001310863452',
        },
        {
          name: '草盘码头枪机',
          date: new Date(),
          id: 8,
          url: '33090305001310582797',
        },
        {
          name: '草盘码头球机',
          date: new Date(),
          id: 9,
          url: '33090305001310103522',
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
        {
          name: '小岙码头',
          date: new Date(),
          id: 2,
          url: '33090305001310451869',
        },
        {
          name: '小湖码头',
          date: new Date(),
          id: 3,
          url: '33090305001310406048',
        },
        {
          name: '涨起港渔业码头',
          date: new Date(),
          id: 4,
          url: '33090305001310108434',
        },
        {
          name: '台门铜盘桥旁码头',
          date: new Date(),
          id: 5,
          url: '33090305001310500280',
        },
        {
          name: '长涂码头',
          date: new Date(),
          id: 6,
          url: '33090305001310657173',
        },
        {
          name: '大岙码头',
          date: new Date(),
          id: 7,
          url: '33090305001310614882',
        },
        {
          name: '白马礁码头',
          date: new Date(),
          id: 8,
          url: '33090305001310689703',
        },
        {
          name: '大夹屯码头',
          date: new Date(),
          id: 9,
          url: '33090305001310056690',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.right-2 {
  position: absolute;
  top: 20.4rem;
  right: 16rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
