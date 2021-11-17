<template>
  <div class="DataAnalysis">
      <div style="width:5760px;height:1100px;overflow:hidden;border:0px">
          <iframe
            :src="getPageUrl"
            width="10000px"
            height="1100px"
            ref="iframeDom"
          ></iframe>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DataAnalysis',
  components: {},
  data() {
    return {
      // getPageUrl: 'http://10.25.17.237:18155/wydataeye/static/datamap/html/autoIndex.html',
      getPageUrl: 'http://172.16.17.119:8081/#/',
    };
  },
  mounted() {
    console.log(this.$refs.iframeDom)
  }
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
