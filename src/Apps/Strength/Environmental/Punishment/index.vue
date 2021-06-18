<template>
  <div class="punishment">
    <BaseTitle title="行政处罚" />
    <div class="bar-box">
      <BarItem v-for="(item, index) in list" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import BarItem from '../components/barItem';
export default {
  name: 'Punishment',
  components: {
    BarItem,
  },
  data() {
    return {
      list: [
        { name: '下达限改', number: 50 },
        { name: '行政处罚', number: 40 },
        { name: '立案查处', number: 30 },
        { name: '罚款金额', number: 20 },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.punishment {
  position: absolute;
  right: 125px;
  top: 805px;
  width: 835px;
  height: 535px;
  .bar-box {
    height: 400px;
  }
}
</style>
