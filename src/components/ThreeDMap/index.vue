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
    polygonList: {
      type: Array,
      default: () => {}
    },
    multiLineList: {
      type: Array,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    Scale: {
      type: Number,
      default: 1.3
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
  watch: {
    dataList() {
      this.sritMap.clear();
      this.drawMarker();
    }
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
          // console.log(this.Scale);
          if (this.polygonList && this.polygonList.length > 0) {
            this.drawPolygon();
            setTimeout(() => {
              this.drawMarker();
            },5000)
          } else if (this.multiLineList && this.multiLineList.length > 0) {
            console.log('画线');
            this.drawLines();
          } else {
            this.drawMarker();
          }
          // this.displayRange();
        },
      });
    },
    // 显示范围
    displayRange() {
      const extent =this.sritMap.getExtent();
      this.sritMap.zoomToExtent([extent.xmin,extent.ymin,extent.xmax,extent.ymax])
    },
    drawMarker() { // 打点
      var jsondata = this.dataList;
      this.markers = this.sritMap.marker(jsondata, { "image": "images/markerHB.png" },
        {
          // is3D: true,
          isZoom: true,
          cluster: false,
          // highlightStyle: {
          //   "image": "images/RedPin1LargeB.png"
          // },
          zoomFactor: this.Scale, // 针对缩放的范围比例因子,默认值为0.1,即缩放范围增大0.1倍
          title: this.title,
          tipTemplate: this.tipTemplate,
        });
      // console.log('markers');
      console.log(this.markers);
    },
    drawPolygon() { // 画面
      this.polygonList.forEach((item) => {
        console.log(item);
        const points = item.points;
        const data = {...item}
        // console.log(data);
        const polygonType = {style: 0, color: "#0080c088", outlineColor: "#ff0", outlineWidth: 1 };
        this.markers = this.sritMap.addPolygon(points, polygonType,
          {
            isZoom: true,
            cluster: false,
            disableInfoWindow: false,
            // zoomFactor: this.Scale, // 针对缩放的范围比例因子,默认值为0.1,即缩放范围增大0.1倍
            title: this.title,
            tipTemplate: this.tipTemplate,
            attrs: data,
          });
      })

      // console.log('markers');
      // console.log(this.markers);
    },
    drawLines() { // 画线
      this.multiLineList.forEach((item) => {
        console.log(item);
        const points = item.points;
        const data = {...item}
        console.log(points);
        const polygonType = { style: 0, color: "#ffff00", width: 3.0 };
        this.markers = this.sritMap.addPolyline(points, polygonType,
          {
            isZoom: true,
            // cluster: false,
            disableInfoWindow: false,
            // // zoomFactor: this.Scale, // 针对缩放的范围比例因子,默认值为0.1,即缩放范围增大0.1倍
            // title: this.title,
            tipTemplate: this.tipTemplate,
            attrs: data,
          });
      })
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
