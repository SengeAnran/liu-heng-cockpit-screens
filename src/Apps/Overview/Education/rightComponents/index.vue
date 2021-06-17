<template>
  <div class="right_componemt">
    <BaseTitle title="适龄儿童入学分析" :width='720' class="title" />
    <div class="children">
      <div class="all_area_studet">
        <div class="num">
          <CountUp :num="students.students" />
        </div>
        <div class="unit">人</div>
      </div>
      <div class="all_area_studet not_area_studet">
        <div class="num">
          <CountUp :num="students.noStudent" />
        </div>
        <div class="unit">人</div>
      </div>
    </div>
    <TrendComponent />
    <HistoryStudent />
    <AdmissionsStudent />
  </div>
</template>

<script>
import TrendComponent from './components/trend';
import HistoryStudent from './components/historyStudent';
import AdmissionsStudent from './components/admissionsStudent';
export default {
  name: 'RightComponents',
  components: {
    TrendComponent,
    HistoryStudent,
    AdmissionsStudent,
  },
  data() {
    return {
      students: {
        students: 2344,
        noStudent: 2454,
      },
    };
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
  .title {
    position: absolute;
    left: 35px;
    top: 10px;
  }
  .children {
    margin-top: 100px;
    height: 400px;
    width: 810px;
    box-sizing: border-box;
    display: flex;
    .all_area_studet {
      display: inline-block;
      height: 100%;
      width: 390px;
      background: url('../images/alreadyStudent.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      .num {
        position: absolute;
        bottom: 20%;
        font-size: 60px;
        width: 100%;
        text-align: center;
        color: #66CCFF;
      }
      .unit {
        position: absolute;
        bottom: 10%;
        font-size: 30px;
        width: 100%;
        text-align: center;
        color: #66CCFF;
      }
    }
    // #FF9798
    .not_area_studet {
      display: inline-block;
      margin-left: 30px;
      height: 100%;
      width: 390px;
      background: url('../images/noStudent.png') no-repeat;
      background-size: 100% 100%;
      .num {
        color: #FF9798;
      }
      .unit {
        color: #FF9798;
      }
    }
  }
}
</style>
