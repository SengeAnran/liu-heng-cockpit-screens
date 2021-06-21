<template>
  <div class="right-2">
    <Title>人口宏观情况</Title>
    <Indicators :list="list" />
    <Bar />
    <Pie />
  </div>
</template>
<script>
import Title from '../Title';
import Indicators from './Indicators';
import Bar from './Bar';
import Pie from './Pie';

export default {
  data() {
    return {
      list: [
        { name: '常住人口\n数量', value: 113456, unit: '人' },
        { name: '劳动力\n人口数量', value: 17221, unit: '人' },
      ],
    };
  },
  components: {
    Title,
    Indicators,
    Bar,
    Pie,
  },
};
</script>
<style lang="scss" scoped>
.right-2 {
  position: absolute;
  top: 26rem;
  right: 16rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
