<template>
  <div class="CreateIsland">
    <secondary-title name="六横镇人才专利发明证书" />
    <div class="container">
      <div class="item" :key="index" v-for="(item,index) in imageList">
        <img :src="item" />
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
import { getPatentPicList } from '@/api/Overview/Innovation/api';
export default {
  components: {
    SecondaryTitle,
  },
  data() {
    return {
      imageList: [
        require('../images/temp.png'),
        require('../images/temp.png'),
        require('../images/temp.png'),
        require('../images/temp.png'),
        require('../images/temp.png'),
        require('../images/temp.png'),
        require('../images/temp.png'),
        require('../images/temp.png'),
        require('../images/temp.png'),
        require('../images/temp.png'),
        require('../images/temp.png'),
        require('../images/temp.png'),
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getPatentPicList().request().then((json) => {
        console.log('六横镇人才专利发明证书', json);
        // this.imageList = json;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  .item {
    width: 380px;
    height: 214px;
    &:nth-child(2n + 1) {
      margin-right: 40px;
      margin-bottom: 26px;
    }
  }
}
</style>
