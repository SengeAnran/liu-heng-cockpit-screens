<template>
  <div class="left_componemt">
    <BaseTitle title="教育资源情况" :width='720' class="title" />
    <SchoolCount />
    <TeacherCount />
    <TeacherCompose />
    <TeacherIncrease />
    <TeacherAge />
    <TeacherEducation />
  </div>
</template>

<script>
import TeacherCount from './components/teacherCount';
import SchoolCount from './components/schoolCount';
import TeacherCompose from './components/teacherCompose';
import TeacherIncrease from './components/teacherIncrease';
import TeacherAge from './components/teacherAge';
import TeacherEducation from './components/teacherEducation';
export default {
  name: 'LeftComponents',
  components: {
    SchoolCount,
    TeacherCount,
    TeacherCompose,
    TeacherIncrease,
    TeacherAge,
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
  .title {
    position: absolute;
    left: 22px;
    top: 10px;
  }
}
</style>
