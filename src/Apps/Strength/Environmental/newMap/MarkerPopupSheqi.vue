<template>
  <div class="popup">
    <div class="scroll">
      <h3>公司名称：{{ name }}</h3>
      <div class="desc">公司地址： {{ address }}</div>
      <div class="desc">控制级别：{{ jibei }}</div>
      <div class="desc">二氧化硫: {{ so2 }}</div>
      <div class="desc">烟尘: {{ yangcheng }}</div>
      <div class="desc">氨氮: {{ NHN }}</div>
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
    so2() {
      return this.feature?.properties?.so2 || this.feature?.properties?._parentProperities?.so2 || '';
    },
    yangcheng() {
      return this.feature?.properties?.yangcheng || this.feature?.properties?._parentProperities?.yangcheng || '';
    },
    NHN() {
      return this.feature?.properties?.NHN || this.feature?.properties?._parentProperities?.NHN || '';
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
