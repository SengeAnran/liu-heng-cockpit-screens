<!-- app-title -->
<template>
  <div class="AppTitle-root">
    <img src="@/assets/images/app-title.png" />
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
};
</script>

<style lang="scss" scoped>
.AppTitle-root {
  position: absolute;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 134px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
