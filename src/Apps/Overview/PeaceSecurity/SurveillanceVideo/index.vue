<template>
<div class="surveillanceVideo">
  <BaseTitle title="监控视频" />
  <div class="video">
    <Monitor v-if="show" :videoList="videoList1"/>
    <Monitor v-if="show" :videoList="videoList2"/>
  </div>
  <BaseTitle title="监控视频" />
  <div class="video">
    <Monitor v-if="show" :videoList="videoList3"/>
    <Monitor v-if="show" :videoList="videoList4"/>
  </div>
</div>
</template>

<script>
import {
  getRoadMonitor,
} from '@/api/Overview/Traffic';
import Monitor from './Monitor'
export default {
  name: "index",
  components: {
    Monitor,
  },
  data() {
    return {
      show: false,
      videoList1: [],
      videoList2: [],
      videoList3: [],
      videoList4: [],
    }
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      console.log(221121)
      this.getRoadMonitor();
    },
    // 道路监控
    async getRoadMonitor() {
      const res = await getRoadMonitor();
      let videoList1 = 0;
      let videoList2 = 0;
      let videoList3 = 0;
      let videoList4 = 0;
      res.forEach((item, index) => {
        if (item.ckbh === '10') {
          this.videoList1.push({
            name: item.jkdmc,
            date: new Date(),
            id: videoList1,
            url: item.jkdnm,
          });
          videoList1++;
        }
        if (item.ckbh === '11') {
          this.videoList2.push({
            name: item.jkdmc,
            date: new Date(),
            id: videoList2,
            url: item.jkdnm,
          });
          videoList2++;
        }
        if (item.ckbh === '12') {
          this.videoList3.push({
            name: item.jkdmc,
            date: new Date(),
            id: videoList3,
            url: item.jkdnm,
          });
          videoList3++;
        }
        if (item.ckbh === '13') {
          this.videoList4.push({
            name: item.jkdmc,
            date: new Date(),
            id: videoList4,
            url: item.jkdnm,
          });
          videoList4++;
        }
      });
      this.show = true;
    },
  },
}
</script>

<style lang="scss" scoped>
  .surveillanceVideo {
    position: absolute;
    left: 2017px;
    top: 162px;
    width: 1733px;
    height: 535px;
    .video {
      display: flex;
      min-height: 459px;
      justify-content: space-between;
      //flex-wrap: wrap;
    }
  }
</style>
