<template>
  <div class="DataAnalysis " @click="goPage">
    <div class="mask"></div>
<!--    <iframe-->
<!--      :src="getPageUrl"-->
<!--      width="100%"-->
<!--      height="1100px"-->
<!--      ref="iframeDom"-->
<!--      style="transform-origin: top left; transform: scale(2.9,1)"-->
<!--    ></iframe>-->
    <iframe
      :src="getPageUrl"
      width="100%"
      height="1100px"
      ref="iframeDom"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'DataAnalysis',
  components: {},
  data() {
    return {
      getPageUrl: 'http://10.25.17.237:18155/cas/login?service=http%3A%2F%2F10.25.17.237%3A18155%2Fwydataeye%2Fj_security_check&__t=1637734017419&locale=zh_CN',
      getOpenPageUrl: 'http://10.25.17.237:18155/wydataeye/static/datamap/html/autoIndex.html',
      // getOpenPageUrl: 'https://www.runoob.com/jsref/met-win-open.html',
      features: 'width=1800,height=700,left=50,top=200'
    };
  },
  mounted() {
    this.countStyle();
    window.onresize = () => {
      this.countStyle();
    };
  },
  methods: {
    countStyle() {
      const clientWidth = document.documentElement.clientWidth
      const clientHeight = document.documentElement.clientHeight
      // console.log(document.documentElement);
      // console.log(document.documentElement.clientHeight);
      this.features = 'width=' + clientWidth +
        ',height=' + (parseInt(clientHeight * 0.83)) +
        ',left=' + 0 +
        ',top=' + (parseInt(clientHeight * 0.23));
    },
    goPage() {
      // console.log('click');
      window.open(this.getOpenPageUrl,'_blank',this.features);
    }
  },
};
</script>
<style lang="scss" scoped>
.DataAnalysis {
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 244px 160px 0;
  .mask{
    position: absolute;
    width: 100%;
    height: 1100px;
    z-index: 100;
    cursor: pointer;
    //background: red;
  }
  & > div {
    width: 1650px;
    overflow: hidden;
    & > div {
      height: 502px;
      display: flex;
      flex-direction: column;
      margin-bottom: 45px;
    }
  }
}
</style>
