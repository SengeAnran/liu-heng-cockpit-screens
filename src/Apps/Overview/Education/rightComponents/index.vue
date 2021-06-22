<template>
  <div class="right_componemt">
    <BaseTitle title="学生情况" :width='720' class="title" />
    <JuniorSchool :dataMessage='juniorSchool' />
    <PrimarySchool :dataMessage='primarySchool' />
    <HeightSchool :dataMessage='heightSchool' />
    <Kindergarten :dataMessage='kindergarten' />
  </div>
</template>

<script>
import JuniorSchool from './components/juniorSchool';
import PrimarySchool from './components/primarySchool';
import HeightSchool from './components/heightSchool';
import Kindergarten from './components/kindergarten';
import { getStudentByCategory } from '@/api/Overview/Education/api';
export default {
  name: 'RightComponents',
  components: {
    JuniorSchool,
    PrimarySchool,
    HeightSchool,
    Kindergarten,
  },
  data() {
    return {
      kindergarten: {
        xAxis: [],
        classNum: [],
        allPeople: [],
      },
      primarySchool: {
        xAxis: [],
        classNum: [],
        allPeople: [],
      },
      juniorSchool: {
        xAxis: [],
        classNum: [],
        allPeople: [],
      },
      heightSchool: {
        xAxis: [],
        classNum: [],
        allPeople: [],
      },
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const categorys = ['幼儿园', '小学', '初中', '高中'];
      const allRequestMethods = categorys.map((item) => {
        const params = {
          category: item,
        };
        return getStudentByCategory().request(params);
      });
      const arr = await Promise.all(allRequestMethods);
      const [kindergarten, primarySchool, juniorSchool, heightSchool] = arr;
      this.kindergarten = this.resolveData(kindergarten);
      this.primarySchool = this.resolveData(primarySchool);
      this.juniorSchool = this.resolveData(juniorSchool);
      this.heightSchool = this.resolveData(heightSchool);
    },
    resolveData(data, obj = { xAxis: [], classNum: [], allPeople: [] }) {
      data.forEach((item) => {
        obj.xAxis.push(item.xxmc);
        obj.classNum.push(item.bjs);
        obj.allPeople.push(item.xszs);
      });
      return obj;
    },
  },
};
</script>
<style lang="scss" scoped>
.right_componemt {
  position: absolute;
  width: 1710px;
  height: 1076px;
  top: 250px;
  right: 140px;
  padding:0 35px;
  box-sizing: border-box;
  z-index: 10000;
  .title {
    position: absolute;
    left: 35px;
    top: 10px;
  }
}
</style>
