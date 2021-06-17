<template>
  <div class="iCountUp">
    <ICountUp
      :delay="delay"
      :endVal="endVal"
      :options="options"
      @ready="onReady"
    />
  </div>
</template>

<script type="text/babel">
import ICountUp from 'vue-countup-v2';
export default {
  name: 'MyCountUp',
  components: {
    ICountUp,
  },
  props: {
    delay: Number,
    endVal: {
      type: Number,
      required: true,
      default: () => {
        return 100;
      },
    },
    options: {
      type: Object,
      default: () => {
        return {
          useEasing: true,
          useGrouping: true,
          separator: '',
          decimal: '.',
          prefix: '',
          suffix: '',
        };
      },
    },
  },
  watch: {
    endVal() {},
  },
  data() {
    return {
      // options: {
      //   useEasing: true,
      //   useGrouping: true,
      //   separator: "",
      //   decimal: ".",
      //   prefix: "",
      //   suffix: ""
      // }
    };
  },
  methods: {
    onReady: function (instance) {
      const that = this;
      instance.update(that.endVal);
    },
  },
};
</script>

<style scoped lang="scss">
.iCountUp {
  font-size: 48px;
  // margin: 0;
  // display: inline;
}
</style>
