<template>
  <div class="popup">
    <input type="text" v-model="age">
    hello world {{ age }}
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
      return this.feature?.properties?.name || 'world';
    },
  },
  mounted() {
    console.log('mounted', this.feature);
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
};
</script>
<style lang="scss" scoped>
.popup {
  color: red;
}
</style>
