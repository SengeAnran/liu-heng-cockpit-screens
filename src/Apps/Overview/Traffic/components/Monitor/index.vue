<template>
  <div class="monitor">
    <div class="video-wrapper">
      <HLSPlayer class="video" v-if="false" />
      <VideoFrame
        :camera-index-code="cameraIndexCode"
      />
      <h3>{{name}}</h3>
    </div>
    <div class="video-list">
      <div
        class="item"
        v-for="(item,index) in videoList"
        :key="item.name"
        :class="{ active: item.id === activeId }"
        @click="onClick(index, item.id)"
      >
        <span class="name">{{ item.name }}</span>
        <span class="date">{{ item.date | dateFormat('yyyy-MM-dd hh:mm:ss') }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import HLSPlayer from '../HLSPlayer';
import VideoFrame from './VideoFrame';
import { formatDate } from '@/utils/date';
export default {
  props: {
    videoList: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      formatDate,
      cameraIndexCode: this.videoList[0].url,
      name: '',
      activeId: 0,
    };
  },
  mounted() {
    // console.log(this.videoList[0].url);
    this.cameraIndexCode = this.videoList[0].url;
    this.name = this.videoList[0].name;
  },
  methods: {
    onClick(index, id) {
      console.log(index, id);
      this.activeId = id;
      this.cameraIndexCode = this.videoList[index].url;
      this.name = this.videoList[index].name;
    },
  },
  components: {
    HLSPlayer,
    VideoFrame,
  },
};
</script>
<style lang="scss" scoped>
.monitor {
  height: 45rem;
  // box-sizing: border-box;
  padding-top: 2rem;
  display: flex;
  .video-wrapper {
    width: 56rem;
    flex: none;
    .video {
      height: 31.5rem;
      //height: 38.5rem;
    }
    h3 {
      font-size: 2.8rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #FFFFFF;
      margin: 1.7rem 0;
      height: 3.8rem;
      text-align: center;
      background: url('./title.png') no-repeat;
      background-size: 100% 100%;
    }
  }
  .video-list {
    flex: auto;
    height: 40rem;
    overflow: auto;
    .item {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.06);
      border: 2px solid #ffffff5d;
      border-radius: 10px;
      box-sizing: border-box;
      margin: 1rem;
      padding: 0.6rem 1rem;
      display: flex;
      flex-direction: column;
      height: 7rem;
      &.active {
        background: rgba(255, 255, 255, 0.18);
        border: 2px solid #ffffff97;
        .name {
          opacity: 0.7;
        }
        .date {
          opacity: 0.8;
        }
      }
      &:first-child {
        margin-top: 0;
      }
      .name {
        font-size: 22px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        opacity: 0.5;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .date {
        font-size: 18px;
        font-family: DINPro;
        font-weight: 400;
        color: #FFFFFF;
        opacity: 0.6;
      }
    }
  }
}
</style>
