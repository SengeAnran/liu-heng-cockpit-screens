<template>
  <div class="wrapper">
    <div v-for="(item, index) in datalist" :key="index" class="wrapper-box">
      <p class="first" :style="'color:' + fontColor">
        <span>
          <CountUp  :num="item.value ? Number(item.value) : 0" />
        </span>
        <span>{{ item.unit }}</span>
      </p>
      <p class="second">{{ item.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    datalist: {
      type: Array,
      default: () => [
        { name: '高龄老人', value: '253', unit: '人' },
        { name: '残疾老人', value: '43', unit: '人' },
        { name: '困难老人', value: '44', unit: '人' },
        { name: '空巢老人', value: '35', unit: '人' },
        { name: '孤寡老人', value: '123', unit: '人' },
      ],
    },
    fontColor: {
      type: String,
      default: () => 'rgba(119, 248, 196, 1)',
    },
  },
};
</script>
<style lang="scss" scoped>
*{
  padding: 0 ;
  margin: 0;
}
.wrapper {
  width: 100%;
  height: 100%;
  padding: 1.6rem;
  background: linear-gradient(180deg, rgba(22, 40, 47, 0.8), rgba(16, 31, 37, 0.8));
  border-radius: 1rem;
  border: 1px solid rgba(168, 247, 237, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  .wrapper-box {
    width: 14.1rem;
    height: 16.5rem;
    background: linear-gradient(180deg, rgba(22, 40, 47, 0.8), rgba(16, 31, 37, 0.8));
    border: 0.1px solid rgba(168, 247, 237, 0.2);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .first {
      span:nth-child(1) {
        font-size: 4.8rem;
      }
      span:nth-child(2) {
        font-size: 2.4rem;
      }
    }
    .second {
      font-size: 2.4rem;
      color: rgba(255, 255, 255, .7);
    }
  }
}
</style>
