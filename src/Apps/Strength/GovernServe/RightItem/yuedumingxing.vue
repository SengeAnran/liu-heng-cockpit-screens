<template>
  <div>
    <div class="content1">
      <div class="img">
        <img :src="'data:image/png;base64,'+dataList.zp" />
      </div>
      <div class="content">
        <div class="name">{{dataList.xm}}</div>
        <div>
          <span class="font-name">工号</span>
          <span class="font-content">{{dataList.gh}}</span>
        </div>
        <div>
          <span class="font-name">部门</span>
          <span class="font-content">{{dataList.bm}}</span>
        </div>
        <div class="kouhao">
          <div style="font-size: 20px">服务口号</div>
          <div style="font-size: 18px; color: #dfdfdf; margin-top: 20px">{{dataList.fwkh}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMonthlyStar } from '@/api/Strength/GovernServe/api';
export default {
  data() {
    return {
      dataList: {},
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getMonthlyStar()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.dataList = json;
        });
    },
  },
};
</script>

<style lang="scss">
.content1 {
  margin-top: 20px;
  background-image: url('../img/yue_bg.png');
  height: 350px;
  width: 800px;
  display: flex;
  .img {
    margin: 50px;
    height: 240px;
    width: 230px;
    img {
      object-fit: fill;
      width: 100%;
      height: 100%;
    }
  }
  .content {
    margin: 20px;
    .kouhao {
      border-top: 2px solid slategrey;
      width: 300px;
      padding: 10px;
      margin-top: 20px;
    }
  }
  .name {
    font-size: 32px;
    color: #ffffff;
    margin: 20px 0px 20px 0px;
  }
}
.font-name {
  font-size: 24px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #554f4f;
  margin: 0px 50px 20px 0px;
  //   opacity: 0.5;
}
.font-content {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
</style>
