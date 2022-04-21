<template>
  <transition name="fade-transform" mode="out-in">
    <div class="modal-wrp" v-show="show">
      <div class="modal-bg" @click.prevent="hideModal"></div>
      <div class="modal-container">
        <div class="modal-title">
          <Title title="实时监控 "/>
          <img @click="hideModal" src="../img/close.png" alt="">
        </div>
        <div class="modal-monitor">
          <VideoFrame :camera-index-code="cameraIndexCode" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import VideoFrame from './Monitor/VideoFrame';
import Title from "../../../../../../../views/Charm/PartyConstruction/components/Title";
export default {
  components: {
    Title,
    VideoFrame,
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    cameraIndexCode: {
      type: String,
      default: '',
    },
  },
  computed: {
  },
  data() {
    return {

    };
  },
  methods: {
    hideModal() {
      this.$emit("update:show", false);
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
    width: 1367px;
    height: 877px;
    border: 1px solid;
    background: linear-gradient(180deg, #0F1925 0%);;
    overflow: hidden;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    .modal-title {
      position: relative;
      img {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    .modal-monitor {
      box-sizing: border-box;
      width: 100%;
      height: 813px;
      padding: 40px;

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
