<template>
  <div class="BaseTitle" :style="{width:width+'px'}">
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
    width: {
      type: Number,
      default: () => 1650,
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
.BaseTitle {
  width: 100%;
  height: 63px;
  line-height: 63px;
  background: url('../images/title-bg.png') no-repeat;
  font-size: 32px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  position: absolute;
  padding-left: 72px;
}

</style>
