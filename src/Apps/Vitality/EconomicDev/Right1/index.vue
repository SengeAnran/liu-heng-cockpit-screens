<template>
  <div class="right-1">
    <Title>人口经济情况</Title>
    <Indicators :list="list" />
    <Line1 />
    <Line2 />
  </div>
</template>
<script>
import Title from '../Title';
import Indicators from './Indicators';
import Line1 from './Line1';
import Line2 from './Line2';

export default {
  data() {
    return {
      list: [
        { name: '全年GDP', value: 4820, unit: '万元' },
        { name: '人均可支配收入', value: 6920, unit: '元' },
      ],
    };
  },
  components: {
    Title,
    Indicators,
    Line1,
    Line2,
  },
};
</script>
<style lang="scss" scoped>
.right-1 {
  position: absolute;
  top: 26rem;
  right: 101rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
