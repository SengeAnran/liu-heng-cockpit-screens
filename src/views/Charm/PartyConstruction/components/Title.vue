<template>
  <div class="section-title">
    <span class="title-arrow">
      <img src="@/assets/images/Charm/title-icon.png">
    </span>
    <span class="title-content">{{title}}</span>
  </div>
</template>
<script>
export default {
  props: ['title'],
};
</script>
<style lang="scss" scoped>
.section-title{
  width: 100%;
  line-height: 6.4rem;
  height: 6.4rem;
  background: linear-gradient(to right, rgba(68, 150, 225, .3) 0%, rgba(68, 150, 225, 0) 100%);
  color: #fff;
  font-size: 3.2rem;
  padding: 0 2rem;
  .title-arrow{
    display: inline-block;
    width: 4rem;
    img{
      width: 100%;
    }
  }
}
</style>
