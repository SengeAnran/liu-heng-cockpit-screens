<template>
  <div class="popup">
    <div class="scroll">
      <h3>{{ name }}</h3>
      <div class="desc">
        {{ desc }}
      </div>
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
</style>
