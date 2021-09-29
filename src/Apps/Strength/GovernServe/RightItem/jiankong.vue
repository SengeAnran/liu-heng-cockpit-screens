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
          name: '便民服务中心东侧2',
          date: new Date(),
          id: 1,
          url: '91e3249dfb0a4b149a552fc37c519628',
        },
        {
          name: '指挥大厅西侧枪机',
          date: new Date(),
          id: 0,
          url: '906c8d7cfa024dc4b128d69b6eb0457c',
        },
        {
          name: '积峙路口2',
          date: new Date(),
          id: 2,
          url: 'bdc985fd4dfc4ad287f4be1709294083',
        },
        {
          name: '积峙路口1',
          date: new Date(),
          id: 3,
          url: 'b8abcdc9c4964a5e9c5b844b45db06d7',
        },
        {
          name: '上长途路口2',
          date: new Date(),
          id: 4,
          url: 'b6f2317b1102410693c6548bc3efff2c',
        },
        {
          name: '上长途路口1',
          date: new Date(),
          id: 5,
          url: '139127b56e914ead9dcd101f88e2e6cd',
        },
        {
          name: '金田水产转角处',
          date: new Date(),
          id: 6,
          url: 'c19355c124fe4a5b94ddbe0d273f8378',
        },
        {
          name: '田岙避风塘',
          date: new Date(),
          id: 7,
          url: '5fdad53305264b14a2fe1b65fcd80208',
        },
        {
          name: '草盘码头枪机',
          date: new Date(),
          id: 8,
          url: '65d83d7565e1477fb4bd7ca299a07b47',
        },
        {
          name: '草盘码头球机',
          date: new Date(),
          id: 9,
          url: 'cd1a014655b14a5fa02122ec6e2d9718',
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