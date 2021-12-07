<template>
  <div class="govern-serve">
    <transition name="slide" appear> <Left :key="Left" /></transition>
    <Map />
    <transition name="slide1" appear> <Right :key="Right" /></transition>
  </div>
</template>

<script>
import Left from './LeftNew';
import Map from './Map';
import Right from './RightNew';

export default {
  // name: 'GovernServe',
  components: { Left, Map, Right },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import url('../../../../../transform.css');
.govern-serve {
  width: 100%;
  height: 2070px;
  background-position: center;
  // background: url('./img/bg.png') no-repeat 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
