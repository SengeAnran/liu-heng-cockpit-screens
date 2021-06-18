<template>
  <div class="school_mange">
    <div class="name">学校数量</div>
    <div class="all_area_wrapper">
      <div class="all_area">
        <div class="plblick">
          <div class="count">
            <CountUp :num="message.publickSchool" />
          </div>
          <div class="unit">公办</div>
        </div>
        <div class="per">
          <div class="count">
            <CountUp :num="message.privateSchool" />
          </div>
          <div class="unit">民办</div>
        </div>
      </div>
    </div>
    <div class="all_area_wrapper builed">
      <div class="all_area">
        <div class="plblick">
          <div class="count">
            <CountUp :num="message.buildedPubSchool" />
          </div>
          <div class="unit">公办</div>
        </div>
        <div class="per">
          <div class="count">
            <CountUp :num="message.buildedPrivateSchool" />
          </div>
          <div class="unit">民办</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftComponents',
  components: {
  },
  data() {
    return {
      message: {
        publickSchool: 4,
        privateSchool: 4,
        buildedPubSchool: 9,
        buildedPrivateSchool: 12,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.school_mange {
  position: absolute;
  width: 855px;
  height: 190px;
  position: absolute;
  top: 100px;
  left: 0;
  padding: 0 20px;
  .name {
    padding-left: 30px;
    font-size: 22px;
    color: white;
  }
  .all_area_wrapper {
    display: inline-block;
    margin-top: 20px;
    height: 120px;
    width: 360px;
    box-sizing: border-box;
    .all_area {
      height: 100%;
      background: url('../../images/allArea.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      .plblick {
        position: absolute;
        right: 100px;
        width: 100px;
        height: 100%;
        // background: red;
        .count {
          height: 50px;
          font-size: 46px;
          font-family: '';
          color: white;
          font-weight: bolder;
          margin-top: 18px;
          text-align: center;
        }
        .unit {
          text-align: center;
          color: white;
          font-size: 20px;
          height: 40px;
          line-height: 40px;
        }
      }
      .per {
        position: absolute;
        right: 0;
        width: 110px;
        height: 100%;
        .count {
          height: 50px;
          font-size: 46px;
          font-family: '';
          color: white;
          font-weight: bolder;
          margin-top: 18px;
          text-align: center;
        }
        .unit {
          text-align: center;
          color: white;
          font-size: 20px;
          height: 40px;
          line-height: 40px;
        }
      }
    }
  }
  .builed {
    display: inline-block;
    margin-left: 80px;
    .all_area {
      height: 100%;
      background: url('../../images/builded.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
    }
  }
}
</style>
