<template>
  <div class="CreateIsland">
    <secondary-title name="六横镇人才专利发明证书" />
    <div class="container">
      <div class="item" :key="index" v-for="(item,index) in 12">
        <img src="../images/temp.png" />
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
export default {
  components: {
    SecondaryTitle,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  .item {
    width: 380px;
    height: 214px;
    &:nth-child(2n + 1) {
      margin-right: 40px;
      margin-bottom: 26px;
    }
  }
}
</style>
