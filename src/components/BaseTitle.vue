<template>
  <div class="base-title">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'BaseTitle',
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.base-title {
  width: 782px;
  height: 63px;
  line-height: 63px;
  background: url('../assets/images/title.png') no-repeat;
  font-size: 32px;
  font-weight: 500;
  color: #ffffff;
  padding-left: 72px;
}
</style>
