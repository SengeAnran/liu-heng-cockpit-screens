<template>
  <div class="school_mange">
    <div class="name">师资力量分析</div>
    <div class="wrapper_count">
      <div class="teacher_count">
        <div class="count">
          <CountUp :num="count.teacher" />
        </div>
      </div>
      <div class="teacher_count temple_teacher">
        <div class="count">
          <CountUp :num="count.templeTeacher" />
        </div>
      </div>
      <div class="teacher_count best_teacher">
        <div class="count">
          <CountUp :num="count.bestTeacher" />
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
      count: {
        teacher: 580,
        templeTeacher: 455,
        bestTeacher: 456,
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
  right: 0;
  .name {
    padding-left: 30px;
    font-size: 22px;
    color: white;
  }
  .wrapper_count {
    height: 160px;
    width: 100%;
    padding: 20px 30px;
    box-sizing: border-box;
    display: flex;
    .teacher_count {
      height: 100%;
      width: 240px;
      background: url('../../images/teacher.png') no-repeat;
      background-size: 100% 100%;
      position: relative;;
      .count {
        width: 120px;
        font-size: 40px;
        span {
          position: absolute;
          top: 50%;
          right: 0%;
          transform: translate(-25%, -50%);
          display: inline-block;
          width: 80px;
          color: aliceblue;
          text-align: center;
        }
      }
    }
    .temple_teacher {
      background: url('../../images/temple.png') no-repeat;
      background-size: 100% 100%;
    }
    .best_teacher {
      background: url('../../images/fin-teacher.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
