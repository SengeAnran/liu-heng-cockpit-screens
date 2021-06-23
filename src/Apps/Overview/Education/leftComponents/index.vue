<template>
  <div class="left_componemt">
    <BaseTitle title="教育资源情况" :width='720' class="title" />
    <SchoolCount />
    <TeacherCompose />
    <TeacherIncrease />
    <TeacherGrade />
    <TeacherEducation />
  </div>
</template>

<script>
import SchoolCount from './components/schoolCount';
import TeacherCompose from './components/teacherCompose';
import TeacherIncrease from './components/teacherIncrease';
import TeacherGrade from './components/teacherGrade';
import TeacherEducation from './components/teacherEducation';
export default {
  name: 'LeftComponents',
  components: {
    SchoolCount,
    TeacherCompose,
    TeacherIncrease,
    TeacherGrade,
    TeacherEducation,
  },
};
</script>
<style lang="scss" scoped>
.left_componemt {
  position: absolute;
  width: 1710px;
  height: 1076px;
  top: 250px;
  left: 140px;
  z-index: 10000;
  .title {
    position: absolute;
    left: 22px;
    top: 10px;
  }
}
</style>
