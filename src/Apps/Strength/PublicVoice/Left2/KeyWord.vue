<template>
  <div class='show-box'>
    <div
      ref="rollItem"
      v-for="(item, index) of list"
      :key="index">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import economicAPI from '@/api/Strength/PublicVoice';
export default {
  name: 'KeyWord',
  data() {
    return {
      list: [
        { name: '郭巨码头', value: 30 },
        { name: '车渡', value: 28 },
        { name: '大美六横', value: 29 },
        { name: '交通拥堵', value: 32 },
        { name: '健康码', value: 25 },
        { name: '无停车位', value: 26 },
        { name: '乱扔垃圾', value: 22 },
        { name: '食品安全', value: 21 },
        { name: '环境卫生', value: 30 - 12 },
        { name: '疫情', value: 28 - 12 },
        { name: '景色太差', value: 19 - 12 },
        { name: '交通拥堵', value: 32 - 12 },
        { name: '健康码', value: 25 - 12 },
        { name: '无停车位', value: 26 - 12 },
        { name: '乱扔垃圾', value: 22 - 12 },
        { name: '食品安全', value: 21 - 12 },
        { name: '环境卫生', value: 30 - 20 },
        { name: '疫情', value: 28 - 20 },
        { name: '景色太差', value: 19 - 20 },
        { name: '交通拥堵', value: 32 - 20 },
        { name: '健康码', value: 25 - 20 },
        { name: '无停车位', value: 26 - 20 },
        { name: '乱扔垃圾', value: 22 - 20 },
        { name: '食品安全', value: 21 - 20 },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const data = await economicAPI.hotWord();
      // console.log(data);
      if (data) {
        this.list = data.map((d) => ({
          name: d.yc,
          value: d.ycsz,
        }));
      }
      this.init();
    },
    init() {
      const ele = this.$refs.rollItem;
      ele.forEach((item, index) => {
        const randomTop = Math.random() * 80; // 设置top随机数
        const randomDelay = Math.random() * 10; // 设置delay动画延迟随机数
        item.style.top = `${randomTop}%`;
        item.style.animationDelay = `-${randomDelay}s`;
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.show-box{
  margin-top: 3rem;
// outline: 1px solid red;
  perspective: 800px; // 设置元素距离视图的距离
  position: relative;
  height: 40rem;
  >div {
    display: inline-block;
    position: absolute;
    white-space: nowrap; //不换行
    animation: rotateAnimate 10s infinite linear;
    font-size: 50px;
    color: #fff;
    font-weight: bold;
  }
}
@keyframes rotateAnimate {
  0% {
    transform: translate3D(-50%, 0, -400px);
    opacity: 0.4;
    left: -10%;
  }

  25% {
    transform: translate3D(-50%, 0, -600px);
    opacity: 0.2;
    left: 50%;
  }

  50% {
    transform: translate3D(-50%, 0, -400px);
    opacity: 0.4;
    left: 115%;
  }

  75% {
    transform: translate3D(-50%, 0, 0);
    opacity: 1;
    left: 50%;
  }

  100% {
    transform: translate3D(-50%, 0, -400px);
    opacity: 0.4;
    left: -10%;
  }
}

</style>
