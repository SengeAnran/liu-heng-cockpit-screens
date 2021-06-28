<template>
  <div class="right_component">
    <GdpIncrease />
    <FinanceIncome />
    <IndustrialOutput />
    <TravelIncome />
  </div>
</template>

<script>
import GdpIncrease from './component/GdpIncrease';
import FinanceIncome from './component/FinanceIncome';
import IndustrialOutput from './component/IndustrialOutput';
import TravelIncome from './component/Travelncome';
export default {
  name: 'RightComponents',
  components: {
    GdpIncrease,
    FinanceIncome,
    IndustrialOutput,
    TravelIncome,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.right_component {
  position: absolute;
  width: 1700px;
  height: 1100px;
  top: 240px;
  right: 140px;
  z-index: 100;
}
</style>
