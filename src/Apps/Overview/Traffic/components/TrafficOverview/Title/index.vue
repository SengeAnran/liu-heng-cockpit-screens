<template>
  <h3><slot /></h3>
</template>
<style lang="scss" scoped>
h3 {
  height: 6.4rem;
  line-height: 6.4rem;
  margin: 0;
  padding-left: 7rem;
  color: #fff;
  font-size: 3.2rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  background: linear-gradient(90deg, rgba(116, 227, 252, 0.2) 0%, rgba(116, 227, 252, 0) 100%);
  position: relative;
  &::before {
    position: absolute;
    content: ' ';
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    width: 3rem;
    height: 2.3rem;
    background: url('./icon.png') no-repeat;
    background-size: 100% 100%;
  }
}
</style>
