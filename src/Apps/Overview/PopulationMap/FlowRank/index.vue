<template>
  <view-template class="flow-rank">
    <BaseTitle title="户籍人口排名" />
    <div class="bar-chart" @mouseenter="stopAnimation" @mouseleave="startAnimation">
      <Swiper ref="mySwiper" :options="swiperOption">
        <SwiperSlider v-for="(item, index) of list" class="bar-item" :key="`bar-chart${index}`">
          <span class="bar-name">{{ index + 1 }}. {{ item.sqmc }}</span>
          <span :class="['opacity-bar', `opacity-bar-${index}`]">
            <div :style="{width: item.percent}">
              <span :class="['true-bar', { active: index === 0 || index === 1 }]"></span>
            </div>
          </span>
          <span class="total">
            <span class="number">{{ item.zrks }}</span> 人
          </span>
        </SwiperSlider>
      </Swiper>
    </div>
  </view-template>
</template>

<script>
import Swiper from '@/Apps/Overview/Medical/components/Swiper';
import SwiperSlider from '@/Apps/Overview/Medical/components/SwiperSlider';
import { getPopuliationNumRank } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'FlowRank',
  data() {
    return {
      list: [],
      swiperOption: {
        direction: 'vertical',
        speed: 2000,
        loop: true,
        // autoplay: false,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
          // reverseDirection: true
        },
        slidesPerView: 10,
      },
    };
  },
  components: {
    Swiper,
    SwiperSlider,
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getPopuliationNumRank().request().then((json) => {
        if (json) {
          const curData = json.sort((a, b) => b.zrks - a.zrks);
          this.resolveArr(curData);
        }
      });
    },
    resolveArr(data) {
      const maxVal = Math.max.apply(Math, data.map((item) => item.zrks));
      this.list = data.map((item) => {
        item.percent = `${parseInt(item.zrks / maxVal * 100)}%`;
        return item;
      });
    },
    startAnimation() {
      if (this.$refs.mySwiper) {
        this.$refs.mySwiper.swiper.autoplay.start();
      }
    },
    stopAnimation() {
      if (this.$refs.mySwiper) {
        this.$refs.mySwiper.swiper.autoplay.stop();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.flow-rank {
  position: absolute;
  left: 1008px;
  top: 262px;
  width: 835px;
  height: 1050px;
  .bar-chart {
    position: absolute;
    top: 100px;
    width: 100%;
    height: 980px;
    overflow: hidden;
    cursor: pointer;
    >div {
      height: 100%;
      .bar-item {
        font-size: 28px;
        height: 98px;
        >span {
          display: inline-block;
          &.bar-name {
            display: block;
            font-size: 26px;
            color: #fff;
          }
          &.opacity-bar {
            position: relative;
            width: 600px;
            height: 24px;
            background-color: transparent;
            >div {
              position: absolute;
              left: 0;
              max-width: 600px;
              height: 24px;
              min-width: 20px;
              .true-bar {
                display: block;
                height: 100%;
                background: linear-gradient(to right, #75f8c3, #b9fbe0);
                &.active {
                  background: linear-gradient(to right, #f8f375, #ffa340);
                }
                &:after {
                  position: absolute;
                  top: 0;
                  right: 0;
                  content: '';
                  display: block;
                  width: 15px;
                  height: 24px;
                  background: url('./img/small-hat.png') no-repeat;
                }
              }
            }
          }
          &.total {
            margin-left: 20px;
            font-size: 26px;
            color: #fff;
            .number {
              font-family: 'DIN Alternate';
              font-size: 40px;
            }
          }
        }
      }
    }
  }
}
</style>
