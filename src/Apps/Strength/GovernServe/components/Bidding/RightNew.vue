<template>
  <div class="right">
    <div>
      <BaseTitle title="招标项目" table-width="1650px" />
        <BiddingProject></BiddingProject>
    </div>
  </div>
</template>

<script>
import BiddingProject from './RightItem/BiddingProject';

export default {
  components: { BiddingProject },
};
</script>


<style lang="scss" scoped>
.right {
  position: absolute;
  top: 200px;
  right: 160px;
  width: 1650px;
  height: 1027px;
  font-size: 24px;
  display: flex;
  color: #fff;
  z-index: 999;
}
//.yuedu {
//  position: absolute;
//  top: 500px;
//  margin-top: 51px;
//}

</style>
