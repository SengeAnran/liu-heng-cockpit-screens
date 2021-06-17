<template>
  <div class="Map">
    <div class="box">
      <div class="title">{{ title }}</div>
      <div v-for="(item, index) in list" :key="index">
        <div class="name">
          {{ item.name }}
        </div>
        <div class="number">
          <CountUp :num="item.number" />
          <div class="unit">{{ item.unit }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
      title: '六横政务大厅',
      list: [
        { name: '当前叫号人数：', number: 12, unit: '人' },
        { name: '今日办件数量：', number: 12, unit: '件' },
        { name: '今日办结数量：', number: 12, unit: '件' },
        { name: '今日办理数量：', number: 12, unit: '件' },
        { name: '办事人员：', number: 12, unit: '人' },
      ],
    };
  },
  components: {
  },
};
</script>

<style lang="scss" scoped>
.Map {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  .box {
    background: url(./img/bg-box.png);
    width: 592px;
    height: 463px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px 0 0 100px;
    box-sizing: border-box;
    > div {
      width: 40%;
    }
    > div:nth-child(2) {
      width: 100%;
    }
    .title {
      font-size: 34px;
      font-family: Source Han Sans SC;
      font-weight: bold;
      color: #77ffff;
      width: 100%;
    }
    .name {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #ffffff;
    }
    .number {
      font-size: 30px;
      font-weight: bold;
      color: #77ffff;
      display: flex;
      align-items: center;
      font-family: 'DIN Alternate';
    }
  }
}
</style>
