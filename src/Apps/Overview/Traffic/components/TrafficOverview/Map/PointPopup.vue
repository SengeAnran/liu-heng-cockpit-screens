<template>
  <div class="popup">
    <div style="margin-bottom: 2rem">
      {{ name }}
    </div>
    <div class="content1" v-if="feature.properties.content">
      {{ feature.properties.content }}
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
      return this.feature?.properties?.name || '';
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
  background: rgba(6, 27, 44, 0.8);
  border: 2px solid #a5e0ff;
  color: #fff;
  font-size: 4rem;
  padding: 2rem 4rem;
  cursor: pointer;
  margin-bottom: 4rem;
  // border: 1px solid #00f;
  // height: 400px;
  width: auto;
  overflow: auto;
  word-wrap: break-word;
}
.content1 {
  width: 1000px;
  // border: 1px solid #00f;
  word-wrap: break-word;
}
</style>
