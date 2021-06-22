<template>
  <div class="popup">
    hello world
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
  computed: {
    name() {
      return this.feature?.properties?.name || 'world';
    },
  },
  mounted() {
    console.log('mounted');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
};
</script>
<style lang="scss" scoped>
.popup {
  // color: #fff;
}
</style>
