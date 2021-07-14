<template>
  <div class="wrapper" :style="'width:'+ width + 'rem'">
    <div class="name-style">
      {{name}}
    </div>
    <div class="contain-box">
      <div v-for="(item, index) in dataList"
      class="flex-item"
      :key="index">
        <div class="num-style" :class="'font' + index">
          {{item.cnt}}
          <!-- <CountUp :num="item.num" /> -->
        </div>
      </div>
    </div>

    <div class="contain-box2" :style="'width: 100%' + '%;height:' + barStyle.height">
      <div v-for="(item, index) in dataList"
      class="flex-item"
      :style="'width:' + (item.cnt/sum * (width - 2)) + 'rem;'+ colorList[index].radius + ';background:' + colorList[index].shaow"
      :key="index">
        <div class="zhu"
        :style="'width:' + (item.cnt/sum * (width - 3)) + 'rem;' + colorList[index].radius + ';background:' + colorList[index].bgColor"
         ></div>
      </div>
    </div>
    <div class="contain-box">
      <div v-for="(item, index) in dataList"
      class="flex-item"
      :key="index">
        <div class="name-style" :style="'color: ' + colorList[index].fontColor">
          {{item.nation ? item.nation : item.sex}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      default: '',
      type: String,
    },
    dataList: {
      type: Array,
    },
    barStyle: {
      type: Object,
      default: function () {
        return {
          width: '70rem',
          height: '3rem',
        };
      },
    },
    width: {
      type: Number,
      default: () => 77,
    },
  },
  data() {
    return {
      colorList: [
        { fontColor: 'rgba(174, 250, 254, 1)', bgColor: 'linear-gradient(90deg, rgba(180, 250, 254, 0.02) 0%, rgba(180, 250, 254, 1) 100%)', radius: 'border-radius: 0 2rem 2rem 0;', shaow: 'linear-gradient(90deg, rgba(180, 250, 254, 0.02) 0%, rgba(180, 250, 254, .2) 100%)' },
        { fontColor: 'rgba(255, 167, 162, 1)', bgColor: 'linear-gradient(90deg, rgba(255, 167, 162, 1) 0%, rgba(255, 167, 162, .02) 100%);', radius: 'border-radius: 2rem 0 0 2rem ;', shaow: 'linear-gradient(90deg, rgba(255, 167, 162, .2) 0%, rgba(255, 167, 162, .02) 100%)' },
      ],
    };
  },
  computed: {
    sum() {
      return this.dataList && this.dataList.length > 0 ? this.dataList.map((i) => i.cnt).reduce((temp, i) => { return temp + i; }) : 0;
    },
  },
};
</script>
<style scoped lang="scss">
.wrapper {
  width: 100%;
  padding: 3.4rem 0;
  margin: 3.8rem 0;
  background: linear-gradient(90deg, rgba(17, 36, 37, 0) 0%, rgba(17, 36, 37, .5) 50%, rgba(17, 36, 37, 0) 100%,);
  .name-style {
    color: rgba(255, 255, 255, .8);
    font-size: 3.52rem;
    text-align: center;
  }
  .contain-box {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .flex-item {
      width: auto;
      .name-style {
        font-size: 2.4rem;
        font-weight: 600;
      }
      .font0 {
        background-image: -webkit-linear-gradient(bottom, #4ECDD8, white);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
      .font1 {
        background-image: -webkit-linear-gradient(bottom, rgba(255, 167, 162, 1), white);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
      .num-style {
        font-size: 3.2rem;
        font-weight: 600;
        color: white;
      }

    }

  }
  .contain-box2 {
    display: flex;
    justify-content: space-between;
    // border: 1px solid red;
    .flex-item {
      width: auto;
      display: flex;
      align-items: center;
    }

    .zhu {
      height: 1.18rem;
      width: auto;
    }
  }
}

</style>
