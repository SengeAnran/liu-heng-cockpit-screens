<template>
  <div ref='container' id='container' :style="{ transform: `scale(${scaleX}, ${scaleY})` }">
  </div>
</template>

<script>
// import './css/main.css';
export default {
  props: {
    dataList: {
      type: Array,
      default: () => {}
    },
    tipTemplate: {
      type: Object,
      default: () => {}
    }
  },
  name: 'index',
  data() {
    return {
      map: this.$refs.container,
      markers: null,
      sritMap: null,
      scaleX: 1,
      scaleY: 1,
    };
  },
  mounted() {

    this.initMap();
    const handleScale = (scaleX, scaleY) => {
      this.scaleX = 1 / scaleX;
      this.scaleY = 1 / scaleY;
    }
    window.globalScale.add(handleScale);
    this.$once('hook:beforeDestroy', () => {
      window.globalScale.remove(handleScale);
    });
  },
  methods: {
    initMap() {
      // new Map(id: string div的编号, config?: any 主配置文件, 或者用户信息及rest服务地址, options?: any 地图配置选项):
      this.sritMap = new Srit.Map('container', {
        onload: () => { // 地图准备就绪
          console.log('onload');
          this.drawMarker();
        },
      });
    },
    drawMarker() { // 打点
      var jsondata = [
        { x: 122.12616955240874, y: 29.745451506244246, z: 100, 层高: 100, 层数: "19", 编号: "183445", 楼名: "弘燕名居", 地址: "东大路386号", 建筑年代: '2009年', 开发商: '北京朝阳房地产开发集团有限公司' },
        { x: 122.12567042146035, y: 29.74666313560775, z: 85.498019, 层高: 181.474, 层数: "30", 编号: "168691", 楼名: "北京金港科技创业中心", 地址: "东大路251号", 建筑年代: '2015年', 开发商: '北京朝阳房地产开发集团有限公司' },
        { x: 122.12014029508182, y: 29.743329714900444, z: 83.574, 层高: 84, 层数: "29", 编号: "174131", 楼名: "三里屯国际广场", 地址: "东大路408号", 建筑年代: '2019年', 开发商: '北京朝阳房地产开发集团有限公司' },
        { x: 122.12270983516947, y: 29.74628884912536, z: 180, 层高: 180, 层数: "60", 编号: "187283", 楼名: "朝阳房地产", 地址: "未知", 建筑年代: '2005年', 开发商: '北京朝阳房地产开发集团有限公司' },
        { x: 122.12953326652756, y: 29.74185238895348, z: 214.649, 编号: "188845", 楼名: '锦华大厦', 层数: "74", 地址: '朝阳区东大路289号', 层高: 96, 建筑年代: '2005年', 开发商: '北京朝阳房地产开发集团有限公司' },
        { x: 122.11305276793636, y: 29.78068780505339, z: 95.6932, 编号: "188945", 层数: "40", 楼名: '红庙国际公寓', 地址: '光辉东路红庙村42号', 建筑年代: '2005年', 层高: 57, 开发商: '北京百市置业有限责任公司' }
      ];
      this.markers = this.sritMap.marker(jsondata, { "image": "images/GreenPin1LargeB.png" },
        {
          // is3D: true,
          isZoom: true,
          cluster: false,
          highlightStyle: {
            "image": "images/RedPin1LargeB.png"
          },
          // zoomFactor: 2.5, // 针对缩放的范围比例因子,默认值为0.1,即缩放范围增大0.1倍
          title: '楼盘信息',
          tipTemplate: {
            "编号": "编号",
            "楼名": "楼名",
            // "地址": "地址",
            // "建筑年代": "建筑年代",
            // "层高": "层高",
            // "层数": "层数",
            // "开发商": "开发商"
          },
        });
      // console.log('markers');
      // console.log(this.markers);
    },
    clear() {
      this.sritMap.clear(this.markers);
    },
  },
};
</script>

<style lang='scss' scoped>
#container {
  width: 100vw;
  height: 65.21739vh;
  position: fixed;
  top: 0;
  left: 0;
  transform-origin: top left;
}
</style>
