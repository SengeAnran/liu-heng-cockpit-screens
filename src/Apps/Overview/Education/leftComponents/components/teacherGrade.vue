<template>
  <div class="school_age">
    <PiceChart :chartData="{ pieData: personData, title: '教师等级结构' }" height="470" legendTop="30%" />
  </div>
</template>

<script>
import PiceChart from '../../components/piceChart';
import { getTeacherGradeTrend } from '@/api/Overview/Education/api';
export default {
  name: 'LeftComponents',
  components: {
    PiceChart,
  },
  data() {
    return {
      personData: [{ value: 484, name: ' ' }],
      color: [
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(97, 130, 174, 0.6)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(97, 130, 174, 0.6)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(200, 114, 242, 1)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(247, 114, 209, 1)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(132, 245, 222, 1)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(76, 197, 248, 1)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getTeacherGradeTrend()
        .request()
        .then((res) => {
          res.forEach((item) => {
            item.name = item.jsdj;
            item.value = item.rs;
          });
          this.personData = res;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.school_age {
  position: absolute;
  width: 855px;
  height: 370px;
  position: absolute;
  top: 710px;
  left: 0;
  // opacity: 0.6;
  // background: pink;
}
</style>
