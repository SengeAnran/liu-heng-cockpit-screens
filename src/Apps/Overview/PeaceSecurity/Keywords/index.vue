<template>
  <div class="key-words">
    <BaseTitle title="关键词词云" />
    <div class="show-box">
      <div
        ref="rollItem"
        v-for="(item, index) of list"
        :key="index">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { getKeyWords } from '@/api/Overview/PeaceSecurity/api';
export default {
  name: 'Keywords',
  data() {
    return {
      list: [
        // '健康码', '无停车位', '食品安全', '交通拥堵', '景色很差', '抢劫', '疫情', '环境卫生很差', '乱扔垃圾'
      ],
    };
  },
  components: {
  },
  created() {
    this.loadData();
  },
  mounted() {
  },
  methods: {
    async loadData() {
      const res = await getKeyWords().request();
      res.forEach((item) => {
        this.list.push({
          name: item.yc,
          number: item.ycsz,
          percentage: item.ycbfb,
        });
      });
      console.log(this.$refs.rollItem);
      // this.init();
      setTimeout(() => {
        this.init();
      }, 500);
    },
    init() {
      const ele = this.$refs.rollItem;
      console.log(ele);
      ele.forEach((item, index) => {
        const randomTop = Math.random() * 80;
        const randomDelay = Math.random() * 20;
        item.style.top = `${randomTop}%`;
        item.style.animationDelay = `-${randomDelay}s`;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.key-words {
  position: absolute;
  right: 160px;
  top: 705px;
  width: 1650px;
  height: 535px;
  .show-box {
    position: absolute;
    left: 13px;
    top: 106px;
    width: 1622px;
    height: 330px;
    perspective: 800px;
    background: url('./img/box-bg.png');
    >div {
      display: inline-block;
      position: absolute;
      white-space: nowrap;
      animation: rotateAnimate 10s infinite linear;
      font-size: 50px;
      color: #fff;
      font-weight: bold;
    }
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
