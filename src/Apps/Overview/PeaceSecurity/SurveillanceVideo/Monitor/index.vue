<template>
  <div class="monitor">
    <div class="video-wrapper">
      <div class="inter-wrapper">
        <div class="left-button button" @click="changeVideo('left')">
          <div class="left-icon icon">
            <img src="./img/left.png" alt="">
          </div>
        </div>
<!--        <HLSPlayer class="video" v-if="false" />-->
        <div class="video">
          <VideoFrame
            :camera-index-code="cameraIndexCode"
          />
        </div>
        <div class="right-button button" @click="changeVideo('right')">
          <div class="right-icon icon">
            <img src="./img/right.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <h3>{{name}}</h3>
<!--    <div class="video-list">-->
<!--      <div-->
<!--        class="item"-->
<!--        v-for="(item,index) in videoList"-->
<!--        :key="item.name"-->
<!--        :class="{ active: item.id === activeId }"-->
<!--        @click="onClick(index, item.id)"-->
<!--      >-->
<!--        <span class="name">{{ item.name }}</span>-->
<!--        <span class="date">{{ item.date | dateFormat('yyyy-MM-dd hh:mm:ss') }}</span>-->
<!--      </div>-->
<!--    </div>-->
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
      cameraIndexCode: this.videoList[Math.floor(this.videoList.length/2)].url,
      name: '',
      activeIndex: Math.floor(this.videoList.length/2),
    };
  },
  mounted() {
    this.cameraIndexCode = this.videoList[Math.floor(this.videoList.length/2)].url;
    this.name = this.videoList[Math.floor(this.videoList.length/2)].name;
  },
  methods: {
    // onClick(index, id) {
    //   console.log(index, id);
    //   this.activeId = id;
    //   this.cameraIndexCode = this.videoList[index].url;
    //   this.name = this.videoList[index].name;
    // },
    changeVideo(action){
      if (action === 'left') {
        if (this.activeIndex - 1 >-1) {
          this.cameraIndexCode = this.videoList[--this.activeIndex].url;
          this.name = this.videoList[this.activeIndex].name;
        }
      }
      else {
        if (this.activeIndex + 1 < this.videoList.length) {
          this.cameraIndexCode = this.videoList[++this.activeIndex].url;
          this.name = this.videoList[this.activeIndex].name;
        }
      }
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
  height: max-content;
  // box-sizing: border-box;
  padding-top: 2rem;
  //display: flex;
  .video-wrapper {
    width: 841px;
    height: 399px;
    background: url("./img/video_bg.png") 100% 100% no-repeat;
    border: 1px solid rgba(168, 243, 246, 0.2);
    //opacity: 0.3;
    border-radius: 10px;
    //width: 56rem;
    //flex: none;
    .inter-wrapper{
      margin: auto;
      margin-top: 18.5px;
      width: 797px;
      height: 362px;
      //background: red;
      //opacity: 0.25;
      border-radius: 10px;
      display: flex;
      .button {
        width: 98px;
        height: 100%;
        cursor: pointer;
        .icon {
          margin-top: 17rem;
          margin-left: 3.5rem;
        }
      }
      .video {
        margin-top: 12px;
        width: 600px;
        height: 338px;
        //height: 31.5rem;
        //height: 38.5rem;
      }
    }

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
  //.video-list {
  //  flex: auto;
  //  height: 40rem;
  //  overflow: auto;
  //  .item {
  //    cursor: pointer;
  //    background: rgba(255, 255, 255, 0.06);
  //    border: 2px solid #ffffff5d;
  //    border-radius: 10px;
  //    box-sizing: border-box;
  //    margin: 1rem;
  //    padding: 0.6rem 1rem;
  //    display: flex;
  //    flex-direction: column;
  //    height: 7rem;
  //    &.active {
  //      background: rgba(255, 255, 255, 0.18);
  //      border: 2px solid #ffffff97;
  //      .name {
  //        opacity: 0.7;
  //      }
  //      .date {
  //        opacity: 0.8;
  //      }
  //    }
  //    &:first-child {
  //      margin-top: 0;
  //    }
  //    .name {
  //      font-size: 22px;
  //      font-family: Source Han Sans CN;
  //      font-weight: 400;
  //      color: #FFFFFF;
  //      opacity: 0.5;
  //      overflow: hidden;
  //      text-overflow:ellipsis;
  //      white-space: nowrap;
  //    }
  //    .date {
  //      font-size: 18px;
  //      font-family: DINPro;
  //      font-weight: 400;
  //      color: #FFFFFF;
  //      opacity: 0.6;
  //    }
  //  }
  //}
}
</style>
