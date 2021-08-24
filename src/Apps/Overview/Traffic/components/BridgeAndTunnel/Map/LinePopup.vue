<template>
  <div class="popup">
    {{ name }}
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
  border: 2px solid #A5E0FF;
  white-space: nowrap;
  color: #fff;
  font-size: 4rem;
  padding: 2rem 4rem;
  cursor: pointer;
}
</style>
