<template>
  <div class="DataAnalysis">
    <iframe
      name="iframeMap"
      id="iframeMapViewComponent"
      v-bind:src="getPageUrl"
      width="100%"
      height="1100px"
      frameborder="0"
      scrolling="no"
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
      getPageUrl:
        'http://10.25.17.237:18155/wydataeye/static/datamap/html/autoIndex.html?ticket=ST-2347-VXABoKcLo7DVsuC166nR-cdsf-bigdata',
    };
  },
};
</script>
<style lang="scss" scoped>
.DataAnalysis {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 244px 160px 0;
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
