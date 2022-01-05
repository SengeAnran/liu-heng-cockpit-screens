<template>
  <transition name="fade-transform" mode="out-in">
    <div class="modal-wrp" v-show="show">
      <div class="modal-bg" @click.prevent="hideModal"></div>
      <div class="modal-container" @mouseenter="mouseEnter(data)" @mouseleave="mouseleave(data)">
        <swiper  ref="mySwiper" :options="swiperOption" v-if="data.length > 1" pagination>
          <SwiperSlider class="item" v-for="(item, index) in data" :key="index">
            <img :src="'data:image/png;base64,'+item.tp" alt="">
          </SwiperSlider>
        </swiper>
<!--        <img v-else :src="'data:image/png;base64,'+data[0].tp" alt="">-->
        <div class="img-model--prev"></div>
        <div class="img-model-next"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import swiper from '@/components/Swiper';
import SwiperSlider from '@/components/SwiperSlider';
export default {
  // name: "modal",
  components: {
    swiper,
    SwiperSlider,
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  data() {
    return {
      swiperOption: {
        // direction: 'vertical',
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        // autoplay: true,
        navigation: {
          nextEl: ".img-model-next",
          prevEl: ".img-model--prev",
        },
      },
      // swiperOption: {
      //   speed: 1000,
      //   grabCursor: true,
      //
      //   navigation: {
      //     nextEl: ".img-model-next",
      //     prevEl: ".img-model--prev",
      //   },
      // },
    };
  },
  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
    mouseEnter(lists) {
      if (lists.length < 1) {
        return;
      }
      if (this.$refs.mySwiper) {
        this.$refs.mySwiper.swiper.autoplay.stop();
      }
    },
    mouseleave(lists) {
      if (lists.length < 1) {
        return;
      }
      if (this.$refs.mySwiper) {
        this.$refs.mySwiper.swiper.autoplay.start();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.modal-wrp {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2001;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .modal-bg {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .modal-container {
    position: absolute;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 60%;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
    .swiper-button-disabled {
      opacity: 0.4 !important;
      display: none;
    }

    .img-model--prev,
    .img-model-next {
      position: absolute;
      width: 60px;
      height: 60px;
      background: rgba(0, 0, 0, 0.65);
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      cursor: pointer;
      &:after {
        display: block;
        content: "";
        width: 14px;
        height: 15px;
        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
        margin: 24px;
        transform-origin: center;
      }
    }
    .img-model--prev {
      left: 40px;
      &::after {
        margin-top: 22px;
        margin-left: 22px;
        transform: rotate(135deg);
      }
    }
    .img-model-next {
      right: 40px;
      &::after {
        margin-top: 22px;
        margin-left: 20px;
        transform: rotate(-45deg);
      }
    }
  }
}
.swiper-container {
  width: 100%;
  height: 100%;
  .swiper-slide {
    height: 100% !important;
    width: 100% !important;
    //box-sizing: border-box !important;
  }
}
</style>

<style lang="scss" scoped>
  /* fade-transform */
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.5s;
  }

  .fade-transform-enter {
    opacity: 0;
  }

  .fade-transform-leave-to {
    opacity: 0;
  }
</style>
