<template>
  <div class="popup">
    <div class="scroll">
      <h3>公司名称：{{ name }}</h3>
      <div class="desc">公司地址： {{ address }}</div>
      <div class="desc">控制级别：{{ jibei }}</div>
      <div class="desc">PH值： {{ ph }}</div>
      <div class="desc">化学需氧量: {{ hy }}</div>
      <div class="desc">氨氮: {{ NHN }}</div>
      <div class="desc">总磷：{{ allP }}</div>
      <div class="desc">总氮： {{ allN }}</div>
      <div class="desc">排放口编号: {{ paifangbianhao }}</div>
      <div class="desc">废水顺时流量: {{ feishui }}</div>
    </div>
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
    return { age: undefined };
  },
  computed: {
    name() {
      return this.feature?.properties?.name || this.feature?.properties?._parentProperities?.name || '';
    },
    address() {
      return this.feature?.properties?.address || this.feature?.properties?._parentProperities?.address || '';
    },
    jibei() {
      return this.feature?.properties?.jibei || this.feature?.properties?._parentProperities?.jibei || '';
    },
    ph() {
      return this.feature?.properties?.ph || this.feature?.properties?._parentProperities?.ph || '';
    },
    hy() {
      return this.feature?.properties?.hy || this.feature?.properties?._parentProperities?.hy || '';
    },
    NHN() {
      return this.feature?.properties?.NHN || this.feature?.properties?._parentProperities?.NHN || '';
    },
    allP() {
      return this.feature?.properties?.allP || this.feature?.properties?._parentProperities?.allP || '';
    },
    allN() {
      return this.feature?.properties?.allN || this.feature?.properties?._parentProperities?.allN || '';
    },
    paifangbianhao() {
      return (
        this.feature?.properties?.paifangbianhao || this.feature?.properties?._parentProperities?.paifangbianhao || ''
      );
    },
    feishui() {
      return this.feature?.properties?.feishui || this.feature?.properties?._parentProperities?.feishui || '';
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
  white-space: normal;
  background: rgba(8, 15, 22, 0.8);
  border: 1px solid rgba(255, 192, 78, 0.4);
  color: #fff;
  padding: 3rem 4rem;
  min-width: 54rem;
  .scroll {
    overflow: auto;
    max-height: 50rem;
  }
  h3 {
    font-size: 3.4rem;
    color: #abfdfe;
    margin: 2rem 0;
    margin-top: 0rem;
  }
  .desc {
    font-size: 2.5rem;
    font-weight: 400;
    color: #ffffff;
    white-space: pre-wrap;
  }
}
</style>
