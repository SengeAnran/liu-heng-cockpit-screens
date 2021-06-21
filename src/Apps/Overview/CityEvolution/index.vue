<template>
  <div class="CityEvolution">
    <LeftComponent />
    <RightComponent />
    <Map />
    <!-- <div class="marker_wrapper">
      <img src="./images/mark_left.png" alt="">
      <div class="address">
        六横
      </div>
      <div class="address_title">
        户籍人口
      </div>
      <div class="count">
        62824 <span>人</span>
      </div>
    </div> -->
  </div>
</template>

<script>
import LeftComponent from './leftComponents/index';
import RightComponent from './rightComponents';
import Map from './map/index';
export default {
  name: 'CityEvolution',
  components: {
    LeftComponent,
    RightComponent,
    Map,
  },
};
</script>
<style lang="scss" scoped>
.CityEvolution {
  position: relative;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  // background-image: url('./images/bg.png');
  // background: url('./images/bg.jpg') no-repeat;
  // background-size: 100% 100%;
  // background-image: url('./images/show-bg.png');
  // background-image: url('./images/empty_bg.png');
  .marker_wrapper {
    position: absolute;
    top: 50%;
    left: 44.5%;
    transform: translate(-50%, -50%);
    height: 240px;
    width: 890px;
    img {
      height: 100%; width: 100%;
    }
    .address {
      position: absolute;
      left: 70px;
      top: 30px;
      height: 50px;
      width: 140px;
      font-size: 40px;
      font-weight: bolder;
      color: white;
    }
    .address_title {
      position: absolute;
      left: 70px;
      top: 85px;
      height: 50px;
      width: 140px;
      // background: pink;
      font-size: 24px;
      font-weight: bolder;
      color: white;
    }
    .count {
      position: absolute;
      left: 260px;
      top: 70px;
      height: 50px;
      width: 190px;
      background: pink;
      font-weight: bolder;
      color: white;
      line-height: 50px;
      font-size: 42px;
      background-image:-webkit-linear-gradient(bottom,#B3B3B3,#FFFFFF);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      span {
        position: relative;
        left: -10px;
        font-size: 20px;
        background-image:-webkit-linear-gradient(bottom,#B3B3B3,#FFFFFF);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }
    }
  }
}
</style>
