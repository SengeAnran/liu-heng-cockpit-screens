<template>
  <div class="public-voice">
    <Left1 />
    <Left2 />
    <Right />
    <Map/>
  </div>
</template>
<script>
import Left1 from './Left1';
import Left2 from './Left2';
import Right from './Right';
import Map from './Map';

export default {
  components: {
    Left1,
    Left2,
    Right,
    Map,
  },
};
</script>
<style lang="scss" scoped>
.public-voice {
  position: fixed;
  top: 0;
  width: 100%;
  height: 135rem;
  // background: url('./bg.webp');
}
</style>
