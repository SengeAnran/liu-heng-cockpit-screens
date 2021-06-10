<template>
  <div class="left-section1">
    <Title title="党员基本情况" />
    <div class="section-content">
      <div class="left-area">
        <div class="top-indi">
          <div class="party-icon">
            <img src="@/assets/images/Charm/party-icon.png">
            <p>基本情况</p>
          </div>
          <div class="indi-wrapper">
            <div class="indi-item" v-for="(item, index) in indiData" :key="index">
              <a class="vertical-line" v-show="index !== 0"></a>
              <p class="top-text">
                <span class="value">{{item.value}}</span>
                <span class="unit">{{item.unit}}</span>
              </p>
              <p class="bottom-text">{{item.label}}</p>

            </div>
          </div>
        </div>

        <div class="bottom-chart">
          <div ref="lineChart" ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from './components/Title';
export default {
  components: {
    Title,
  },
  data() {
    return {
      indiData: [
        {
          label: '正式党员',
          value: 275,
          unit: '人',
        },
        {
          label: '正式党员',
          value: 275,
          unit: '人',
        },
        {
          label: '正式党员',
          value: 275,
          unit: '人',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.left-section1{
  p{
    margin: 0;
  }
  .section-content{
    display: flex;
    justify-content: space-between;
    .left-area{
      width: 49%;
      .top-indi{
        background: linear-gradient(90deg,rgba(129, 157, 186, .06) 100%, rgba(129, 157, 186, 0) 0%);
        display: flex;
        align-items: center;
        margin-top: 3rem;
        .party-icon{
          display: inline-block;
          width: 10rem;
          text-align: center;
          p{
            background-image: -webkit-linear-gradient(bottom, #4ECDD8, white);
            font-size: 2.2rem;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }
        }
        .indi-wrapper{
          .indi-item{
            display: inline-block;
            text-align: center;
            width: 22rem;
            position: relative;
            .value{
              background-image: -webkit-linear-gradient(bottom, #4ECDD8, white);
              font-size: 4.8rem;
              -webkit-text-fill-color: transparent;
              -webkit-background-clip: text;
            }
            .unit{
              font-size: 2.2rem;
              color: #fff;
            }
            .bottom-text{
              font-size: 2.2rem;
              color: rgba(255, 255, 255, .5);
            }
            .vertical-line{
              display: inline-block;
              position: absolute;
              left: 0;
              top: 2.4rem;
              width: .1rem;
              background: #fff;
              height: 5.6rem;
            }
          }

        }
      }
    }
    .right-area{
      width: 49%;
    }
  }
}
</style>
