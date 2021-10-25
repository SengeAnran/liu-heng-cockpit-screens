<template>
  <div class="right-2">
    <Title>道路监控</Title>
    <Monitor v-if="show" :videoList="videoList1" />
    <Title>道路监控</Title>
    <Monitor v-if="show" :videoList="videoList2" />
  </div>
</template>
<script>
import Title from './Title';
import Monitor from '../Monitor';
// import Table from './Table';
import {
  getRoadMonitor,
} from '@/api/Overview/Traffic';
export default {
  components: {
    Title,
    Monitor,
    // Table,
  },
  data() {
    return {
      // url1: '33090305141323030002',
      // url2: '33090462081310237534',
      videoList1: [
        // {
        //   name: '大岙码头监控位',
        //   date: new Date(),
        //   id: 0,
        //   url: '33090305741324711954',
        // },
        // {
        //   name: '世大梅线与六横路叉口监控位',
        //   date: new Date(),
        //   id: 1,
        //   url: '33090305741324711954',
        // },
        // {
        //   name: '积峙路口2',
        //   date: new Date(),
        //   id: 2,
        //   url: 'bdc985fd4dfc4ad287f4be1709294083',
        // },
        // {
        //   name: '积峙路口1',
        //   date: new Date(),
        //   id: 3,
        //   url: 'b8abcdc9c4964a5e9c5b844b45db06d7',
        // },
        // {
        //   name: '上长途路口2',
        //   date: new Date(),
        //   id: 4,
        //   url: 'b6f2317b1102410693c6548bc3efff2c',
        // },
        // {
        //   name: '上长途路口1',
        //   date: new Date(),
        //   id: 5,
        //   url: '139127b56e914ead9dcd101f88e2e6cd',
        // },
        // {
        //   name: '金田水产转角处',
        //   date: new Date(),
        //   id: 6,
        //   url: 'c19355c124fe4a5b94ddbe0d273f8378',
        // },
        // {
        //   name: '田岙避风塘',
        //   date: new Date(),
        //   id: 7,
        //   url: '5fdad53305264b14a2fe1b65fcd80208',
        // },
        // {
        //   name: '草盘码头枪机',
        //   date: new Date(),
        //   id: 8,
        //   url: '65d83d7565e1477fb4bd7ca299a07b47',
        // },
        // {
        //   name: '草盘码头球机',
        //   date: new Date(),
        //   id: 9,
        //   url: 'cd1a014655b14a5fa02122ec6e2d9718',
        // },
      ],
      videoList2: [
        // {
        //   name: '涨起港渔业码头',
        //   date: new Date(),
        //   id: 4,
        //   url: 'b3bdc6a7f0b6428b98e5aa829f4dfab8',
        // },
        // {
        //   name: '危险品企业监控',
        //   date: new Date(),
        //   id: 0,
        //   url: '33090462081310237534',
        // },
        // {
        //   name: '邬家红绿灯监控',
        //   date: new Date(),
        //   id: 1,
        //   url: '33090305011321460328',
        // },
        // {
        //   name: '小岙码头',
        //   date: new Date(),
        //   id: 2,
        //   url: '184ffec5e907448cb08183cb78b25b7c',
        // },
        // {
        //   name: '小湖码头',
        //   date: new Date(),
        //   id: 3,
        //   url: '656dcb6572e64b80ba72eae5f85a6374',
        // },
        //
        // {
        //   name: '台门铜盘桥旁码头',
        //   date: new Date(),
        //   id: 5,
        //   url: '14453867ed86468c928080116b0cde7b',
        // },
        // {
        //   name: '长涂码头',
        //   date: new Date(),
        //   id: 6,
        //   url: '529e71af30c248fca7077b76000395e0',
        // },
        // {
        //   name: '大岙码头',
        //   date: new Date(),
        //   id: 7,
        //   url: '2e9a660f4d714a4eb865e3c16017c38c',
        // },
        // {
        //   name: '白马礁码头',
        //   date: new Date(),
        //   id: 8,
        //   url: '9c5e8fe654c04d8d81f664d081af8aeb',
        // },
        // {
        //   name: '大夹屯码头',
        //   date: new Date(),
        //   id: 9,
        //   url: '06cb5d5268cd44aeae4c0fef04f0dac7',
        // },
      ],
      show: false,
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.getRoadMonitor();
    },
    // 道路监控
    async getRoadMonitor() {
      const res = await getRoadMonitor();
      let videoList1 = 0;
      let videoList2 = 0;
      res.forEach((item, index) => {
        if (item.ckbh === '7') {
          this.videoList1.push({
            name: item.jkdmc,
            date: new Date(),
            id: videoList1,
            url: item.jkdnm,
          });
          videoList1++;
        }
        if (item.ckbh === '8') {
          this.videoList2.push({
            name: item.jkdmc,
            date: new Date(),
            id: videoList2,
            url: item.jkdnm,
          });
          videoList2++;
        }
      });
      this.show = true;
    },
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
