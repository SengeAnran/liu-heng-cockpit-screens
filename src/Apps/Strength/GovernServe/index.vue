<template>
  <div class="GovernServe">
    <Left/>
    <Map/>
    <Right/>
  </div>
</template>

<script>
import Left from './Left';
import Map from './Map';
import Right from './Right';

export default {
  name: 'GovernServe',
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
.GovernServe{
  width: 100%;
  height: 2070px;
  background-position: center;
  background: url('./img/bg.png') no-repeat 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
