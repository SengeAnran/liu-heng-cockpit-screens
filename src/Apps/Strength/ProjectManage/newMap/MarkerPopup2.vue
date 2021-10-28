<template>
<!--  <div class="popup">-->
<!--    -->
<!--&lt;!&ndash;    <div class="scroll">&ndash;&gt;-->
<!--&lt;!&ndash;      <h3>{{ name }}</h3>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="desc">&ndash;&gt;-->
<!--&lt;!&ndash;        &ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--  </div>-->
  <div class='info'>
    <div>{{name}}:</div>
    <div>地区生产总值: {{feature.properties.dqsczz}}</div>
    <div>固定资产投资: {{feature.properties.gdzctz}}</div>
    <div>港口货物吞吐量: {{feature.properties.gkhwttl}}</div>
    <div>外贸进出口总额: {{feature.properties.wmjckze}}</div>
    <div>财政总收入: {{feature.properties.czzsr}}</div>
    <div>规上企业数: {{feature.properties.gsqys}}</div>
    <div>渔农业总产值: {{feature.properties.ynyzz}}</div>
  </div>
</template>
<script>
export default {
  props: {
    feature: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      age: undefined,
    };
  },
  computed: {
    name() {
      return this.feature?.properties?.name || this.feature?.properties?._parentProperities?.name || '';
    },
    desc() {
      return this.feature?.properties?.desc || this.feature?.properties?._parentProperities?.desc || '';
    },
  },
  // mounted() {
  //   console.log('mounted111', this.feature);
  // },
  // beforeDestroy() {
  //   console.log('beforeDestroy');
  // },
};
</script>
<style lang="scss" scoped>
.popup {
  //white-space: normal;
  //background: rgba(8, 15, 22, 0.8);
  //border: 1px solid rgba(255, 192, 78, 0.4);
  //color: #fff;
  //padding: 3rem 4rem;
  //min-width: 54rem;
  .scroll {
    overflow: auto;
    max-height: 50rem;
  }
  h3 {
    font-size: 3.4rem;
    color: #ABFDFE;
    margin: 2rem 0;
    margin-top: 0rem;
  }
  .desc {
    font-size: 2.5rem;
    font-weight: 400;
    color: #FFFFFF;
    white-space: pre-wrap;
  }
}
.info {
  position: relative;
  z-index: 999;
  width: 374px;
  height: 432px;
  padding: 10px;
  background: url('./img/info.png');
  box-sizing: border-box;
  color: #fff;

  > div {
    font-size: 26px;
    font-family: 'Source Han Sans SC';
    margin-top: 15px;
    margin-left: 10px;

    &:nth-child(1) {
      font-size: 28px;
      color: #00ffff;
    }
  }
}
</style>
