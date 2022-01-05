<template>
<div>
  <transition name="fade-transform" mode="out-in">
    <div class="modal-wrp" v-show="show">
      <div class="modal-bg" @click.prevent="hideModal"></div>
      <div class="modal-container">
        <div class="view-header">
          <Title title="六横党组织信息" />
          <div @click="hideModal" class="close-button">
            <img src="@/assets/images/Charm/icon_cl.png" alt="">
          </div>
        </div>
        <div class="view-body">
          <div class="table">
            <div>
              <div class="table-title">
                <div v-for="item in list" :key="item" class="title-item">{{ item }}</div>
              </div>
              <div class="table-body">
                <div class="table-body-item" v-for="(item, index) in data" :key="item">
                  <div>{{ index +1 }}</div>
                  <div>{{ item.dzzjc }}</div>
                  <div>{{ item.dyzs }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
import Title from './Title';
export default {
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
  data() {
    return {
      list: ['序号', '党组织简称', '党员总数'],
    }
  },
  components: { Title },
  name: "pageModal",
  methods: {
    hideModal() {
      console.log('dss');
      this.$emit("update:show", false);
    },
  }
}
</script>

<style lang="scss" scoped>
.modal-wrp {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .modal-bg {
    //background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .modal-container {
    position: absolute;
    border-radius: 10px;
    overflow: hidden;
    top: 29rem;
    left: 215rem;
    //transform: translate(-50%, -50%);
    width: 1442px;
    max-height: 966px;
    border: 1px solid;
    background: #0F1925;
    .view-header {
      position: relative;
      .close-button {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
      }
    }
    .view-body{
      padding: 16px 42px;
      .table {
        display: flex;
        .table-title {
          margin-top: 30px;
          width: 1360px;
          height: 75px;
          border-image: linear-gradient(0deg, #ffffff) 10 10;
          opacity: 0.8;
          //border-radius: 14px;
          display: flex;
          justify-content: space-around;
          font-size: 24px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #FFFFFF;
          .title-item {
            text-align: left;
            line-height: 75px;
            &:first-child {
              text-align: center;
              width: 200px;
            }
            &:nth-child(2) {
              width: 600px;
            }
            &:nth-child(3) {
              text-align: center;
              width: 250px;
            }
          }
        }
        .table-body {
          max-height: 710px;
          //border-radius: 14px;
          overflow: auto;
          .table-body-item {
            display: flex;
            //margin-top: 10px;
            height: 72px;
            justify-content: space-around;
            font-size: 24px;
            font-weight: 500;
            &:nth-of-type(2n) {
              background: #1D2E3B;
            }
            div {
              //margin-left: 10px;
              //width: 180px;
              text-align: left;
              line-height: 75px;
              //color: #59dbe6;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              &:first-child {
                text-align: center;
                width: 200px;
                color: #86B0CB;
              }
              &:nth-child(2) {
                width: 600px;
                color: #FFFFFF;
              }
              &:nth-child(3) {
                text-align: center;
                width: 250px;
                color: #82E2E4;
              }
            }
          }
          .table-body-item :hover {
            cursor: pointer;
          }
        }
      }
    }
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
